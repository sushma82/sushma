import React from 'react';
import Ratings from '../components/Augustya/ratings';
import { useGetRatingsQuery } from '../service';
import { useCreateRatingsMutation } from '../service';
import { useDeleteRatingsMutation } from '../service';

const RatingsPage = () => {

    const { data: getQueryData, refetch } = useGetRatingsQuery('')

    const [deleteRating, { error }] = useDeleteRatingsMutation()

    const [createRatings, { isLoading, data, }] = useCreateRatingsMutation()



    const createRatingHandler = (rating: string) => {
        console.log('clicked')

        createRatings(
            { rating }
        ).then(() => refetch())
    }

    const deleteRatingHandler = (id: string) => {
        console.log('clicked')
        deleteRating(
            id
        ).then(() => refetch())
    }

    console.log(data, "page")
    return (<div>

        <Ratings ratingsData={getQueryData} onSubmit={createRatingHandler} onDelete={deleteRatingHandler} />

    </div>);
};

export default RatingsPage;
