import React from 'react';
import RatingScaleDescriptionViewList from '../components/Augustya/ratingScaleDescriptionViewList';
import {  useGetRatingScaleQuery } from '../service';
import { useDeleteRatingScaleMutation } from '../service';

const RatingScaleDescriptionViewPage = () => {

  const {data,refetch} = useGetRatingScaleQuery('')

  const [deleteRatingScale] = useDeleteRatingScaleMutation( ) 

  const deleteRatingScaleHandler = (id:string) => {
    deleteRatingScale (
      id
    ).then(() => refetch())
  }
  
  

  console.log(data, 'rating scale data')
  return (<div>
    <RatingScaleDescriptionViewList ratingScaleData= {data} onDelete = {deleteRatingScaleHandler}/>
  </div>);
};

export default RatingScaleDescriptionViewPage;
