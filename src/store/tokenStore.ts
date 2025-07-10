import { create } from "zustand";

interface TokenStore {
  xtr: string;
  setXtr: (xtr: string) => void;
}

export const useTokenStore = create<TokenStore>((set) => ({
  xtr: "",
  setXtr(xtr) {
    set({ xtr });
  },
}));
