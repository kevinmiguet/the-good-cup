
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
        <button onClick={handleIncrement}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
         {likeCount}
        </button>

        <button onClick={handleDecrement}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>    
        {dislikeCount}
        </button>
        </div>
    );
};

export default Like;
