import styled from "styled-components";

const ProjectsPage = () => {
  const projects = [
    {
      name: "Lashed up Beauty",
      description:
        "Built for small business owner to showcase different services, pricing, scheduling and a dashboard for technicians.",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://lashed-up-beauty.onrender.com",
      image: "/galessalazar/images/Lashed_Up_Beauty.png",
    },
    {
      name: "Regex Tutorial",
      description:
        "This tutorial walks through the the essentials of regular expressions(regex), for those looking to learn or improve their skills with regex.",
      technologies: ["JavaScript", "VS Code", "RegEx"],
      link: "https://gist.github.com/galessalazar/2646cb1dbb4864c6c07f53d7c9914455",
      image: "/galessalazar/images/RegexTutorial.png",
    },
  ];
  return (
    <PageWrapper>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectHeader>{project.name}</ProjectHeader>
          {project.image && <ProjectImage src={project.image} alt={project.name} />}
          <ProjectDescription>{project.description}</ProjectDescription>
      
        <Technologies>
          <strong>Technologies: </strong>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </Technologies>
        <ProjectLink
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out!
        </ProjectLink>
      </ProjectCard>
        ))}
    </PageWrapper>
  );
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  text-align: center;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
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
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px;
  border-raduis: 8px;
  border: 2px solid black;
  transiton: background-color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default ProjectsPage;
