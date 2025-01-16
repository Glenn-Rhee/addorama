import Category from "@/components/HomePage/Category";
import Container from "@/components/Container";
import Cards from "@/components/HomePage/Cards";

export default function HomePage() {
  return (
    <Container className="lg:px-20 md:px-[70px] px-6">
      <Category />
      <Cards />
    </Container>
  );
}
