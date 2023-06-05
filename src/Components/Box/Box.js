import React from "react";
import "./box.css";

const Box = (props) => {
    return (
        <div className="section-box">
            <div className="box">
                <div className="title1" key={props.id}>{props.name}</div>
                <div className="title-details">50</div>
            </div>
        </div>
    );
};

export default Box;
