import { create } from "zustand";

interface PurchaseStore {
  qty: number;
  incQty: () => void;
  decQty: () => void;
}

export const usePurchaseStore = create<PurchaseStore>((set) => ({
  qty: 1,
  incQty: () => set((state) => ({ qty: state.qty + 1 })),
  decQty: () => set((state) => ({ qty: state.qty - 1 })),
}));
