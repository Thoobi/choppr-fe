import { create } from "zustand";

export const useLinkTableStore = create<{ loadingTable: boolean; setLoadingTable: (loadingTable: boolean) => void }>((set) => ({
    loadingTable: false,
    setLoadingTable: (loadingTable: boolean) => set({ loadingTable })
}))