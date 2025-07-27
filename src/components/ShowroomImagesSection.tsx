import React from "react";

const ShowroomImagesSection = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[400px] lg:h-[600px] bg-[url(/showroom-1.png)] bg-cover bg-center" />
          <div className="h-[400px] lg:h-[600px] bg-[url(/showroom-2.png)] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
};

export default ShowroomImagesSection; 