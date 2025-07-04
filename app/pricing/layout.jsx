export default function PricingLayout({ children }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="relative inline-block justify-center text-center">
        {children}
      </div>
    </section>
  );
}
