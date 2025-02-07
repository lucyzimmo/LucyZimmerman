"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const projects = [
  {
    title: "The Quad",
    description: "A prediction market for the Stanford community",
    image: "images/Quad.png",
    github: "https://github.com/lucyzimmo/the-quad",
  },
  {
    title: "Background Buddy",
    description:
      "Unveiling key archival context for the Minnesota tribunal with AI-powered knowledge graphs.",
    image: "images/KG.png",
    github: "https://github.com/akanshyabhat/backgroundbuddy",
  },
  {
    title: "TransparencyGPT",
    description: "A mobile app leveraging AI to combat news misinformation",
    image: "images/TG.png",
    github:
      "https://docs.google.com/presentation/d/1FenouPHBdPi9fJLOlw4dqXsBvWRs2eVi/edit?usp=sharing&ouid=109088702521409839637&rtpof=true&sd=true",
  },
  // Hello
  {
    title: "F*** This App",
    description:
      "A Mobile app developed to help users break addictions and bad habits.",
    image: "images/F-This.png",
    github: "https://www.youtube.com/watch?v=_chaWwF3OZw",
  },
  {
    title: "Food Insecurity Planning Model",
    description:
      "A Machine learning model for optimal food bank distribution in high-need areas.",
    image: "images/FoodBank.png",
    github: "https://github.com/lucyzimmo/Food-Planning-Model",
  },
  {
    title: "Smart Connections",
    description:
      "A Deep Q-learning agent designed to solve the NYT Connections Puzzle.",
    image: "images/SC.png",
    github: "https://github.com/lucyzimmo/SmartConnections",
  },
  {
    title: "MinBERT",
    description: "We built a BERT model enhanced by SimSCE",
    image: "images/minBERT.png",
    github: "https://github.com/CS224N-RL-LZ-JK/miniBert",
  },

  {
    title: "TAG",
    description: "An app for prioritizing meaningful conversations",
    image: "images/TAG.png",
    github: "https://devpost.com/software/tag-bhw52e#updates",
  },
];

const jobs = [
  {
    title: "CS + Social Good Fellow",
    company: "C.I.S.A.",
    description:
      "Lead Research Intern for Senior Advisor for Technology and Innovation focused on AI + Human Rights.",
    image: "images/CISA.webp",
    link: "https://www.cisa.gov/",
  },
  {
    title: "Research Assistant",
    company: "Stanford Human Trafficking Data Lab",
    description:
      "Implemented remote detection algorithms leveraging satellite and geospatial data for pinpointing trafficking hotspots. Collaborated on computer vision models, contributing to ethical applications of AI in global challenges.",
    image: "images/HT.jpg",
    link: "https://htdatalab.stanford.edu/",
  },
  {
    title: "User Research Assistant, Product and Engineering Team",
    company: "Block Party",
    description:
      "Conducted 50+ user interviews to assess product fit and prioritize engineering solutions for harassment prevention tools. Organized beta testing initiatives and recruitment campaigns, driving iterative improvements in user experience.",
    image: "images/BP.png",
    link: "https://www.blockparty.com/",
  },
  {
    title: "Research Assistant",
    company: "Stanford Human-Centered Artificial Intelligence Center",
    description:
      "Delivered 50+ data-driven analyses featured in the 2023 AI Index report, highlighting AI's societal impacts. Explored constraints within AI systems to propose strategies for fostering inclusivity in AI applications.",
    image: "images/Hai.png",
    link: "https://hai.stanford.edu/",
  },
  {
    title: "Software Engineer",
    company: "WiseTech Global",
    description:
      "Modernized software architecture for logistics platforms, coding over 2,000 lines and integrating scalable infrastructure. Supported operational systems for top global freight forwarders, improving efficiency and reliability.",
    image: "images/WT.jpg",
    link: "https://www.wisetechglobal.com/",
  },
  {
    title: "Product Engineer",
    company: "Presien",
    description:
      "Built Blindsight, a safety solution for industrial environments powered by AI vision.",
    image: "images/Presien.png",
    link: "https://www.presien.com/",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1a1a2e] text-[#eaeaea]">
      <div className="text-2xl font-bold">Portfolio</div>
      <div className="space-x-4">
        <a href="#projects" className="hover:text-[#ffcc00]">
          Projects
        </a>
        <a href="#skills" className="hover:text-[#ffcc00]">
          Skills
        </a>
        <a href="#experience" className="hover:text-[#ffcc00]">
          Experience
        </a>
      </div>
    </nav>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white-500">
      <Navbar />
      <section className="h-screen flex items-center justify-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-8xl font-bold bg-clip-text"
        >
          Hey, I&apos;m Lucy Zimmerman!
        </motion.h1>
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl text-center max-w-4xl"
        >
          I&apos;m a student at Stanford University where I study Computer
          Science and Creative Writing. I grew up in Sydney, Australia.
          <br />
          <br />
          I&apos;m passionate about empowering humanity with technology that has
          an impact with an interest that lies in human-centred AI. I love
          building solutions from the ground up, energetically leading and
          bringing my creativity everywhere I go.
          <br />
          <br />
          Let&apos;s make an impact together!
        </motion.p>
      </section>

      <section id="projects" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl font-bold mb-12 text-center text-white-400"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-[#1a1a2e] border-[#1a1a2e] border-lg transition-all duration-300 transform group-hover:scale-105">
                  <div className="relative overflow-hidden h-[300px]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full rounded-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-[#00ff00]/10 opacity-100 group-hover:bg-gray-900 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-center"
                      >
                        <h3 className="opacity-0 group-hover:opacity-100 text-lg font-bold ">
                          {project.title}
                        </h3>
                        <p className="opacity-0 group-hover:opacity-100 text-sm mt-2">
                          {project.description}
                        </p>
                        <p className="opacity-0 group-hover:opacity-100 mt-4 underline">
                          SEE MORE
                        </p>
                      </a>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-[#1a1a2e] py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl font-bold mb-12 text-center text-white-400"
          >
            Skills
          </motion.h2>

          {/* Programming Languages */}
          <h3 className="text-4xl font-bold mb-6 text-center text-white-300">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Web Development (React, Next.js, TypeScript)",
                level: 85,
              },
              { name: "Mobile Development (React Native, Expo)", level: 90 },
              { name: "Python", level: 80 },
              { name: "C++", level: 70 },

              {
                name: "AI Development (LLMs, RAG, Knowledge Graphs, Computer Vision, NLP)",
                level: 80,
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a2e] p-4 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-[#1F51FF] h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Developer Tools/Frameworks */}
          <h3 className="text-4xl font-bold mb-6 text-center text-white-300">
            The Rest of My Life
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              // Hobbies
              { name: "Cooking", level: 60 },
              { name: "Ocean Swimming", level: 80 },
              { name: "Surfing", level: 30 },
              { name: "Running", level: 50 },
              { name: "Solving the NYT Games", level: 100 },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a2e] p-4 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{tool.name}</span>
                  <span>{tool.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-[#1F51FF] h-2.5 rounded-full"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl font-bold mb-12 text-center text-white-400"
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="transition-all duration-300 transform group-hover:scale-105">
                  <div className="relative overflow-hidden h-[300px] flex-vertical items-center justify-center">
                    <motion.img
                      src={job.image}
                      alt={job.title}
                      className="object-cover w-full h-full rounded-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:bg-gray-900 flex-vertical items-center justify-center transition-opacity duration-300 flex items-center justify-center shadow-lg"
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="flex-vertical items-center justify-center px-10">
                        <h3 className="text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {job.title + "  @  "}
                          <a
                            href={job.link}
                            target="_blank"
                            className="hover:underline"
                            rel="noopener noreferrer"
                          >
                            {job.company}
                          </a>
                        </h3>
                        <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {job.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
