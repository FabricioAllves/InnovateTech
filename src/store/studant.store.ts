import { create, } from 'zustand'
import { User } from 'src/types/user';

type StudantStates = {
  studant: User | null;
  setStudant: (item: User) => void;
}

export const useStudantStore = create<StudantStates>((set) => ({
  studant: null,
  setStudant: (studant: User) => set({ studant })
}))