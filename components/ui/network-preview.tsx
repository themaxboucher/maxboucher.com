"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { useHoverPlaying } from "./hover-play-card";

const LAYER_SIZES = [4, 5, 5, 3];
const LAYER_X = [32, 78, 124, 170];
const NODE_GAP = 18;
const NODE_R = 5;
const MID_Y = 48;
const HOP = 0.5; // seconds between one layer of edges and the next
const ROW = 0.07; // seconds between one row of edges and the next
const FILL = 0.22; // seconds an edge takes to light end to end (5% of the cycle)
const LEAD = 0.12; // how early the data lands, before the pass moves off it
const BACKWARD_AT = 2.2; // when the gradients start back from the output

// The opacity an activation is drawn at, weakest weight to strongest. The floor
// keeps the faintest connection on the page instead of dropping it entirely.
const WEAKEST = 0.14;
const STRONGEST = 0.72;

const GRADIENT = 0.55;

/**
 * How strongly one edge carries — the opacity its activation is drawn at.
 * Trained weights aren't uniform: most connections carry little and a few carry
 * the signal, so the exponent skews the draw toward the weak end and leaves a
 * handful bright. Hashed off the edge's position rather than rolled at random,
 * so the server and the client render the same network.
 *
 * Rounded, because "the same network" has to survive being written into HTML
 * and read back. A fractional exponent isn't required to round the same way
 * everywhere, and Node and the browser disagree on the last digit of some of
 * these — enough for React to call the markup mismatched on hydration. Four
 * places is far past what an opacity can show and well clear of the drift; the
 * means taken over these values are exact arithmetic on the rounded numbers, so
 * they agree once these do.
 */
function weight(gap: number, from: number, to: number) {
  let h = Math.imul(gap * 1009 + from * 61 + to + 1, 0x9e3779b1);
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  const unit = ((h ^ (h >>> 13)) >>> 0) / 2 ** 32;
  return (
    Math.round((WEAKEST + (STRONGEST - WEAKEST) * unit ** 1.6) * 1e4) / 1e4
  );
}

const layers = LAYER_SIZES.map((size, i) => ({
  x: LAYER_X[i],
  ys: Array.from(
    { length: size },
    (_, n) => MID_Y + (n - (size - 1) / 2) * NODE_GAP,
  ),
}));

const nodes = layers.flatMap((layer) =>
  layer.ys.map((y) => ({ x: layer.x, y })),
);

// One entry per layer of edges, each split into rows by source node: the
// forward pass cascades those rows top to bottom, the backward pass takes the
// whole layer at once. Each edge carries its own weight alongside its path.
const gaps = layers.slice(1).map((to, i) => {
  const from = layers[i];
  const rows = from.ys.map((y1, j) =>
    to.ys.map((y2, k) => ({
      d: `M${from.x} ${y1}L${to.x} ${y2}`,
      w: weight(i, j, k),
    })),
  );
  return { rows, edges: rows.flat() };
});

const allEdges = gaps.flatMap((gap) => gap.edges);

// What a node fires at: whatever its incoming weights deliver, so it flashes at
// the mean strength of the edges arriving at it. The input layer has none — it
// is the data itself, and lights at full strength.
const activations = layers.map((layer, i) =>
  layer.ys.map((_, n) =>
    i === 0
      ? STRONGEST
      : gaps[i - 1].rows.reduce((sum, row) => sum + row[n].w, 0) /
        gaps[i - 1].rows.length,
  ),
);

// The mirror of that on the way back: a gradient reaches a node through the
// edges leaving it, so it flashes at their mean strength instead. The output
// layer has none — the loss lands there, at full strength.
const gradients = layers.map((layer, i) =>
  layer.ys.map((_, n) =>
    i === gaps.length
      ? STRONGEST
      : gaps[i].rows[n].reduce((sum, edge) => sum + edge.w, 0) /
        gaps[i].rows[n].length,
  ),
);

// When a layer fires: the moment the signal finishes landing on it, never
// anything to do with what leaves it afterwards. The rows of edges into a layer
// leave ROW apart and each takes FILL to cross, so the last row to set off is
// the last to arrive — and that is the beat the layer fires on. The input layer
// has nothing arriving; it is the data being presented, and lands LEAD before
// the pass moves off it.
const firesAt = layers.map((_, i) =>
  i === 0 ? -LEAD : (i - 1) * HOP + (gaps[i - 1].rows.length - 1) * ROW + FILL,
);

// stroke-dasharray is inherited, so one animated <g> drives all of its edges.
const live = "opacity-0 [stroke-dasharray:100_100] motion-reduce:animate-none";
const flash = "opacity-0 motion-reduce:animate-none";

const FADE = 500; // How long the step takes to settle after hover out.

function usePlaying(hovered: boolean) {
  const [playing, setPlaying] = React.useState(hovered);

  React.useEffect(() => {
    if (hovered) {
      setPlaying(true);
      return;
    }
    const timer = setTimeout(() => setPlaying(false), FADE);
    return () => clearTimeout(timer);
  }, [hovered]);

  return playing;
}

export function NetworkPreview() {
  // The effect animates when the card is hovered on, and always on small screens
  const hovered = useHoverPlaying() ?? false;
  const playing = usePlaying(hovered);

  // Only the way out is eased. The pass is timed to be underway the instant it
  // is hovered — the input layer's negative delay exists to buy exactly that —
  // so fading in would spend that lead rather than show it. Coming back within
  // the fade catches the step still running and simply re-reveals it, instead
  // of cutting the pass short to start it over.
  const step = cn(
    "transition-opacity ease-out motion-reduce:transition-none",
    hovered ? "opacity-100" : "opacity-0",
  );
  const stepStyle = { transitionDuration: hovered ? "0ms" : `${FADE}ms` };

  return (
    <div className="flex h-full items-center justify-center">
      <svg viewBox="18 4 164 88" fill="none" className="h-full w-full">
        <g className="stroke-foreground/9" strokeWidth="0.5">
          {allEdges.map((edge, i) => (
            <path key={i} d={edge.d} />
          ))}
        </g>
        <g className={step} style={stepStyle}>
          {gaps.flatMap((gap, i) =>
            gap.rows.map((row, r) => (
              <g
                key={`fwd-${i}-${r}`}
                strokeWidth="0.8"
                strokeLinecap="round"
                style={{ animationDelay: `${i * HOP + r * ROW}s` }}
                className={cn(
                  live,
                  "stroke-primary",
                  playing && "animate-edge-forward",
                )}
              >
                {row.map((edge, j) => (
                  <path
                    key={j}
                    d={edge.d}
                    pathLength="100"
                    strokeOpacity={edge.w}
                  />
                ))}
              </g>
            )),
          )}
          {gaps.map((gap, i) => (
            <g
              key={`back-${i}`}
              strokeWidth="0.8"
              strokeLinecap="round"
              style={{
                animationDelay: `${BACKWARD_AT + (gaps.length - 1 - i) * HOP}s`,
              }}
              className={cn(
                live,
                "stroke-primary",
                playing && "animate-edge-backward",
              )}
            >
              {gap.edges.map((edge, j) => (
                <path
                  key={j}
                  d={edge.d}
                  pathLength="100"
                  strokeOpacity={edge.w * GRADIENT}
                />
              ))}
            </g>
          ))}
        </g>
        <g className="fill-card stroke-card" strokeWidth="1.5">
          {nodes.map((node, i) => (
            <circle key={i} cx={node.x} cy={node.y} r={NODE_R} />
          ))}
        </g>
        <g className="fill-foreground/16">
          {nodes.map((node, i) => (
            <circle key={i} cx={node.x} cy={node.y} r={NODE_R} />
          ))}
        </g>
        <g className={step} style={stepStyle}>
          {/* Each layer flashes the instant the signal lands on it. The input
              layer's delay goes negative to buy its lead: the flash starts a
              fraction of the way in rather than waiting out a whole cycle to
              come around. */}
          {layers.map((layer, i) => (
            <g
              key={`on-${i}`}
              style={{ animationDelay: `${firesAt[i]}s` }}
              className={cn(
                flash,
                "fill-primary",
                playing && "animate-node-flash",
              )}
            >
              {layer.ys.map((y, j) => (
                <circle
                  key={j}
                  cx={layer.x}
                  cy={y}
                  r={NODE_R}
                  fillOpacity={activations[i][j]}
                />
              ))}
            </g>
          ))}
          {layers.map((layer, i) => {
            // Gradients arrive from the right, so a node lights the moment the
            // layer of edges on its right finishes reaching it. The output
            // layer has nothing to its right — it starts the pass.
            const arrival =
              i < gaps.length
                ? BACKWARD_AT + (gaps.length - 1 - i) * HOP + FILL
                : BACKWARD_AT;
            return (
              <g
                key={`grad-${i}`}
                style={{ animationDelay: `${arrival}s` }}
                className={cn(
                  flash,
                  "fill-primary",
                  playing && "animate-node-flash",
                )}
              >
                {layer.ys.map((y, j) => (
                  <circle
                    key={j}
                    cx={layer.x}
                    cy={y}
                    r={NODE_R}
                    fillOpacity={gradients[i][j] * GRADIENT}
                  />
                ))}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
