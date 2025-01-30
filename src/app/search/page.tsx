import Container from "@/components/Container";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

interface SearchPageProps {
  searchParams: SearchParams;
}

export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const params = await searchParams;
  const query = params.q;
  return (
    <Container className="lg:px-20 md:px-[70px] px-6">
      {query}
    </Container>
  );
}
