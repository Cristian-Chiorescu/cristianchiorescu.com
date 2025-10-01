export default function BackgroundGrid() {
  return (
    <div>
      <div
        aria-hidden
        className="
            pointer-events-none fixed inset-0 z-0
            bg-[radial-gradient(currentColor_1px,transparent_1px)]
            [background-size:60px_60px]
            text-sky-600/10 dark:text-slate-400/10
            [mask-image:radial-gradient(70%_60%_at_50%_40%,black_60%,transparent)]
          "
      />
      <div
        aria-hidden
        className="
            pointer-events-none fixed inset-7 z-0
            bg-[radial-gradient(currentColor_1px,transparent_1px)]
            [background-size:60px_60px]
            text-sky-600/10 dark:text-slate-400/10
            [mask-image:radial-gradient(70%_60%_at_50%_40%,black_60%,transparent)]
          "
      />
    </div>
  );
}
