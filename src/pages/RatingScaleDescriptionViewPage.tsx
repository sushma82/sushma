import React from 'react';
import RatingScaleDescriptionViewList from '../components/Augustya/ratingScaleDescriptionViewList';
import { useGetRatingScaleQuery } from '../service';

const RatingScaleDescriptionPage = () => {

  const {data} = useGetRatingScaleQuery('')


  return (<div>
    <RatingScaleDescriptionViewList ratingScaleData= {data}/>
  </div>);
};

export default RatingScaleDescriptionPage;
