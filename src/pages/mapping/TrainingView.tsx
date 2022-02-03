import React from 'react';
import TrainingRecommendation from '../../components/Augustya/trainingRecommendation'
import TrainingRecommendationViewList from '../../components/Augustya/trainingRecommendationViewList';
import { useGetTrainingRecommendationQuery } from '../../service';
import {useDeleteTrainingRecommendationMutation } from '../../service'

const TrainingView = () => {
    const { data , refetch } = useGetTrainingRecommendationQuery('')

    const [ deleteTraining , {error} ] = useDeleteTrainingRecommendationMutation()

    const deleteTrainingRecommendationHandler = (id: string) => {
      console.log('clicked')
      deleteTraining(
          id
      ).then(() => refetch())
  }


  console.log(typeof data, 'type')
  return <div>
       <TrainingRecommendationViewList
     trainingData={data} onDelete = {deleteTrainingRecommendationHandler}
    />
  </div>;
};

export default TrainingView;
