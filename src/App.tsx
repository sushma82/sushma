import CreateMapping from './components/createMapping/createMap'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateTable from './pages/mapping/createCalender';
import OtherRecommendationPage from './pages/OtherRecommendationPage';
import OtherRecommendationViewList from './components/Augustya/otherRecommendationViewList';
import TrainingRecommendation from './components/Augustya/trainingRecommendation';
import TrainingRecommendationViewList from './components/Augustya/trainingRecommendationViewList';
import Ratings from './components/Augustya/ratings';
import RatingScaleDescription from './components/Augustya/ratingScaleDescription';
import CheckboxTable1 from './components/sushma/checkboxTable1';
import TrainingRecommendationPage from './pages/TrainingRecommendationPage';
import TrainingView from './pages/TrainingRecommendationViewPage';
import OtherRecommendationViewPage from './pages/OtherRecommendationViewPage';
import RatingsPage from './pages/RatingsPage';
import RatingsUpdatePage from './pages/RatingUpdatePage'
import OtherRecommendationEditPage from "./pages/OtherRecommendationEditPage";
import TrainingRecommendationUpdatePage from './pages/TrainingRecommendationUpdatePage';
import RatingScaleDescriptionViewPage from './pages/RatingScaleDescriptionViewPage';
import RatingScaleDescriptionPage from './pages/RatingScaleDescriptionPage';
import RatingScaleDescriptionUpdate from './pages/RatingScaleDescriptionUpdate';




function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CreateMapping />} />
      <Route path="/createCalender" element={<CreateTable />} />
      <Route path="/otherRecommendationPage" element = {<OtherRecommendationPage/>}/>
      <Route path="/otherRecommendationPage/:id" element = {<OtherRecommendationEditPage/>}/>
      <Route path = "/ratingScale-Description-page" element = {<RatingScaleDescriptionPage/>}/>
      <Route path= "/rating-scale-description-ViewList" element = {<RatingScaleDescriptionViewPage/>}/>
      {/* <Route path= "/checkboxTable" element = {<CheckboxTable/>}/> */}
      <Route path= "/training/training-recommendation" element = {<TrainingRecommendationPage/>}/>
      <Route path= "/training/view-training-recommendation" element = {<TrainingView/>}/>
      <Route path=  "/training/view-other-recommendation" element = {<OtherRecommendationViewPage/>}/>
      <Route path=  "/ratings-page/:id" element = {<RatingsUpdatePage/>}/>
      <Route path= "/ratings-page" element = {<RatingsPage/>}/>
      <Route path="/training/training-recommendation/:id" element = {<TrainingRecommendationUpdatePage/>}/>
      <Route path="/ratingScale-Description-page/:id" element = {<RatingScaleDescriptionUpdate/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

