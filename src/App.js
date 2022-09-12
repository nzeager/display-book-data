import { books } from "./books"
import { Book } from "./Book"
import styles from "./App.css"

export const App = () => {
    return(
        <>
            <h1>Books</h1>
            <div className="book-list">
                {books.map((book, index) => (
                    <Book {...book} />
                ))}
            </div>
        </>
    )
}
