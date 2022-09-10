import { useState } from "react"
import { MainBook } from "./MainBook"
import { ExpandedBook } from "./ExpandedBook"

export const Book = ({ title, author, shortDescription, coverImageUrl, ...expandedDetails }) => {
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
            {expanded ? <ExpandedBook {...expandedDetails} /> : ''}
        </div>
    )
}