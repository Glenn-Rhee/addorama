import StoreCard from "@/components/StorePage/StoreCard";

export default function ReviewLayour({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <StoreCard />
      {children}
    </section>
  );
}
