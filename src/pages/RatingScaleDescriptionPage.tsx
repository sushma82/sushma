import { stringify } from 'querystring';
import React from 'react';
import { createTypeReferenceDirectiveResolutionCache } from 'typescript';
import RatingScaleDescription from '../components/Augustya/ratingScaleDescription';
import { useCreateRatingScaleMutation } from '../service';
import { useGetRatingScaleQuery } from '../service';

const RatingScaleDescriptionPage = () => {
    const {refetch} = useGetRatingScaleQuery ('')
    const [createRatingScale,{ isLoading, data, error }] = useCreateRatingScaleMutation()

    const createRatingScaleHandler = (rating :string ,ratingScale :string , definition :string) => {
        console.log('clicked')
        createRatingScale (
            {
                rating,
                ratingScale,
                definition

            }
        ).then(()=>refetch())
    }
  return (<div>

<RatingScaleDescription onSubmit = {createRatingScaleHandler}/>

  </div>);
};

export default RatingScaleDescriptionPage;
