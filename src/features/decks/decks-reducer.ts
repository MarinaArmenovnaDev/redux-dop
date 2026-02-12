import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'SET_DECKS' as const,
    decks,
  }
}

export const addDeckAC = (deck: Deck) => {
  return{
    type : "ADD_DECK" as const,
    deck
  }
}

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS': {
      return {
        ...state,
        decks: action.decks,
      }
    }
    case 'ADD_DECK': {
      return {
        ...state,
        decks: [action.deck, ...state.decks]
      }
    }
    default:
      return state
  }
}

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>
