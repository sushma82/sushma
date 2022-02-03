import React from "react";
import Ratings from "../components/Augustya/ratings";
import { useGetSingleRatingQuery } from "../service";
import { useUpdateRatingMutation } from "../service";
import {useNavigate, useParams} from "react-router-dom";


const RatingUpdatePage = () => {
  const navigate = useNavigate()
  
  const {id} = useParams()
  console.log(id)


const {data,refetch,isLoading} = useGetSingleRatingQuery (id)
console.log(data, 'RatingData')

const [updateRating] = useUpdateRatingMutation()

const updateRatingsHandler = (rating : string)=> {
  updateRating ({
    rating,
    id
  }).then(() => refetch())
  navigate('/ratings-page')

}

if (isLoading) {
  return <div>Loading...</div>
}

  return ( <div>
      Ratings Edit Page
      <Ratings defaultValue = {data}  onSubmit={updateRatingsHandler}/>

  </div>);
};

export default RatingUpdatePage;
