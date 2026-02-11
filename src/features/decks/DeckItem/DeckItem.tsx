import {Deck} from "../decks-api.ts";
import s from "./DeckItem.module.css"

type Props = {
    deck: Deck;
}

export const DeckItem = ({deck}: Props) => {
    return (
        <li key={deck.id} className={s.deckItem}>
            <b> {deck.name}</b>
            <div>
              <span>
                <b>Author: </b>
                  {deck.author.name}
              </span>
            </div>
            <div>
              <span>
                <b>Created: </b>
                  {deck.created}
              </span>
            </div>
            <div>
              <span>
                <b>Updated: </b>
                  {deck.updated}
              </span>
            </div>
        </li>

    )
}
