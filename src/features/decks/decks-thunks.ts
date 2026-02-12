import { AddDeckParams, decksApi } from './decks-api.ts'
import {addDeckAC, setDecksAC} from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const getDecksTC = () => async (dispatch: Dispatch) => {
  try {
    const res = await decksApi.getDecks()
    dispatch(setDecksAC(res.data.items))
  } catch (e) {
    console.log(e)
  }
}


export const addDeckTC = (params: AddDeckParams) =>  (dispatch: Dispatch) => {
return decksApi.addDeck(params).then(res => {
  dispatch(addDeckAC(res.data))
})
}
