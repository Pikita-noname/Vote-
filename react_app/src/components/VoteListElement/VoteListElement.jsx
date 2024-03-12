import { useState } from "react"

export const VoteListElement = ({elementData}) => {
    const [element, sEtelement] = useState(elementData);


    return (
        <>
            <div>
                <a href={`/`}>{element.name}</a>
            </div>
        </>
    )
}