import {Book} from "../../types/types";

export interface MapStateCartProps {
    totalPrice: number
    booksInCart: Array<Book>
}

export interface MapDispatchCartProps {
    removeBookFromCart: (id: string, amount: number) => void
}

export type CartProps = MapStateCartProps & MapDispatchCartProps