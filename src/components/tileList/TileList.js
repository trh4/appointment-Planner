import React from "react";
import { Tile } from "../tile/Tile.js";

export const TileList = ({ arrOfData }) => {
    // const objToLI = (obj) => {
    //     return Object.keys(obj).map((key) =>
    //     `${key}:${obj[key]} `);
    // };
    return (
        <div>
            {arrOfData.map((obj) => {
                return <Tile obj={obj}  />;
            })}
        </div>
    );
};
