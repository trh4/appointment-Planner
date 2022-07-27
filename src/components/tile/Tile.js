import React from "react";

export const Tile = ({ obj }) => {
    return (
        <div className="tile-container">
            {Object.keys(obj).map((key, i) => {
                return (
                    <p
                        className={i === 0 ? "tile-title" : "tile"}
                    >{`${obj[key]}`}</p>
                );
            })}
        </div>
    );
};
