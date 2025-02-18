import Container from "@/components/Container";
import SearchFavProduct from "@/components/favoritePage/SearchFavProduct";
import CardProduct from "@/components/HomePage/CardProduct";
import ShellCardProduct from "@/components/HomePage/ShellCardProduct";

export default function FavoritePage() {
  return (
    <Container className="lg:px-20 md:px-[70px] px-6 mb-[80px] overflow-visible">
      <SearchFavProduct />
      <h1 className="text-lg md:text-2xl font-bold text-myBlack">
        Your Favorite Product
      </h1>
      <ShellCardProduct>
        {Array.from({ length: 12 }).map((_, i) => (
          <CardProduct key={i} className="bg-white shadow-xl rounded-md" />
        ))}
      </ShellCardProduct>
    </Container>
  );
}
