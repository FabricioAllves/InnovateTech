import { create, } from 'zustand'
import { User } from 'src/types/user';

type StudantStates = {
  studant: User | null;
  gender: string;
  setStudant: (item: User) => void;
  setGender: (item: string) => void
}

export const useStudantStore = create<StudantStates>((set) => ({
  studant: null,
  gender: 'all',
  setStudant: (studant) => set({ studant }),
  setGender: (gender) => set({ gender })
}))