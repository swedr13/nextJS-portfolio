import React from "react";

const CardProject = () => {
  const [projects, setProjects] = React.useState([])

  const fetchData = async () => {
    const res = await fetch('/api/projects', { cache: 'no-store' });
    let _projects = await res.json();

    if (!projects) {
      return null
    }

    setProjects(_projects)
  }

  React.useEffect(() => {
    fetchData();

  const intervalId = setInterval(fetchData, 30000);
  return () => {
    clearInterval(intervalId);
  };
}, [])

  return (
    <>
    {projects?.map(projects => (
      <div key={projects.key}>
          <div className="card mb-3">
            <img
              className="card-img-top"
              src="img/1.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{projects.title}</h5>
              <p className="card-text">
                {projects.description}
              </p>
              <a href={projects.githubLink}>Visit Website</a>
            </div>
          </div>
      </div>
    ))}
    </>
  );
}

export default CardProject;