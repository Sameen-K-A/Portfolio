const myProjects = [1, 2, 3, 4];

const ProjectCard = ({ project, index }: { project: number; index: number }) => {
  const topSpacing = `${30 + index * 20}px`;

  return (
    <div
      className="sticky flex aspect-video w-full items-center justify-center rounded-4xl border-t border-accent bg-linear-to-b from-accent-foreground to-background"
      style={{ top: topSpacing }}
    >
      <h1 className="text-3xl text-accent">Project - {project}</h1>
    </div>
  );
};

function Projects() {
  return (
    <div className="pt-14 pb-28 lg:pt-22 lg:pb-44">
      <div className="relative mx-auto w-full max-w-5xl">

        <div className="mb-6">
          <h1 className="px-4 text-sm tracking-widest text-accent xl:px-0">
            PROJECTS
          </h1>
        </div>

        <div className="px-4 xl:px-0">
          {myProjects.map((project, index) => (
            <ProjectCard key={project} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;