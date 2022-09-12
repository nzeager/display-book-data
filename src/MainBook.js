import { useState } from "react"
import errImg from "./brokenImageLink.png"

export const MainBook = ({title, author, shortDescription, coverImageUrl}) => {

    const [imageBroken, setImageBroken] = useState(false)

    return(
        <div className="mainInfo">
            <div>
                { title ? <p className='title'> {title} </p> : ""}
                { author ? <p className='author'> {author} </p> : "" }
                { shortDescription ? <p> {shortDescription} </p> : "" }
            </div>
            <div>
                { coverImageUrl ? <p className='cover'> <img src={imageBroken ? errImg : coverImageUrl} onError={() => setImageBroken(true)} alt={"Cover for " + title}></img> </p> : "" }
            </div>
        </div>
    )
}