import React, {useState} from 'react'
import Star from "./star"
const totalStars = 5;
const StarRating = () => {
    const [starsSelected, selectStar] = useState(1);
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => selectStar(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  };

export default StarRating
