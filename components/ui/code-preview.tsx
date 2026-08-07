import { cn } from "@/lib/utils";

const FILE_NAME = "matmul.cu";

const SOURCE = `__global__ void matmul_tiled_kernel(float* C, const float* A, const float* B, int M, int N, int K) {
    __shared__ float a_tile[TILE_SIZE][TILE_SIZE], b_tile[TILE_SIZE][TILE_SIZE];
    int tx = threadIdx.x, ty = threadIdx.y, row = blockIdx.y * blockDim.y + ty, col = blockIdx.x * blockDim.x + tx;
    float sum = 0.0f;

    for (int phase = 0; phase < (K + TILE_SIZE - 1) / TILE_SIZE; phase++) {
        a_tile[ty][tx] = (row < M && phase * TILE_SIZE + tx < K) ? A[row * K + phase * TILE_SIZE + tx] : 0.0f;
        b_tile[ty][tx] = (col < N && phase * TILE_SIZE + ty < K) ? B[(phase * TILE_SIZE + ty) * N + col] : 0.0f;
        __syncthreads();
        for (int i = 0; i < TILE_SIZE; i++) {
            sum += a_tile[ty][i] * b_tile[i][tx];
        }
        __syncthreads();
    }
    if (row < M && col < N) {
        C[row * N + col] = sum;
    }
}`;

// GitHub's own two syntax themes, light first and dark behind the `dark:`
// variant. Written out in full rather than built from a palette object, because
// Tailwind only generates the utilities it can find as literal strings.
const COMMENT = "text-[#6e7781] dark:text-[#8b949e]";
const KEYWORD = "text-[#cf222e] dark:text-[#ff7b72]";
const BUILTIN = "text-[#0550ae] dark:text-[#79c0ff]";
const NUMBER = "text-[#0550ae] dark:text-[#79c0ff]";
const FUNCTION = "text-[#8250df] dark:text-[#d2a8ff]";
const STRING = "text-[#0a3069] dark:text-[#a5d6ff]";
const PLAIN = "text-[#1f2328] dark:text-[#c9d1d9]";

const RULES: [RegExp, string][] = [
  [/^\/\/[^\n]*/, COMMENT],
  [/^\/\*[\s\S]*?\*\//, COMMENT],
  [/^#[a-z]+/, KEYWORD],
  [/^<[\w./]+>/, STRING],
  [/^"(?:[^"\\]|\\.)*"/, STRING],
  [/^\d[\w.]*/, NUMBER],
  [
    /^\b(?:__global__|__device__|__host__|__shared__|__restrict__|__syncthreads|const|void|float|double|int|unsigned|char|bool|auto|size_t|if|else|for|while|do|return|break|continue|struct|class|template|typename)\b/,
    KEYWORD,
  ],
  [/^\b(?:blockIdx|blockDim|threadIdx|gridDim|warpSize)\b/, BUILTIN],
  [/^[A-Za-z_]\w*(?=\s*\()/, FUNCTION],
  [/^[A-Za-z_]\w*/, PLAIN],
  [/^[\s\S]/, PLAIN],
];

function tokenize(source: string) {
  const tokens: { text: string; cls: string }[] = [];
  let rest = source;
  while (rest) {
    let text = rest[0];
    let cls = PLAIN;
    for (const [pattern, candidate] of RULES) {
      const match = pattern.exec(rest);
      if (match) {
        text = match[0];
        cls = candidate;
        break;
      }
    }
    rest = rest.slice(text.length);
    const last = tokens[tokens.length - 1];
    if (last && last.cls === cls) last.text += text;
    else tokens.push({ text, cls });
  }
  return tokens;
}

export function CodePreview({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative mt-2 -mr-(--card-spacing) min-h-48 flex-1 overflow-hidden -px-(--card-spacing)",
        className,
      )}
    >
      <div className="absolute z-10 bg-linear-to-t from-card to-transparent h-16 w-full inset-x-0 bottom-0"></div>
      <div className="absolute top-2 left-6 overflow-hidden rounded-tl-lg bg-white ring-1 ring-[#d0d7de] shadow dark:bg-[#0d1117] dark:ring-[#30363d]">
        <div className="border-b border-[#d0d7de] bg-[#f6f8fa] px-3 py-1.5 dark:border-[#21262d] dark:bg-[#161b22]">
          <span className="font-mono text-[10px] leading-none text-[#6e7781] dark:text-[#8b949e]">
            {FILE_NAME}
          </span>
        </div>
        <pre className="px-3.5 py-3 text-[11px] leading-[1.75] whitespace-pre">
          <code>
            {tokenize(SOURCE).map((token, i) => (
              <span key={i} className={token.cls}>
                {token.text}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
