import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
    getDecks() {
        return instance.get<GetDecksResponse>(`v2/decks`)
    }
}


export type DeckAuthor = {
    name: string
    id: string
}

export type Deck = {
    isFavorite: boolean
    author: DeckAuthor
    id: string
    userId: string
    name: string
    cover: string
    created: string
    updated: string
    cardsCount: number
}

export type Pagination ={
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
}

export type GetDecksResponse = {
    items: Deck[]
    pagination: Pagination
    maxCardsCount: number
}
