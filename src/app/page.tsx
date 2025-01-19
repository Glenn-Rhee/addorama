import Category from "@/components/HomePage/Category";
import Container from "@/components/Container";
import Cards from "@/components/HomePage/Cards";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function HomePage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  return (
    <Container className="lg:px-20 md:px-[70px] px-6">
      <Category category={searchParams.category?.toLowerCase()} />
      <Cards />
    </Container>
  );
}
