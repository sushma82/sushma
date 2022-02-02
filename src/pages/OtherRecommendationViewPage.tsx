import React from 'react';
import OtherRecommendationViewList from '../components/Augustya/otherRecommendationViewList';
import { useGetOtherRecommendationQuery } from '../service';
import { useDeleteOtherRecommendationMutation } from '../service';

const OtherRecommendationViewPage = () => {

    const { data , refetch } = useGetOtherRecommendationQuery('')

    const [deleteOtherRecommendation, {error}] = useDeleteOtherRecommendationMutation()
    
    const deleteOtherRecommendationHandler = (id: string) => {
        console.log('clicked')
        deleteOtherRecommendation(
            id
        ).then(() => refetch())
    }

    return (<div>
        <OtherRecommendationViewList otherData={data} onDelete= {deleteOtherRecommendationHandler}/>
    </div>);
};

export default OtherRecommendationViewPage;
