import React, {useState} from "react";
// @ts-ignore
import Api from "../services/Api.service";

export default function (props: any) {
    let {id, name, image} = props.content;
    const [activeCharacter, setActiveCharacter] = useState({});

    const _setActiveCharacter = (id: any) => {
        Api.getCharacterById(id).then((data: any) => {
            setActiveCharacter(data);
            console.log(activeCharacter)
        });
    }


    return (
        <div
            key={id}
            id={id}
            className="Card"
            onClick={e => _setActiveCharacter(id)}
        >
            <div className="Card-image">
                <figure>
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div className="Card-description">
                <div className="Card-name">
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
}