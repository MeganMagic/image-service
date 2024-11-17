import { create } from "zustand";

interface ColorState {
  color: string;
  changeColor: (newColor: string) => void;
}

const DEFAULT_COLOR = "#ff0000";

const useColorStore = create<ColorState>()((set) => ({
  color: DEFAULT_COLOR,
  changeColor: (newColor) => set({ color: newColor }),
}));

export default useColorStore;
