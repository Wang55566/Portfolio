import create from 'zustand';

const useStore = create((set) => ({
  message: 'Welcome to My Portfolio!',
  setMessage: (message) => set({ message }),
}));

export default useStore;
