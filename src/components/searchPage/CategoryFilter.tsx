import CheckboxFilter from "./CheckboxFilter";

export default function CategoryFilter() {
  return (
    <div className="flex flex-col gap-y-2">
      <CheckboxFilter id="laptop" label="Laptop" />
      <CheckboxFilter id="accessories" label="Accessories" />
    </div>
  );
}
