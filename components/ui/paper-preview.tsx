import { cn } from "@/lib/utils";

import { PreviewFrame } from "./preview-frame";

const sheet =
  "absolute inset-0 overflow-hidden rounded-md bg-[color-mix(in_oklab,var(--color-foreground)_2%,var(--color-card))] transition-transform duration-500 ease-out motion-reduce:transition-none";

// A page at letter proportions, set wider than the card so its left side is
// always cut by the card's own edge — the type is drawn at the size it reads at
// rather than blown up with the page, so this is a bigger page rather than the
// same one held closer.
const PAGE = "h-[435px] w-[336px]";

function Line({ className }: { className?: string }) {
  return (
    <div className={cn("h-[1.5px] rounded-full bg-foreground/15", className)} />
  );
}

function Fine({ className }: { className?: string }) {
  return <div className={cn("h-px bg-foreground/13", className)} />;
}

function Head({ className }: { className?: string }) {
  return (
    <div className={cn("h-0.5 rounded-full bg-foreground/32", className)} />
  );
}

function Para({
  lines,
  last,
  className,
}: {
  lines: number;
  last: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-0.75", className)}>
      {Array.from({ length: lines }, (_, i) => (
        <Line key={i} />
      ))}
      <Line className={last} />
    </div>
  );
}

function Author({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-[2.5px] *:mx-auto", className)}>
      <div className="h-0.5 w-[84%] rounded-full bg-foreground/26" />
      <Line className="w-full" />
      <Line className="w-[86%]" />
      <Line className="w-[64%]" />
    </div>
  );
}

/** A footnote, under its rule at the foot of a column. */
function Footnote({ lines, className }: { lines: number; className?: string }) {
  return (
    <div className={cn("pt-1.25", className)}>
      <div className="h-px w-[44%] bg-foreground/25" />
      <div className="mt-1 space-y-[2.5px]">
        {Array.from({ length: lines }, (_, i) => (
          <Fine key={i} />
        ))}
        <Fine className="w-[72%]" />
      </div>
    </div>
  );
}

/** The page itself, set as an ACM two-column paper. */
function Paper() {
  return (
    <div className="flex h-full flex-col px-7 py-6">
      {/* Title and subtitle, centred across both columns. The masthead can't
          shrink: with the columns set this full, flexbox would take the height
          it needs out of these lines first. */}
      <div className="h-1 w-[64%] shrink-0 self-center rounded-full bg-foreground/40" />
      <div className="mt-1 h-0.5 w-[34%] shrink-0 self-center rounded-full bg-foreground/22" />
      <div className="mt-3 grid shrink-0 grid-cols-3 gap-3">
        <Author />
        <Author />
        <Author />
      </div>
      <div className="mt-3.5 grid flex-1 grid-cols-2 gap-4">
        <div className="flex flex-col">
          <Head className="w-[48%]" /> {/* ABSTRACT */}
          <Para lines={5} last="w-[64%]" className="mt-1.5" />
          <Para lines={6} last="w-[78%]" className="mt-1.5" />
          <Para lines={5} last="w-[42%]" className="mt-1.5" />
          <Para lines={6} last="w-[70%]" className="mt-1.5" />
          <Footnote lines={3} className="mt-auto" />
        </div>
        <div className="flex flex-col">
          <Head className="w-[70%]" /> {/* CCS CONCEPTS */}
          <Para lines={1} last="w-[36%]" className="mt-1.5" />
          <Head className="mt-2 w-[52%]" /> {/* KEYWORDS */}
          <Para lines={1} last="w-[54%]" className="mt-1.5" />
          {/* ACM Reference format, set smaller than the body. */}
          <div className="mt-2 h-[1.5px] w-[62%] rounded-full bg-foreground/26" />
          <div className="mt-1 space-y-[2.5px]">
            <Fine />
            <Fine className="w-[88%]" />
          </div>
          {/* A numbered section head, then its opening paragraph. */}
          <div className="mt-2 flex items-center gap-1">
            <Head className="w-[6%]" />
            <Head className="w-[74%]" />
          </div>
          <Para lines={4} last="w-[58%]" className="mt-1.5" />
          {/* A display equation, numbered at the right margin. */}
          <div className="mt-2 flex items-center gap-0.75">
            <div className="flex flex-1 flex-col items-center gap-0.5">
              <Line className="w-[40%]" />
              <div className="h-px w-[52%] bg-foreground/[0.28]" />
              <Line className="w-[28%]" />
            </div>
            <Line className="w-[9%]" />
          </div>
          <div className="mt-2 flex items-center gap-1">
            <Head className="w-[6%]" />
            <Head className="w-[58%]" />
          </div>
          <Para lines={5} last="w-[66%]" className="mt-1.5" />
          <Footnote lines={1} className="mt-auto" />
        </div>
      </div>
    </div>
  );
}

/** An ACM paper, laid into the bottom-left corner of the card. */
export function PaperPreview() {
  return (
    <PreviewFrame className="relative mt-2 -ml-(--card-spacing) overflow-hidden">
      {/* The page dissolves into the card on its way down to the title, so the
          crop along the bottom never lands as an edge. */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-linear-to-t from-card to-transparent" />
      {/* Only the head of the page is on the card: the card's own left edge cuts
          it down one side and the fade takes the other. */}
      <div className={cn(PAGE, "absolute top-5 right-6")}>
        {/* The draft it was written over, offset just enough to show as a
            second edge along the top. Hovering the card fans it further out —
            far enough to read as a stack, never so far that the frame clips the
            corner it lifts. */}
        <div
          className={cn(
            sheet,
            "-translate-y-1.5 rotate-[-1.5deg] ring-1 ring-foreground/[0.07]",
            "group-hover/card:-translate-x-1.5 group-hover/card:-translate-y-2 group-hover/card:rotate-[-2.25deg]",
          )}
        />
        <div
          className={cn(
            sheet,
            "ring-1 ring-foreground/10",
            "group-hover/card:translate-x-1.5 group-hover/card:translate-y-1 group-hover/card:rotate-[0.75deg]",
          )}
        >
          <Paper />
        </div>
      </div>
    </PreviewFrame>
  );
}
