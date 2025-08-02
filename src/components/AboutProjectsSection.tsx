import React from "react";

export const AboutProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: "/6_Photo%20-%201%20(2).jpg",
      title: "SLEEPBOX",
    },
    {
      id: 2,
      image: "/6_Photo%20-%204%20(1).jpg",
      title: "Model 106",
    },
  ];

  return (
    <section
      className="w-full py-32"
      role="region"
      aria-labelledby="projects-heading"
    >
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
            </article>
          ))}
        </div>
    </section>
  );
}; 