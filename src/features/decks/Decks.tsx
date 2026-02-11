import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { useEffect } from 'react'
import { decksApi } from './decks-api.ts'
import { useAppDispatch } from '../../app/store.ts'
import { setDecksAC } from './decks-reducer.ts'

export const Decks = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
      decksApi.getDecks().then((res) => {
        dispatch(setDecksAC(res.data.items))
    })
  }, [])
  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
