
import React,{useState} from "react";

const Like = ()=> {
    const [likeCount, setlikeCount]=useState(0);
    const [dislikeCount, setdislikeCount]=useState(0);
    const handleIncrement =()=>{
        setlikeCount(likeCount+1);
    };
    const handleDecrement =()=>{
        setdislikeCount(dislikeCount-1);
    };

    return (
        <div>
            <h3>Like this coffee</h3>
        <button onClick={handleIncrement}>Like {likeCount}</button>
        <button onClick={handleDecrement}>Disike {dislikeCount}</button>
        </div>
    );
};

export default Like;
