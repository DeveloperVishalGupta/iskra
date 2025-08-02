export default function InvolveLayout({ children }) {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10 bg-slate-100">
      {children}
    </section>
  );
}
