export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto py-6 px-10 lg:px-0 border-t border-border flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-xs text-center sm:text-left">
      <div>Copyright © 2026 Maxime Boucher</div>
      <p>
        Built with{" "}
        <a
          className="font-semibold text-foreground"
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          className="font-semibold text-foreground"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          TypeScript
        </a>
        , deployed with{" "}
        <a
          className="font-semibold text-foreground"
          href="https://vercel.com/"
          target="_blank"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
