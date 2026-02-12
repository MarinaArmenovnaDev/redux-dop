import {useAppDispatch, useAppSelector} from "../../../../app/store.ts";
import {selectDecks} from "../../decks-selectors.ts";
import {useEffect} from "react";
import {getDecksTC} from "../../decks-thunks.ts";

export const useGetDecks = () => {
    const decks = useAppSelector(selectDecks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDecksTC())
    }, [dispatch]);
    return{
        decks
    }
}
