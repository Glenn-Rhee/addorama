import Container from "@/components/Container";
import FilterSearch from "@/components/searchPage/FilterSearch";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

interface SearchPageProps {
  searchParams: SearchParams;
}

export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const params = await searchParams;
  const query = params.q;
  console.log(query);

  return (
    <Container className="lg:px-20 md:px-[70px] px-6">
      <div className="grid grid-cols-[20%_1fr]">
        <FilterSearch />
        <div></div>
      </div>
    </Container>
  );
}
