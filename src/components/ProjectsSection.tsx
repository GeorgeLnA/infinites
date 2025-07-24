import React from "react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: "/6_Photo%20-%201%20(2).jpg",
      title: "Project V",
    },
    {
      id: 2,
      image: "/6_Photo%20-%204%20(1).jpg",
      title: "Project DM",
    },
  ];

  return (
    <section
      className="w-full py-32"
      role="region"
      aria-labelledby="projects-heading"
    >
      <div className="pr-16 lg:pr-24 mb-8 ml-8 lg:ml-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <header className="mb-8 lg:mb-0">
            <h2
              id="projects-heading"
              className="text-4xl font-normal text-[#0d0c09] leading-tight text-center"
            >
              Projects
            </h2>
          </header>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <p className="text-[#0d0c09] text-lg font-medium leading-relaxed mb-6 lg:mb-0 max-w-xs text-center">
              Our completed work
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-1 lg:gap-2 ml-8 lg:ml-16 pr-8 lg:pr-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className={project.id === 1 ? 'w-[40%]' : 'w-[60%]'}
            >
              <div className="relative w-full h-[400px] lg:h-[500px] bg-gray-200 overflow-hidden group cursor-pointer">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
              </div>

              <header className="mt-6">
                <h3 className="font-normal text-[#0d0c09] text-2xl leading-tight">
                  {project.title}
                </h3>
              </header>
            </article>
          ))}
        </div>
    </section>
  );
}; 