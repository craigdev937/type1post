export interface IPlayer {
    id: string,
    alias: string,
    first: string,
    last: string,
    age: number,
    info: string
};

export interface PlayerState {
    players: IPlayer[],
    isLoading: boolean,
    isError: null | string
};



