import { useState } from "react"
import { books } from "./books"

export const App = () => {
    

    return(
        <>
            <h1>Text Display</h1>
            <div className="book-list">
                {books.map((book, index) => (
                    <Book title={book.title} author={book.author} url={book.url} shortDescription={book.shortDescription} coverImageUrl={book.coverImageUrl} publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription} 
                    />
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
        <div style={{ border: '1px solid purple', margin: '10px' }}>
            <p> {title} </p>
            <p> {author} </p>
            <p> {shortDescription} </p>
            <p> {coverImageUrl} </p>
            <button onClick={() => handleClick()}>
                {expanded ? 'Less' : 'More'} info
            </button>
            {expanded ? <p>URL: {url}</p> : ''}
            {expanded ? <p>Publisher: {publisher}</p> : ''}
            {expanded ? <p>Publication Date: {publicationDate}</p> : ''}
            {expanded ? <p>Full Description: {detailedDescription}</p> : ''}
        </div>
    )
}