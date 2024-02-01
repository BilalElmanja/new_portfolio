"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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
    category: "NLP / LLMs",
    name: "HSE Agent : Automated Reporting System",
    description:
      "Our initiative focuses on simplifying Health, Safety, and Environment (HSE) complexities by integrating the RAG (Red, Amber, Green) system with Language Learning Models (LLM). This fusion aims to enhance the system's ability to handle a wide range of HSE-related inquiries effectively. Furthermore, it is crafted to produce in-depth HSE reports through the meticulous analysis and synthesis of data gathered from interactive discussions.",
    link: "https://drive.google.com/file/d/14tTrQo3EVYTZtL5r12fZ_-9BOwqbCbM_/view?usp=drive_link",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
