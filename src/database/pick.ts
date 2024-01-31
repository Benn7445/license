export type PickProps = {
    play: number;
    title: string;
    stake: number;
    return: number;
    finished: boolean;
}

export const picks: PickProps[] = [];

export const setPick = (title: string, odd: number) => {
    const lastPick = picks.length > 0 ? picks[picks.length - 1] : null;
    if(lastPick != null) {
        picks.push({ play: (lastPick.play + 1), title, stake: lastPick.return, return: lastPick.return * odd, finished: false})
        picks[picks.length - 1].finished = true;
    } else {
        picks.push({ play: 1, title, stake: 20, return: 20 * odd, finished: false})
    }
}

export const getLastPick = (): PickProps | null => {
    const lastPick = picks.length > 1 ? picks[picks.length - 2] : null;
    if(lastPick != null && lastPick.finished) {
        return lastPick;
    }
    return null;
}

export const getPick = (): PickProps | null => {
    const lastPick = picks.length > 0 ? picks[picks.length - 1] : null;
    if(lastPick != null && !lastPick.finished) {
        return lastPick;
    }
    return null;
}