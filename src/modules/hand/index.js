import { useEffect, useState } from "react";
import usePageState from "../../query/pageState";

const Hand = ({ currentCardInhand }) => {
    const [cardHand, setCardHand] = useState([]);
    const setPopUp = usePageState(state => state.setPopUp);

    useEffect(() => {
        console.log(currentCardInhand);
        setCardHand(currentCardInhand);
    }, [currentCardInhand]);
    
    return (
        <div id="playerBoard" className="w-[100dvw] flex justify-center">
            <div className="relative z-30 flex flex-row gap-2 bottom-[-190px] hover:bottom-0">
                {
                    cardHand.map((card, index) => 
                        card !== 0 ? (
                            <div
                                onClick={() => setPopUp(true)} // Pass a function reference
                                key={index} 
                                className="cursor-pointer w-[180px] h-[220px] bg-slate-500 border hover:bottom-5 ml-[-100px] relative hover:z-40 hover:mr-10 rotate-6 hover:rotate-0"
                            >
                                {index}
                            </div>
                        ) : null
                    )
                }
            </div>
        </div>
    );
}

export default Hand;

