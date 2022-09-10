export const ExpandedBook = ({url, publisher, publicationDate, detailedDescription}) => {
    return(
        <>
            {url ? <p>URL: <a href={url}>{url}</a></p> : ''}
            {publisher ? <p>Publisher: {publisher}</p> : ''}
            {publicationDate ? <p>Publication Date: {publicationDate}</p> : ''}
            {detailedDescription ? <p>Full Description: {detailedDescription}</p> : ''}
        </>
    )
}