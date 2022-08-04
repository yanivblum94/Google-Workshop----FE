import "./StarRating.css"

const StarRating = (props) => {
    let leftRating = props.avgRating;
    let starsArray = Array(5);
    let ind = 0;

    while (ind < 5) {
        if (leftRating > 0.75) {
            starsArray[ind] = "full";
        }
        else if (leftRating > 0.25) {
            starsArray[ind] = "half";
        }
        else {
            starsArray[ind] = "empty";
        }
        ind++;
        leftRating--;
    }

    return (
        <div className="star-rating">
            {starsArray.map((star) => {
                if (star === "full") {
                    return (<i class="fa-solid fa-star fa-xl"></i>);
                }
                else if (star === "half") {
                    return (<i class="fa-solid fa-star-half-stroke fa-xl"></i>);
                }
                else {
                    return (<i class="fa-regular fa-star fa-xl"></i>);
                }
            })
            }
        </div>
    );
}

export default StarRating;