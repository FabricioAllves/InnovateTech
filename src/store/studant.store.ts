import { create, } from 'zustand'
import { User } from 'src/types/user';


type NoteStates = {
  studant: User | null;
  setStudant: (item: User) => void;
}

export const useStudantStore = create<NoteStates>((set) => ({
  studant: null,
  setStudant: (studant: User) => set({ studant })
}))