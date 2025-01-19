import Container from "@/components/Container";
import BreadCrumbNav from "@/components/ProductPage/BreadCrumbNav";
import Product from "@/components/ProductPage/Product";

export default function ProductPage() {
  return (
    <Container className="lg:px-20 md:px-[70px] px-6">
      <BreadCrumbNav />
      <Product />
    </Container>
  );
}
