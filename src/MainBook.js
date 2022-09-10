export const MainBook = ({title, author, shortDescription, coverImageUrl}) => {
    return(
        <div className="mainInfo">
            <div>
                { title ? <p className='title'> {title} </p> : ""}
                { author ? <p className='author'> {author} </p> : "" }
                { shortDescription ? <p> {shortDescription} </p> : "" }
            </div>
            <div>
                { coverImageUrl ? <p className='cover'> <img src={coverImageUrl} alt=""></img> </p> : "" }
            </div>
        </div>
    )
}