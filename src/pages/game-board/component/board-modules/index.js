import { useState } from "react"
import Hand from "../../../../modules/hand"

const Board = ({gameState}) => {
    const [active,setActive] = useState(5)

    const playerReviewHandle = (index) => {
        if(active === index){
            setActive(5)
            return
        }
        setActive(index)
    }

    return <>
        <div className="w-[100dvw] h-[100dvh] overflow-hidden">
            <div id="OtherPlayerCard" className="flex flex-row gap-3 ml-2">
                {
                    gameState.player.map((data, index) => index !== 0 ? (
                        <div>
                            <div className="w-[180px] bg-slate-400 px-2" onClick={()=>playerReviewHandle(index)}>
                                <div className="flex flex-col">
                                    <div className="p-1">{data.user_name}</div>
                                    <div className="flex flex-row justify-between px-1">
                                        <div className="w-[90px] h-[110px] bg-slate-500"> </div>
                                        <div className="flex-col w-[50px]"> 
                                            {data.wild.map((wild,index1)=>(
                                                <div className="rounded-full w-[45px] h-[45px] bg-slate-800 mb-1">
                                                    data
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {index !== active ? 
                                        <div className="flex flex-row gap-1 my-1">
                                            {data.hero.map((hero,index1)=>hero !== 0 ? (
                                                <div className="h-[10px] w-[10px] bg-slate-800"></div>
                                            ) : <></> )}
                                        </div>
                                        : 
                                        <></>
                                    }
                                </div>
                            </div>
                            {index === active ? 
                                <div className="h-[200px] w-[180px] bg-slate-400 flex flex-wrap gap-1 p-2 absolute z-20">
                                    {data.hero.map((hero,index1)=>hero !== 0 ? (
                                        <div className="h-[50px] w-[38px] bg-slate-800"></div>
                                    ) : <></> )}
                                </div> 
                            : 
                                <></>
                            }
                        </div>
                    ) : <></>)
                }
                
            </div>
            <div id="field" className="flex w-[100%] mt-[6px] justify-center">
                <div className="w-[1000px] justify-between flex flex-row">
                    <div className="w-[830px] h-[350px]  flex flex-row gap-2 px-2">
                        {gameState.active_monster.map((monster,index) => (
                            <div className="w-[300px] h-[300px] flex justify-center my-auto bg-slate-500">
                                <span className="my-auto">monster</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="w-[160px] h-[170px] flex justify-center">
                            <div className="w-[135px] h-[165px] flex justify-center my-auto bg-slate-500 cursor-pointer ">
                                <span className="my-auto">DRAW</span>
                            </div>
                        </div>
                        <div className="w-[160px] h-[170px] flex justify-center">
                            <div className="w-[135px] h-[165px] flex justify-center my-auto bg-slate-500 cursor-pointer">
                                <span className="my-auto">GRAVEYARD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Hand  currentCardInhand={gameState.player[0].cards} />

            <div className="relative bottom-[12rem]">
                <div className="flex w-[100dvw] mt-3 justify-center gap-3 bg-slate-400">
                    <div className="w-[90%]  p-3 flex flex-wrap gap-2">
                        <div className="w-[90px] h-[110px] bg-slate-500"> </div>
                        {
                            gameState.player[0].hero.map((hero,index1)=> hero !== 0 ? (
                                    <div className="w-[90px] h-[110px] bg-slate-500"> </div>
                                )
                            :
                                <></>
                            )
                        }
                    </div>
                    <div className="flex flex-col p-3">
                        {gameState.player[0].wild.map((wild,index1)=>(
                            <div className="rounded-full w-[45px] h-[45px] bg-slate-800 mb-1">
                                data
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Board