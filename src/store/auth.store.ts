import { create } from "zustand";

interface AuthType {
    walletAddress: string | undefined;
    steps: number;
    loading: boolean;
    token: string;
    setWalletAddress: (walletAddress: string | undefined) => void;
    setSteps: (steps: number) => void;
    setLoading: (loading: boolean) => void;
    setToken: (token: string) => void;
    userId: string | null;
    setUserID: (userID: string | null) => void;
}

export const useAuthStore = create<AuthType>((set) => (
    {
        steps: 1,
        walletAddress: "",
        loading: false,
        token: "",
        setWalletAddress: (walletAddress: string | undefined) => set({ walletAddress }),
        setSteps: (steps: number) => set({ steps }),
        setLoading: (loading: boolean) => set({ loading }),
        setToken: (token: string) => set({ token }),
        userId: "",
        setUserID: (userId: string | null) => set({ userId }),
    }
))