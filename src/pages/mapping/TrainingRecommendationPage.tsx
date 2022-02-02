import React from 'react';
import TrainingRecommendation from '../../components/Augustya/trainingRecommendation'
import TrainingRecommendationViewList from '../../components/Augustya/trainingRecommendationViewList';
import { useGetTrainingRecommendationQuery } from '../../service';
import { useCreateTrainingRecommendationMutation } from '../../service';



const TrainingRecommendationPage = () => {

  const {refetch} =  useGetTrainingRecommendationQuery('')
  const [createTraining, { isLoading, data, error }] = useCreateTrainingRecommendationMutation()
  const createTrainingHandler = (title: string, definition: string) => {
    console.log('Clicked')
    createTraining(
      {
        title,
        definition
      }
    ).then(() => refetch())


  }
  return (<div>

    <TrainingRecommendation

      onSubmit={createTrainingHandler}

    />

  </div>)
};

export default TrainingRecommendationPage;
