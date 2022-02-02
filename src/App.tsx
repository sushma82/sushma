import CreateMapping from './components/createMapping/createMap'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateTable from './pages/mapping/createCalender';
import OtherRecommendationPage from './pages/mapping/OtherRecommendationPage';
import OtherRecommendationViewList from './components/Augustya/otherRecommendationViewList';
import TrainingRecommendation from './components/Augustya/trainingRecommendation';
import TrainingRecommendationViewList from './components/Augustya/trainingRecommendationViewList';
import Ratings from './components/Augustya/ratings';
import RatingScaleDescription from './components/Augustya/ratingScaleDescription';
import RatingScaleDescriptionViewPage from './pages/RatingScaleDescriptionViewPage'
import CheckboxTable from './components/sushma/checkboxTable';
import TrainingRecommendationPage from './pages/mapping/TrainingRecommendationPage';
import TrainingView from './pages/mapping/TrainingView';
import OtherRecommendationViewPage from './pages/OtherRecommendationViewPage';
import RatingsPage from './pages/RatingsPage';




function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CreateMapping />} />
      <Route path="/createCalender" element={<CreateTable />} />
      <Route path="/otherRecommendationPage" element = {<OtherRecommendationPage/>}/>
      <Route path= "/ratingScaleDescription" element = {<RatingScaleDescription/>}/>
      <Route path= "/rating-scale-description-ViewList" element = {<RatingScaleDescriptionViewPage/>}/>
      <Route path= "/checkboxTable" element = {<CheckboxTable/>}/>
      <Route path= "/training/training-recommendation" element = {<TrainingRecommendationPage/>}/>
      <Route path= "/training/view-training-recommendation" element = {<TrainingView/>}/>
      <Route path=  "/training/view-other-recommendation" element = {<OtherRecommendationViewPage/>}/>
      <Route path=  "/ratings" element = {<RatingsPage/>}/>
      

      </Routes>
    </BrowserRouter>
  )
}

export default App

