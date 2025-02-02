import AccordionFilter from "./AccordionFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

export default function FilterSearch() {
  return (
    <section className="space-y-4 text-myBlack">
      <h3 className="text-base md:text-lg font-bold">Filter</h3>
      <div className="p-3 space-y-3 rounded-lg shadow-md bg-white">
        <AccordionFilter filterFor="Category">
          <CategoryFilter />
        </AccordionFilter>
        <AccordionFilter filterFor="Price">
          <PriceFilter />
        </AccordionFilter>
        <AccordionFilter filterFor="Rating">
          <RatingFilter />
        </AccordionFilter>
      </div>
    </section>
  );
}
