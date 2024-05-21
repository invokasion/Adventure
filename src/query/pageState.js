import create from 'zustand';

const usePageState = create(set => ({
    popUp: false,
    cardContent: null,
    setPopUp: (value, cardContentValue = null) => set({ popUp: value, cardContent: cardContentValue }),
}));

export default usePageState;
