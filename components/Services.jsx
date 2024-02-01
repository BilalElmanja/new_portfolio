import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "AI Consulting and Innovation",
    description:
      "Offering expert advice and innovative strategies to integrate AI into your business operations, ensuring you stay ahead of the curve in leveraging AI for competitive advantage, process optimization, and customer engagement",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "AI SaaS Development",
    description:
      "pecializing in the development of AI-powered Software as a Service (SaaS) solutions, providing scalable, cloud-based applications tailored to meet specific business needs, with a focus on user experience and seamless integration",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Advanced Data Modeling",
    description:
      "Utilizing sophisticated statistical techniques and machine learning algorithms to construct predictive models that turn data into actionable insights, driving informed decision-making and strategic planning.",
  },
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Computer Vision Solutions",
    description:
      "Developing cutting-edge computer vision applications that enable machines to interpret and make decisions based on visual data, applicable in areas such as image recognition, quality inspection, and surveillance",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Natural Language Processing (NLP) Solutions",
    description:
      "Implementing NLP techniques to facilitate understanding and generation of human language by machines, enabling applications such as sentiment analysis, language translation, and intelligent chatbots.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
