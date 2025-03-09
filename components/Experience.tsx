"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import Image from "next/image";

const content = [
  {
    title: "OPG Fullstack Software Developer",
    description: [
        "★ Engineered full-stack web apps with Angular, C#, ASP.NET, and TypeScript, enhancing functionality and user experience.",
        "★ Optimized database performance using SQL and Azure, increasing data retrieval speeds by 30% and enabling scalable solutions.",
        "★ Designed and deployed Data Analytics Dashboards with SQL and Power Platform, automating monitoring processes and saving months of manual work.",
        "★ Led the development of digital Work Plans and Inspection Test Plans (ITPs), streamlining workflows with $50M annual savings.",
        "★ Advised on the recruitment process for interns, evaluating candidates and guiding on technical skills and frameworks to build a strong talent pipeline.",
      ],      
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Business Intelligence & AI Research Assistant",
    description: [
        "★ Applied advanced data analysis techniques using Python, Pandas, and NumPy to extract actionable insights and identify key trends.",
        "★ Explored and implemented machine learning models, including OpenAI’s GPT, for text generation and social media sentiment analysis.",
        "★ Conducted in-depth research on API alternatives and innovative methodologies for social media data analysis, enhancing solution effectiveness.",
        "★ Contributed to organizing and moderating the Southern Alberta AI Conference 2024, leading discussions on AI’s impact on business, ethics, and sustainability while coordinating keynote speakers, workshops, and panel discussions.",
      ],
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "AI4Good Machine Learning Fellow",
    description: [
      "★ Selected for the prestigious AI4Good Lab program, sponsored by Amii, CIFAR, and Mila, focusing on leveraging AI for social good.",
      "★ Developed expertise in data pre-processing, model training, and evaluation, utilizing machine learning frameworks such as TensorFlow and PyTorch.",
      "★ Won the Edmonton Accelerator Team Award** for developing 'PlatePal,' an AI-driven solution tackling food insecurity among students in Canada, recognized for outstanding innovation and collaboration.",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Mitacs Globalink Internship Mentor",
    description: [
      "★ Mentored international students in the Mitacs Globalink Program, offering research guidance, cultural orientation, and professional development support.",
      "★ Leveraged leadership skills to address challenges, foster cross-cultural collaboration, and improve students’ academic and professional journeys.",
      "★ Resolved academic and personal challenges for 6 international interns, ensuring a positive and productive experience within the program.",
      "★ Facilitated cultural adaptation, helping students navigate Canadian work culture, local customs, and effective communication practices.",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function Experience() {
  return (
    <div className="p-10" id="experience">
      <h1 className="heading py-20">
        My <span className="text-purple">Work Experience</span> {" "} in a wrap
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
