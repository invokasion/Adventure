import { useEffect } from "react";
import usePageState from "../../query/pageState";

const Popup = () => {
    const { popUp, setPopUp } = usePageState(state => ({
        popUp: state.popUp, // Correct state property
        setPopUp: state.setPopUp // Correct function
    }));

    useEffect(() => {
        console.log(popUp);
    }, [popUp]);

    return (
        <>
            {popUp ? (
                <div className="h-[100dvh] w-[100dvw] absolute  top-0 left-0 z-50">
                    <div onClick={() => setPopUp(false)} className="h-[100dvh] w-[100dvw] absolute bg-black top-0 left-0 z-[51] opacity-30"></div>
                    <div className="p-3 bg-white absolute z-[52] top-[50%] -translate-y-1/2 right-[50%] translate-x-1/2">
                            tes
                    </div>
                    {/* Popup content goes here */}
                </div>
            ) : null}
        </>
    );
}

export default Popup;
