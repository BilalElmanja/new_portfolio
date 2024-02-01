"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/tryon.jpeg",
    category: "Generative AI",
    name: "TryOn",
    description:
      "Advanced Generative AI system that generates TryOn images of clothing items on a person based on a single image of the item and a single image of the person.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/bigdata.jpeg",
    category: "Big Data",
    name: "Real-time Anomaly Detection in production data",
    description:
      "Advanced Anomaly detection system based on Transformers and Autoencoders that detects anomalies in production data using Big Data pipeline.",
    link: "https://drive.google.com/file/d/13Br6wKsqTb4G41WkPDY-ib65gEpBzRFS/view?usp=drive_link",
    github: "/",
  },
  {
    image: "/work/hseagent.png",
    category: "Natural Language Processing",
    name: "HSE Agent : Automated Reporting System",
    description:
      "Our initiative focuses on simplifying Health, Safety, and Environment (HSE) complexities by integrating the RAG (Red, Amber, Green) system with Language Learning Models (LLM). This fusion aims to enhance the system's ability to handle a wide range of HSE-related inquiries effectively. Furthermore, it is crafted to produce in-depth HSE reports through the meticulous analysis and synthesis of data gathered from interactive discussions.",
    link: "https://drive.google.com/file/d/14tTrQo3EVYTZtL5r12fZ_-9BOwqbCbM_/view?usp=drive_link",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Just to have an Idea</p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
