import { RefObject } from "react";
import { create } from "zustand";

interface SearchStore {
  inputRef: RefObject<HTMLInputElement | null> | null;
  setInputRef: (v: SearchStore["inputRef"]) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  inputRef: null,
  setInputRef(v) {
    set({ inputRef: v });
  },
}));
