import LandingPage from '../pages/Portfolio Component/LandingPage';
import AboutPage from '../pages/Portfolio Component/AboutPage';
import NavigationBar from "../pages/Portfolio Component/NavigationBar";
import ProjectPage from '../pages/Portfolio Component/ProjectPage';
const portfolioPage = () => {
  return (
    <>
      <NavigationBar />
      <LandingPage />
      <AboutPage />
      <ProjectPage />
    </>
  )
}

export default portfolioPage
  