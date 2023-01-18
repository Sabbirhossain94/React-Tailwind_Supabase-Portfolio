import React from "react";
import AnimatedPage from "../../AnimatedPages";
import { useState, useEffect } from "react";
import { portfolioClient } from "../../../portfolioClient";

export default function Gallery() {
  const [allProjectsImages, setAllProjectsImages] = useState([]);

  const getProjectsImage = async () => {
    const { data, error } = await portfolioClient.storage
      .from("projects")
      .list("Thumbnail", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (error) {
      console.log(error);
    } else {
      setAllProjectsImages(data);
    }
   
    
  };
   useEffect(() => {
     getProjectsImage();
   }, []);
  return (
    <AnimatedPage>
      <div>
        <div className="h-screen flex items-center">
          <section className="overflow-hidden text-gray-700 ">
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
              <div className="flex flex-wrap -m-1 md:-m-2">
                {allProjectsImages.map((item, key) => (
                  <div key={key} className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={item.name}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
}
