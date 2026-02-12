import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useGetDecks } from './DeckItem/useGetDecks.ts'

export const DecksList = () => {
  const { decks } = useGetDecks()
  return (
    <ul className={s.list}>
      {decks.length === 0 ? <p>Нет колод</p> : decks.map((deck) => <DeckItem key={deck.id} deck={deck} />)}
    </ul>
  )
}
