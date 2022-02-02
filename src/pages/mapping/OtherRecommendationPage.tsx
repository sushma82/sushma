import React from 'react';
import OtherRecommendation from '../../components/Augustya/otherRecommendation';
import { useCreateOtherRecommendationMutation } from '../../service';
import { useGetOtherRecommendationQuery } from '../../service';

const OtherRecommendationPage = () => {

  const { refetch } = useGetOtherRecommendationQuery('')
  const [createOther, { isLoading, data, error }] = useCreateOtherRecommendationMutation()
  const createOtherHandler = (name: string) => {
    console.log('Clicked')

    createOther(
      {
        name
      }
    ).then(() => refetch())


  }


  return (
    <div>

      <OtherRecommendation
        onSubmit={createOtherHandler}
      />

    </div>

  );
}

export default OtherRecommendationPage;
