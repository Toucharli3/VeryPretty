function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-5 w-5 ${filled ? 'text-rose-400' : 'text-rose-200'}`}
      fill="currentColor"
    >
      <path d="M10 1.5l2.472 5.007 5.528.803-4 3.898.944 5.505L10 14.115 5.056 16.71 6 11.208l-4-3.898 5.528-.803L10 1.5z" />
    </svg>
  );
}

export default function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} étoiles sur 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} filled={i <= rating} />
      ))}
    </div>
  );
}
