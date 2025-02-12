import styled from "styled-components";

const ProjectsPage = () => {
  const projects = [
    {
      name: "Lashed up Beauty",
      description:
        "Lashed Up Beauty is a web application I developed to help a lash technician manage client bookings. Clients can view available services, select a service, and book appointments directly, with bookings populating in an authenticated dashboard with login functionality. While the project isn’t fully polished yet, I built it using React, Node.js, and MongoDB, gaining hands-on experience with API integration,  state management, and user authentication. I’m continuing to improve the project, focusing on enhancing the booking experience and adding features like real-time notifications.",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://lashed-up-beauty.onrender.com",
      image: "/images/Lashed_Up_Beauty.png",
    },
    {
      name: "Regex Tutorial",
      description:
      "I created a Regex tutorial to break down some of the fundamentals of pattern matching. It was a great exercise in attention to detail, and I enjoyed learning how regular expressions can be used for things like validating input formats. While I’m not an expert, working on this helped me better understand how regex works in real-world applications and gave me a chance to practice writing technical documentation.",
      technologies: ["JavaScript", "VS Code", "RegEx"],
      link: "https://gist.github.com/galessalazar/2646cb1dbb4864c6c07f53d7c9914455",
      image: "/images/RegexTutorial.png",
    },
  ];
  return (
    <PageWrapper>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectHeader>{project.name}</ProjectHeader>
          {project.image && (
            <ProjectImage src={project.image} alt={project.name} />
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
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: gray;
  padding: 0 20px;
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;

  max-width: 400px;
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  min-height: 300px;

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
