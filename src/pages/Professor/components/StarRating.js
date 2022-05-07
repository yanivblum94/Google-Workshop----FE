

const StarRating = (props) => {
    let leftRating = props.avgRating;
    let starsArray = Array(5);
    let ind = 0;

    while (ind<5){
        if (leftRating > ind + 0.75){
            starsArray[ind] = "full"
        }
        else if (leftRating > ind + 0.25){
            starsArray[ind] = "half"
        }
    
        else{
            starsArray[ind] = "empty"
        }
        ind++;
        leftRating--;
    }

    {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setAndUpdateRating(index)}
            onMouseEnter={() => hoverRating(index)}
            onMouseLeave={() => hoverRating(rating)}
          >
          <i class="fa-solid fa-graduation-cap fa-3x"></i>
          </button>
        );
      })}
    return (

    )
}

export default StarRating;