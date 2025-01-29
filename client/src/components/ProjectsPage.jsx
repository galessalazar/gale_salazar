const ProjectsPage = () => {
  const projects = [
    {
      name: "Lashed up Beauty",
      description:
        "Built for small business owner to showcase different services, pricing, scheduling and a dashboard for technicians.",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://lashed-up-beauty.onrender.com",
    },
  ];
  return (
    <div>
      <h1>ProjectsPage</h1>
      <div>
        <h2>{projects[0].name}</h2>
        {projects[0].image && <img src={projects[0].image} alt={projects[0].name} />}
          <p>{projects[0].description}</p>
          <p><strong>Technologies: </strong>{projects[0].technologies.join(', ')}</p>
          {/* by default,links open in the same tab, the _blank keeps site open while opening link in a new tab */}
          {/* the noopener and noreferrer are layered security and privacy */}
          <a href={projects[0].link} target="_blank" rel="noopener noreferrer">View Project</a>
        
      </div>
    </div>
  );
};

export default ProjectsPage;
