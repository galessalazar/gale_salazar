import styled from "styled-components";

const ProjectsPage = () => {
  const projects = [
    {
      name: "Lashed up Beauty",
      description:
        "Built for small business owner to showcase different services, pricing, scheduling and a dashboard for technicians.",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://lashed-up-beauty.onrender.com",
      image: '/galessalazar/gale_salazar/images/Lashed_Up_Beauty.png',
    },
  ];
  return (
    <PageWrapper>
      <ProjectCard>
        <ProjectHeader>{projects[0].name}</ProjectHeader>
        {projects[0].image && <ProjectImage src={projects[0].image} alt={projects[0].name} />}
        <ProjectDescription>{projects[0].description}</ProjectDescription>
        <Technologies>
          <strong>Technologies: </strong>{' '}
          {projects[0].technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
            ))}
        </Technologies>  
        <ProjectLink href={projects[0].link} target='_blank' rel='noopener noreferrer'>
          View Project
        </ProjectLink>
      
      </ProjectCard>
    </PageWrapper>
)
};
   
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
  padding: 0 20px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 12px;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  text-align: center;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
`;

const ProjectHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 16px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const ProjectDescription = styled.p`
  color: #555;
  font-size: 1rem;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const Technologies = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  display: inline-block;
  background-color: #007bff;
  color: white;
  font-size: 0.85rem;
  border-radius: 12px;
  padding: 5px 12px;
  margin: 5px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px;
  border-raduis: 8px;
  border: 2px solid #007bff;
  transiton: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export default ProjectsPage;
