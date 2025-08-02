

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: "/DSC_4358.jpg",
      title: "SLEEPBOX",
    },
    {
      id: 2,
      image: "/IMG_0288.webp",
      title: "Model 106",
    },
  ];

  return (
    <section
      className="w-full py-16 lg:py-32"
      style={{ backgroundColor: '#0b1c26' }}
      role="region"
      aria-labelledby="projects-heading"
    >
      <div className="px-4 sm:px-6 lg:pr-16 lg:pr-24 mb-6 lg:mb-8 lg:ml-8 lg:ml-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <header className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight"
            >
              Past Builds
            </h2>
          </header>

          <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-8">
            <p className="text-white text-base lg:text-lg font-medium leading-relaxed mb-4 lg:mb-0 max-w-xs text-center">
              Our completed work
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:ml-8 lg:ml-16 lg:pr-8 lg:pr-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`w-full sm:${project.id === 1 ? 'w-[40%]' : 'w-[60%]'} text-center sm:text-left`}
            >
              <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] lg:h-[500px] bg-gray-200 overflow-hidden group cursor-pointer">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500" />
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="font-medium text-white text-xl lg:text-2xl leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>


            </article>
          ))}
        </div>
    </section>
  );
}; 