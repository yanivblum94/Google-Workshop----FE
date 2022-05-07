import "./StarRating.css"

const StarRating = (props) => {
    let leftRating = props.avgRating;
    let starsArray = Array(5);
    let ind = 0;

    while (ind<5){
        console.log("index is" + ind);
        console.log("rating is" + leftRating);
        if (leftRating > 0.75){
            starsArray[ind] = "full";
            console.log("full");

        }
        else if (leftRating > 0.25){
            starsArray[ind] = "half";
            console.log("half");

        }
        else{
            starsArray[ind] = "empty";
            console.log("empty");

        }
        ind++;
        leftRating--;
    }

    return (
        <div className="star-rating">
          {starsArray.map((star) => {
            if (star == "full"){
                return (<i class="fa-solid fa-star fa-2x"></i>); 
            }
            else if (star == "half"){
                return (<i class="fa-solid fa-star-half-stroke fa-2x"></i>); 
            }
            else{
                return (<i class="fa-regular fa-star fa-2x"></i>);
            } 
          })
        }
        </div>
      );
}

export default StarRating;