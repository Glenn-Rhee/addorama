import Container from "@/components/Container";
import NavbarStore from "@/components/StorePage/NavbarStore";
import StoreCard from "@/components/StorePage/StoreCard";

export default function ReviewLayour({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Container className="lg:px-20 md:px-[70px] px-6">
        <StoreCard />
        <NavbarStore />
      </Container>
      {children}
    </section>
  );
}
