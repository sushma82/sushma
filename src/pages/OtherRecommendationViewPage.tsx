import React from 'react';
import OtherRecommendationViewList from '../components/Augustya/otherRecommendationViewList';
import { useGetOtherRecommendationQuery } from '../service';
import { useDeleteOtherRecommendationMutation } from '../service';
import { useEditOtherRecommendationMutation } from '../service';
import { useNavigate } from "react-router-dom";

const OtherRecommendationViewPage = () => {

    const { data , refetch } = useGetOtherRecommendationQuery('')

    const [deleteOtherRecommendation, {error}] = useDeleteOtherRecommendationMutation()

    
    const deleteOtherRecommendationHandler = (id: string) => {
        console.log('clicked')
        deleteOtherRecommendation(
            id
        ).then(() => refetch())
    }

    let navigate = useNavigate();
    
    const editOtherRecommendationHandler = (id: string) => {
        console.log('clicked')
       
        navigate(`/otherRecommendationPage/${id}`);

    }

    return (<div>

        <OtherRecommendationViewList otherData={data} onDelete= {deleteOtherRecommendationHandler} onEdit = {editOtherRecommendationHandler}/>
    </div>);
};

export default OtherRecommendationViewPage;
