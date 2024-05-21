import useGameState from "../../query/gameState"
import Board from "./component/board-modules"

function Game() {
    const { gameState, setGameState } = useGameState(state => ({
        gameState: state.gameState,
        setGameState: state.setGameState
    }));

    return <>
        <Board gameState={gameState}/>
    </>
}

export default Game