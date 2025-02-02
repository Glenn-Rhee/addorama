import InputPrice from "./InputPrice";

export default function PriceFilter() {
  return (
    <div className="space-y-4">
      <InputPrice placeholder="Minimum Price" />
      <InputPrice placeholder="Maximum Price" />
    </div>
  );
}
