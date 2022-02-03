import React from 'react';
import OtherRecommendationViewList from '../components/Augustya/otherRecommendationViewList';
import {
    useCreateOtherRecommendationMutation,
    useGetOtherRecommendationQuery,
    useGetSingleOtherRecommendationQuery
} from '../service';
import {useDeleteOtherRecommendationMutation} from '../service';
import {useEditOtherRecommendationMutation} from '../service';
import {useNavigate, useParams} from "react-router-dom";
import OtherRecommendation from "../components/Augustya/otherRecommendation";

const OtherRecommendationEditPage = () => {
    const navigate = useNavigate()

    const {id} = useParams()
    console.log(id)


    const {refetch} = useGetOtherRecommendationQuery('')
    // const [createOther, {isLoading, data, error}] = useCreateOtherRecommendationMutation()
    const {data, isLoading} = useGetSingleOtherRecommendationQuery(id)
    const [editOther, {isLoading: editLoading, data: editData, error: editError}] = useEditOtherRecommendationMutation()

    const editOtherHandler = (name: string) => {
        console.log('Clicked', name)

        editOther(
            {name, id}
        ).then(() => refetch())
        navigate('/training/view-other-recommendation')
    }
    console.log(data)

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            Edit PAge
            <OtherRecommendation
                onSubmit={editOtherHandler}
                defaultValue={data}/>
        </div>

    );
};

export default OtherRecommendationEditPage;
