export default function DigitalStoreLayout({ children }) {
  return (
    <section className="items-center justify-center gap-4 py-8 md:py-10">
      <div className="text-center">{children}</div>
    </section>
  );
}
