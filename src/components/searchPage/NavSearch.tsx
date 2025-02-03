import { Box, Store } from "lucide-react";
import StateSearch from "./StateSearch";

interface NavSearchProps {
  state: string | undefined;
  query: string | undefined;
}

export default function NavSearch(props: NavSearchProps) {
  const { state, query } = props;

  return (
    <div className="flex items-center gap-x-4">
      <StateSearch
        icon={
          <Box size={20} color={state !== "store" ? "#2DA5F3" : "#374151"} />
        }
        query={query}
        isActive={state !== "store"}
      >
        Product
      </StateSearch>
      <StateSearch
        icon={
          <Store size={20} color={state === "store" ? "#2DA5F3" : "#374151"} />
        }
        query={query}
        isActive={state === "store"}
      >
        Store
      </StateSearch>
    </div>
  );
}
