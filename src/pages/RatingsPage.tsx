import React from 'react';
import Ratings from '../components/Augustya/ratings';
import { useGetRatingsQuery } from '../service';
import { useCreateRatingsMutation } from '../service';
import { useDeleteRatingsMutation } from '../service';
import { useUpdateRatingMutation } from '../service';
import { useNavigate } from "react-router-dom";

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

    let navigate = useNavigate();
    const updateRatingHandler = (id:string) => {
        console.log('clicked')
        navigate(`/ratings-page/${id}`);
    }

    console.log(data, "page")
    return (<div>

        <Ratings ratingsData={getQueryData} onSubmit={createRatingHandler} onDelete={deleteRatingHandler}  onUpdate={updateRatingHandler}/>

    </div>);
};

export default RatingsPage;