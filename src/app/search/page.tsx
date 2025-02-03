import Container from "@/components/Container";
import FilterSearch from "@/components/searchPage/FilterSearch";
import NavSearch from "@/components/searchPage/NavSearch";
import ProductResult from "@/components/searchPage/ProductResult";
import StoreResult from "@/components/searchPage/StoreResult";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

interface SearchPageProps {
  searchParams: SearchParams;
}

export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const params = await searchParams;
  const query = params.q;
  const state = params.s;

  return (
    <Container className="lg:px-20 md:px-[70px] px-6 pb-40">
      <div className="grid grid-cols-[20%_1fr] gap-x-8">
        <FilterSearch />
        <div className="space-y-3">
          <NavSearch query={query} state={state} />
          {state !== "store" ? <ProductResult /> : <StoreResult />}
        </div>
      </div>
    </Container>
  );
}
