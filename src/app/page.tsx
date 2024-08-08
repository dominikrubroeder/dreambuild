import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-between p-24">
      <div className="grid gap-4 text-center">
        <h1 className="text-6xl font-bold">✨ DreamBuild</h1>
        <p className="text-muted-foreground">
          Start editing in `./src/app/page.tsx`
        </p>

        <Link
          className="rounded-lg border border-border bg-muted px-4 py-3"
          href="https://github.com/dominikrubroeder/dreambuild"
          target="_blank"
        >
          Or visit the ✨DreamBuild repository on GitHub
        </Link>
        <Link href="https://nextjs.org" target="_blank">
          Next.js Docs
        </Link>
      </div>
    </main>
  );
}
