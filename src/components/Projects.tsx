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
    <div className="py-20 lg:py-25">
      <div className="relative mx-auto w-full max-w-5xl px-4 md:px-12 lg:px-20 xl:px-0">

        <div className="mb-6">
          <h1 className="text-sm tracking-widest text-accent">
            PROJECTS
          </h1>
        </div>

        <div className="">
          {myProjects.map((project, index) => (
            <ProjectCard key={project} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;