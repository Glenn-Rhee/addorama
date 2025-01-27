import Container from "@/components/Container";
import FilterReview from "@/components/ProductPage/FilterReview";
import RatingCard from "@/components/ProductPage/RatingCard";
import ReviewProduct from "@/components/StorePage/ReviewProduct";

export default function ReviewsStorePage() {
  return (
    <Container className="mt-2 md:mt-4 lg:px-20 md:px-[70px] px-6">
      <RatingCard />
      <section className="mt-8 grid grid-cols-1 gap-y-2 md:gap-y-0 md:grid-cols-[30%_1fr] py-2 gap-x-4">
        <FilterReview />
        <div className="space-y-3">
          <ReviewProduct />
          <ReviewProduct />
          <ReviewProduct />
        </div>
      </section>
    </Container>
  );
}
