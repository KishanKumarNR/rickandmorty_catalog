import React, {useState} from "react";
// @ts-ignore
import Api from "../services/Api.service";

export default function (props: any) {
    let {id, name, image} = props.content;

    return (
        <div
            key={id}
            id={id}
            className="Card"
            onClick={e => props.setActiveCharacter(id)}
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