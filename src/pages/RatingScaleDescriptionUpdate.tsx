import React from 'react';
import RatingScaleDescription from '../components/Augustya/ratingScaleDescription';
import { useGetSingleRatingScaleQuery } from '../service';
import { useUpdateRatingScaleMutation } from '../service';
import {useNavigate, useParams} from "react-router-dom";


const RatingScaleDescriptionUpdate = () => {

    const navigate = useNavigate()

    const {id} = useParams()
    

    const {data,refetch, isLoading} = useGetSingleRatingScaleQuery (id)
    

    const [updateRatingScale] = useUpdateRatingScaleMutation ()

    const updateRatingScaleHandler = (rating: string, rating_scale: string, definition: string) => {
        updateRatingScale(
            {
            rating,
            rating_scale,
            definition,
            id
        }
        ) .then(() => refetch())
        navigate('/ratingScale-Description-page')

    }

    if (isLoading) {
        return <div>Loading...</div>
    }



  return (<div>
      <RatingScaleDescription defaultValue = {data} onSubmit = {updateRatingScaleHandler} />
  </div>);
};

export default RatingScaleDescriptionUpdate;
