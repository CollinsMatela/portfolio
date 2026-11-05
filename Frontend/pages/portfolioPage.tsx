import LandingPage from '../pages/Portfolio Component/LandingPage';
import AboutPage from '../pages/Portfolio Component/AboutPage';
import NavigationBar from "../pages/Portfolio Component/NavigationBar";
import LoadingPage from './Portfolio Component/LoadingPage';
import ProjectPage from '../pages/Portfolio Component/ProjectPage';

const portfolioPage = () => {

  return (
    <>
      
        <LoadingPage />
        <NavigationBar />
        <LandingPage />
        <AboutPage />
        <ProjectPage /> 
        
        
      
      
    </>
  )
}

export default portfolioPage
  