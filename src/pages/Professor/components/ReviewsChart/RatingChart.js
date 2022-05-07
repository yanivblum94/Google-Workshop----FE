import React from 'react';

import ChartBar from './ChartBar';
import './RatingChart.css';

const RatingChart = (props) => {
    const ratingDict = {1:0,
    2:0,
    3:0,
    4:0,
    5:0
};
    let totalRatings = props.ratingValuesArray.length;
    console.log("in rating chart");

    for(let i = 0; i< props.ratingValuesArray.length;i++){
        ratingDict[props.ratingValuesArray[i]] ++;
    }

    const ratingValues = props.ratingValuesArray;
    console.log(ratingDict);
    console.log(totalRatings);

  return (
    <div className='chart'>
    {Object.entries(ratingDict).map(([key,value]) => (
      <ChartBar
        key={key}
        value={value}
        maxValue={totalRatings}
        label={key}
      />
    ))}
  </div>
);
};

export default RatingChart;

