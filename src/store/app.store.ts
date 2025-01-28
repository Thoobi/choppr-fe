import { create } from "zustand";

export const useLinkTableStore = create<{ loadingTable: boolean; setLoadingTable: (loadingTable: boolean) => void }>((set) => ({
    loadingTable: false,
    setLoadingTable: (loadingTable: boolean) => set({ loadingTable })
}))

export const useHeroStore = create<{ isEnabled: boolean; setIsEnabled: (isEnabled: boolean) => void }>((set) => ({
    isEnabled: false,
    setIsEnabled: (isEnabled: boolean) => set({ isEnabled })
}))