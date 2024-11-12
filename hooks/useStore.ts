import { create } from "zustand"

interface State {
  memberDetailsOpen: boolean
  setMemberDetailsOpen: () => void
  setProjectDetailsClosed: () => void
}

export const useStore = create<State>((set) => ({
  memberDetailsOpen: false,
  setMemberDetailsOpen: () => set({ memberDetailsOpen: true }),
  setProjectDetailsClosed: () => set({ memberDetailsOpen: false }),
}))
