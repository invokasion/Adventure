import create from 'zustand';

const useGameState = create(set => ({
    gameState : {
        game_id : 'ajhdjhjhdja8787324',
        player : [
            {
                id          : 'yuyuewyr90989',
                user_name   : 'player 1',
                guild_master: 0,
                wild        : [0,0],
                stat        : {
                    str : 1,
                    agi : 1,
                    def : 1,
                },
                hero        : [
                    {
                        id : 1,
                        item : 2
                    },
                    {
                        id : 1,
                        item : 2
                    },
                    {
                        id : 1,
                        item : 2
                    }],
                cards       : [1,1,1,1,1,1,1,1,1,1],
                play_point  : 3,
                effect      : [1,2,3,4],
            },
            {
                id          : 'yuyuewyr90989',
                user_name   : 'player 1',
                guild_master: 0,
                wild        : [0,0],
                stat        : {
                    str : 1,
                    agi : 1,
                    def : 1,
                },
                hero        : 
                    [
                        {
                            id : 1,
                            item : 2
                        },
                        {
                            id : 1,
                            item : 2
                        },
                        {
                            id : 1,
                            item : 2
                        }],
                cards       : [1,1,1,1,1,1,1,1,1,1],
                play_point  : 0,
                effect      : [1,2,3,4],
            },
            {
                id          : 'yuyuewyr90989',
                user_name   : 'player 2',
                guild_master: 0,
                wild        : [0,0],
                stat        : {
                    str : 1,
                    agi : 1,
                    def : 1,
                },
                hero        : [
                    {
                        id : 1,
                        item : 2
                    },
                    {
                        id : 1,
                        item : 2
                    },
                    {
                        id : 1,
                        item : 2
                    }],
                cards       : [1,1,1,1,1,1,1,1,1,1],
                play_point  : 0,
                effect      : [1,2,3,4],
            },
            {
                id          : 'yuyuewyr90989',
                user_name   : 'player 3',
                guild_master: 0,
                wild        : [0,0],
                stat        : {
                    str : 1,
                    agi : 1,
                    def : 1,
                },
                hero        : [
                    {
                        id : 1,
                        item : 2
                    },
                    {
                        id : 1,
                        item : 2
                    },
                    {
                        id : 1,
                        item : 2
                    }],
                cards       : [1,1,1,1,1,1,1,1,1,1],
                play_point  : 0,
                effect      : [1,2,3,4],
            },
        ],
        monster_list : [0,0,0,0,0,0,0,0,0,0,0,0],
        active_monster : [0,0,0],
        deck : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        graveyard : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        turn : 0,
        created_at : '2222-12-30',
        end_at : '2222-12-30',
        winner : 'uweuhhwejrhjweh',
    },
    setGameState: (newState) => set(state => ({
        gameState: {
            ...state.gameState,
            ...newState,
        }
    }))
}));

export default useGameState;