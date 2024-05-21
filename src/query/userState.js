import create from 'zustand';

const userStore = create(set => ({
    user: null,
    theme: 'light',
    login: (user) => set({ user }),
    setTheme: (theme) => set({ theme }),
}));

export default userStore;