import s from './DecksList.module.css'
import { useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import {DeckItem} from "../DeckItem/DeckItem.tsx";

export const DecksList = () => {
  const decks = useAppSelector(selectDecks)

  return (
    <ul className={s.list}>
      {decks.length === 0 ? (
        <p>Нет колод</p>
      ) : (
        decks.map((deck) => (
         <DeckItem key={deck.id} deck={deck} />
        ))
      )}
    </ul>
  )
}
