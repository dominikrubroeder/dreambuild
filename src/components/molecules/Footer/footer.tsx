import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 text-xs">
      <Link
        href="https://www.dominikrubroeder.dev"
        className="text-muted-foreground"
        target="_blank"
      >
        dominikrubroeder.dev/dreambuild
      </Link>
    </footer>
  );
}
