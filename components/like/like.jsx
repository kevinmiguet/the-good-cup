
import React,{useState} from "react";

const Like = ()=> {
    const [likeCount, setlikeCount]=useState(0);
    const [dislikeCount, setdislikeCount]=useState(0);
    const handleIncrement =()=>{
        setlikeCount(likeCount+1);
    };
    const handleDecrement =()=>{
        setdislikeCount(dislikeCount+1);
    };

    return (
        <div>
        <button onClick={handleIncrement}>Like {likeCount}</button>
        <button onClick={handleDecrement}>Dislike {dislikeCount}</button>
        </div>
    );
};

export default Like;
