import { create } from "zustand"

interface State {
  memberDetailsOpen: boolean
  setDetailsPanelOpen: () => void
  setDetailsPanelClosed: () => void
}

export const useStore = create<State>((set) => ({
  memberDetailsOpen: false,
  setDetailsPanelOpen: () => set({ memberDetailsOpen: true }),
  setDetailsPanelClosed: () => set({ memberDetailsOpen: false }),
}))
