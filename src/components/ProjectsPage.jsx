import styled from "styled-components";
import Navbar from "./Navbar";

const ProjectsPage = () => {
  const projects = [
    // As projects increase, add to this array and they will dynamically appear
    {
      name: "Lashed up Beauty",
      description:
        "Booking Application, Dashboard stores in MongoDB, Authentication implemented with JSON Web Token ",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://lashed-up-beauty.onrender.com",
      image: "/images/Lashed_Up_Beauty.png",
    },
    {
      name: "Rapid Refresh",
      description: "Booking application coming soon!",
      technologies: ["PostgreSql", "Javascript"],
      image: "/images/Coming_Soon.PNG",
    },
    {
      name: "Regex Tutorial",
      description:
        "Break down of the fundamentals of pattern matching. Exercise in attention to detail and  practice writing technical documentation.",
      technologies: ["JavaScript", "VS Code", "RegEx"],
      link: "https://gist.github.com/galessalazar/2646cb1dbb4864c6c07f53d7c9914455",
      image: "/images/RegexTutorial.png",
    },
  ];
  return (
    <PageWrapper>
      <Navbar />
      {/* go through the array of projects */}
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectHeader>{project.name}</ProjectHeader>
          {project.image && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <ProjectImage src={project.image} alt={project.name} />
            </a>
          )}
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
  // justify-content: center;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: gray;
  gap: 20px;
  width: 100%
  box-sizing: border-box;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;

  max-width: 400px;
  // flex: 1;
  // aspect-ratio: 1;
  display: flex;
  flex-direction: column;

  // flex-grow: 1;
  min-height: 300px;
  padding: 20px;

  text-align: center;
  padding: 20px;
  transition: all 0.3s ease;
  justify-content: space-between;

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
  background-color: rgb(4, 5, 5);
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
  border-radius: 8px;
  border: 2px solid black;
  background-color: black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

export default ProjectsPage;
