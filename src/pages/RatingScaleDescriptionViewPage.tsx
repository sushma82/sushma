import React from 'react';
import RatingScaleDescriptionViewList from '../components/Augustya/ratingScaleDescriptionViewList';
import { useDeleteRatingScaleMutation } from '../service';
import { useGetRatingScaleQuery } from '../service';
import {useNavigate, useParams} from "react-router-dom";

const RatingScaleDescriptionViewPage = () => {

  const {data,refetch} = useGetRatingScaleQuery('')

  const [deleteRatingScale] = useDeleteRatingScaleMutation( ) 


  const deleteRatingScaleHandler = (id:string) => {
    deleteRatingScale (
      id
    ).then(() => refetch())
  }
  
  let navigate = useNavigate();
  const updateRatingScaleHandler = (id: string) => {
    console.log('clicked')
   
  
    navigate(`/ratingScale-Description-page/${id}`);

  }

  console.log(data, 'rating scale data')
  return (<div>
    <RatingScaleDescriptionViewList ratingScaleData= {data} onDelete = {deleteRatingScaleHandler} onUpdate ={updateRatingScaleHandler}/>
  </div>);
};

export default RatingScaleDescriptionViewPage
