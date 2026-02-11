import {AppRootState} from "../../app/store.ts";

export const selectDecks = (state: AppRootState) => {
    return state.decks.decks
}
