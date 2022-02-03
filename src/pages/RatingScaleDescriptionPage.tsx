import { stringify } from 'querystring';
import React from 'react';
import { createTypeReferenceDirectiveResolutionCache } from 'typescript';
import RatingScaleDescription from '../components/Augustya/ratingScaleDescription';
import { useCreateRatingScaleMutation, useGetRatingsQuery } from '../service';
import { useGetRatingScaleQuery } from '../service';

const RatingScaleDescriptionPage = () => {
    const { refetch } = useGetRatingScaleQuery('')
    const [createRatingScale, { isLoading, data, error }] = useCreateRatingScaleMutation()
    const { data: RatingsData } = useGetRatingsQuery('')

    const createRatingScaleHandler = (rating: string, rating_scale: string, definition: string) => {
        console.log('clicked')
        createRatingScale(
            {
                rating,
                rating_scale,
                definition

            }
        ).then(() => refetch())
    }
    return (<div>

        <RatingScaleDescription
        ratings={RatingsData}
         onSubmit={createRatingScaleHandler} />

    </div>);
};

export default RatingScaleDescriptionPage;
