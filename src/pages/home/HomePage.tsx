import HomeAbout from "./about/HomeAbout";
import HomeCILab from "./cilab/HomeCILab";
import HomeContacts from "./contacts/HomeContacts";
import HomeEducation from "./education/HomeEducation";
import HomeMain from "./main/HomeMain";
import HomePartners from "./partners/HomePartners";
import HomeProjects from "./projects/HomeProjects";
import HomePublications from "./publications/HomePublications";
import HomeTeam from "./team/HomeTeam";

const HomePage = () => {
  return (
    <main>
      <HomeMain />
      <HomeAbout />s
      <HomeCILab />
      <HomeProjects />
      <HomeEducation />
      <HomePublications />
      <HomeTeam />
      <HomePartners />
      <HomeContacts />
    </main>
  );
};

export default HomePage;
