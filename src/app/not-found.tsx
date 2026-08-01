import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#070b12] px-6 text-center text-white">
      <p className="mes-eyebrow">
        Meaningful. Empowering. Solutions.
      </p>

      <h1 className="mt-6 text-6xl font-semibold tracking-tight">
        404
      </h1>

      <p className="mt-6 max-w-lg text-white/60">
        Looks like you've wandered off the path.
      </p>

      <Link
        href="/"
        className="mes-button mes-button-primary mt-10"
      >
        Return Home
      </Link>
    </main>
  );
}