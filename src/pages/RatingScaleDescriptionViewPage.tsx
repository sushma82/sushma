import React from 'react';
import RatingScaleDescriptionViewList from '../components/Augustya/ratingScaleDescriptionViewList';
import { useGetRatingScaleQuery } from '../service';

const RatingScaleDescriptionViewPage = () => {

  const {data} = useGetRatingScaleQuery('')


  console.log(data, 'rating scale data')
  return (<div>
    <RatingScaleDescriptionViewList ratingScaleData= {data}/>
  </div>);
};

export default RatingScaleDescriptionViewPage;
