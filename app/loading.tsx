export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="rounded-3xl border border-white/20 px-12 py-8 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
          <span className="text-sm uppercase tracking-[0.2em] text-white/80">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
