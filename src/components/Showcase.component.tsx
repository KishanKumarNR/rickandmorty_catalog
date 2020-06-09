import React from "react";
import IDCard from "./IdentityCard.component";

export default function (props: any) {
    return (
        <div className="">
            <div className="">
                {/*<h1>Rick and morty characters {props.count}</h1>*/}
                <div className="Cards-container">
                    {props.characters.map((c: any, index: number) =>
                        <IDCard key={index} content={c}></IDCard>
                    )}
                </div>
            </div>
        </div>
    )
}