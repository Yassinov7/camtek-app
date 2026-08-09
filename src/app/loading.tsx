export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4 pt-24" role="status" aria-live="polite">
      <div className="text-center">
        <div
          className="mx-auto h-10 w-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin"
          aria-hidden
        />
        <p className="mt-4 text-sm text-gray-600">جاري التحميل...</p>
      </div>
    </div>
  );
}
