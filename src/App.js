import { useState } from "react"
import { books } from "./books"
import styles from "./App.css"
import { MainBook } from "./MainBook"

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

const Book = ({ title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription }) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return(
        <div style={{ border: '1px solid purple', margin: '10px', padding: '5px' }}>
            <MainBook title={title} author={author} shortDescription={shortDescription} coverImageUrl={coverImageUrl} />
            <button onClick={() => handleClick()} aria-expanded={ expanded }>
                {expanded ? 'Less' : 'More'} info
            </button>
            {expanded && url ? <p>URL: <a href={url}>{url}</a></p> : ''}
            {expanded && publisher ? <p>Publisher: {publisher}</p> : ''}
            {expanded && publicationDate ? <p>Publication Date: {publicationDate}</p> : ''}
            {expanded && detailedDescription ? <p>Full Description: {detailedDescription}</p> : ''}
        </div>
    )
}