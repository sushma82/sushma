import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useGetTrainingRecommendationQuery } from '../service';
import { useGetSingleTrainingRecommendationQuery } from '../service';
import TrainingRecommendation from '../components/Augustya/trainingRecommendation';
import { useUpdateTrainingRecommendationMutation } from '../service';



const TrainingRecommendationUpdatePage = () => {
    const navigate = useNavigate()

    
    const {id} = useParams()
    console.log(id)

    

    const {data,refetch, isLoading} = useGetSingleTrainingRecommendationQuery(id)
    console.log(data, 'Training data')

    const [updateTraining] = useUpdateTrainingRecommendationMutation()



    const editHandler = (title:string,definition:string) => {

        updateTraining(
            {
                title,
                definition,
                id
            }
        ).then(() => refetch())
        navigate('/training/view-training-recommendation')

      

    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            Edit Page
            <TrainingRecommendation
                defaultValue={data}
                onSubmit={editHandler}
                />
        </div>

    );
};

export default TrainingRecommendationUpdatePage;


