import React from 'react';
import TrainingRecommendation from '../components/Augustya/trainingRecommendation'
import TrainingRecommendationViewList from '../components/Augustya/trainingRecommendationViewList';
import { useGetTrainingRecommendationQuery } from '../service';
import {useDeleteTrainingRecommendationMutation } from '../service'
import { useUpdateTrainingRecommendationMutation } from '../service';
import {useNavigate, useParams} from "react-router-dom";

const TrainingView = () => {
    const { data , refetch } = useGetTrainingRecommendationQuery('')

    const [ deleteTraining , {error} ] = useDeleteTrainingRecommendationMutation() 


    const deleteTrainingRecommendationHandler = (id: string) => {
      console.log('clicked')
      deleteTraining(
          id
      ).then(() => refetch())
  }

  let navigate = useNavigate();
  const updateTrainingRecommendationHandler = (id: string) => {
    console.log('clicked')
   
  
    navigate(`/training/training-recommendation/${id}`);

}




  console.log(typeof data, 'type')
  return <div>
       <TrainingRecommendationViewList
     trainingData={data} onDelete = {deleteTrainingRecommendationHandler} onUpdate = {updateTrainingRecommendationHandler}
    />
  </div>;
};

export default TrainingView;
