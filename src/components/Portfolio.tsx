"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  github: string;
  featured?: boolean;
  objectPosition?: string;
}

const projects: Project[] = [
  {
    title: "AsylumAssist",
    year: "January 2025 – Present",
    description:
      "Founding Full-Stack AI Engineer developing a mobile-first platform with the legal team at the Interfaith Center in NYC that guides asylum seekers through the court process and helps them generate legally-sound declaration PDFs with LLMs. Built with React.js, Node.js/Express, PostgreSQL, and Supabase with offline-first syncing. Impact: Reduces prep time from weeks to hours, saving $5k–$15k per case.",
    image: "images/AsylumAssist.png",
    objectPosition: "object-top",
    github: "https://github.com/lucyzimmo/AsylumAssist",
    featured: true,
  },
  {
    title: "SubLine (Background Buddy)",
    year: "2024–present",
    description:
      "Full-stack AI platform for journalists. Built custom NLP models (entity + relation extraction with RE-DocRED finetuning), designed a human-in-the-loop annotation platform, and developed an interactive graph UI for exploring knowledge. Currently leading pilots with newsrooms.",
    image: "images/KG.png",
    github: "https://github.com/akanshyabhat/backgroundbuddy",
    featured: true,
  },
  {
    title: "The Quad",
    year: "2024",
    description: "A prediction market for the Stanford community",
    image: "images/Quad.png",
    github: "https://github.com/lucyzimmo/the-quad",
  },
  {
    title: "TransparencyGPT",
    year: "2023",
    description:
      "Mobile AI app for explainable bias detection in journalism. Designed retrieval + bias-aware LLM pipeline and deployed a production React/Flask app. Selected for Dorm Room Fund Female Founder Track.",
    image: "images/TG.png",
    github:
      "https://docs.google.com/presentation/d/1FenouPHBdPi9fJLOlw4dqXsBvWRs2eVi/edit?usp=sharing&ouid=109088702521409839637&rtpof=true&sd=true",
  },
  {
    title: "F*** This App",
    year: "2023",
    description:
      "A Mobile app developed to help users break addictions and bad habits.",
    image: "images/F-This.png",
    github: "https://www.youtube.com/watch?v=_chaWwF3OZw",
  },
  {
    title: "Food Insecurity Planning Model",
    year: "2023",
    description:
      "A Machine learning model for optimal food bank distribution in high-need areas.",
    image: "images/FoodBank.png",
    github: "https://github.com/lucyzimmo/Food-Planning-Model",
  },
  {
    title: "Smart Connections",
    year: "2023",
    description:
      "A Deep Q-learning agent designed to solve the NYT Connections Puzzle.",
    image: "images/SC.png",
    github: "https://github.com/lucyzimmo/SmartConnections",
  },
  {
    title: "Human Trafficking Lab",
    year: "2022–2023",
    description:
      "Developed computer vision + geospatial ML pipeline using satellite imagery to detect trafficking zones in the Amazon. Integrated outputs into deployable dashboards for NGOs.",
    image: "images/HT.jpg",
    github: "https://htdatalab.stanford.edu/",
  },
  {
    title: "MinBERT + SimCSE",
    year: "2021–2022",
    description:
      "Contrastive learning research project. Built minBERT-based embedding system with SimCSE, improving sentiment classification, semantic similarity, and paraphrase detection tasks by stabilizing training with cycling iterators, weighted losses, and dropout.",
    image: "images/minBERT.png",
    github: "https://github.com/CS224N-RL-LZ-JK/miniBert",
  },
  {
    title: "Stanford HAI (AI Index)",
    year: "2023",
    description:
      "Researched harms and biases in generative AI, co-authoring the widely read AI Index report (cited by policymakers, academics, and industry leaders).",
    image: "images/Hai.png",
    github: "https://hai.stanford.edu/",
  },
  {
    title: "TAG",
    year: "2023",
    description: "An app for prioritizing meaningful conversations",
    image: "images/TAG.png",
    github: "https://devpost.com/software/tag-bhw52e#updates",
  },
];

const timeline = [
  {
    year: "2025–present",
    title: "AsylumAssist",
    description:
      "Founding Full-Stack AI Engineer building mobile platform to guide asylum seekers through legal process.",
  },
  {
    year: "2024–present",
    title: "SubLine",
    description:
      "Leading development of full-stack AI platform for newsrooms.",
  },
  {
    year: "2023",
    title: "TransparencyGPT",
    description:
      "Built explainable bias detection app, selected for Dorm Room Fund.",
  },
  {
    year: "2023",
    title: "Stanford HAI",
    description:
      "Contributing to AI Index harms chapter, bridging technical work and policy.",
  },
  {
    year: "2022–2023",
    title: "Human Trafficking Lab",
    description:
      "Built ML pipeline for satellite imagery + trafficking detection.",
  },
  {
    year: "2021–2022",
    title: "minBERT/SimCSE Research",
    description: "Improved embeddings for multiple NLP downstream tasks.",
  },
];

const jobs = [
  {
    title: "Founding Full-Stack AI Engineer",
    company: "AsylumAssist",
    description:
      "Developing a mobile-first platform with the legal team at the Interfaith Center in NYC that guides asylum seekers through the court process and helps them generate legally-sound declaration PDFs with LLMs. Impact: Reduces prep time from weeks to hours, saving $5k–$15k per case.",
    image: "images/AsylumAssist.png",
    link: "https://github.com/lucyzimmo/AsylumAssist",
  },
  {
    title: "Co-Founder & Lead Engineer",
    company: "SubLine",
    description:
      "Building an AI platform for news organizations. Leading custom NLP model development, human-in-the-loop annotation platform, and interactive knowledge graph UI.",
    image: "images/subline.png",
    link: "https://www.sub-line.com/",
  },
  {
    title: "CS + Social Good Fellow",
    company: "C.I.S.A.",
    description:
      "Lead Research Intern for Senior Advisor for Technology and Innovation focused on AI + Human Rights.",
    image: "images/CISA.webp",
    link: "https://www.cisa.gov/",
  },
  {
    title: "platform",
    company: "Stanford Human Trafficking Data Lab",
    description:
      "Implemented remote detection algorithms leveraging satellite and geospatial data for pinpointing trafficking hotspots. Collaborated on computer vision models, contributing to ethical applications of AI in global challenges.",
    image: "images/HT.jpg",
    link: "https://htdatalab.stanford.edu/",
  },
  {
    title: "User platform, Product and Engineering Team",
    company: "Block Party",
    description:
      "Conducted 50+ user interviews to assess product fit and prioritize engineering solutions for harassment prevention tools. Organized beta testing initiatives and recruitment campaigns, driving iterative improvements in user experience.",
    image: "images/BP.png",
    link: "https://www.blockparty.com/",
  },
  {
    title: "platform",
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
      <div className="text-2xl font-bold">Lucy Zimmerman</div>
      <div className="space-x-4">
        <a href="#about" className="hover:text-[#1F51FF]">
          About
        </a>
        <a href="#current-work" className="hover:text-[#1F51FF]">
          Current Work
        </a>
        <a href="#projects" className="hover:text-[#1F51FF]">
          Projects
        </a>
        <a href="#skills" className="hover:text-[#1F51FF]">
          Skills
        </a>
        <a href="#timeline" className="hover:text-[#1F51FF]">
          Timeline
        </a>
        <a href="#experience" className="hover:text-[#1F51FF]">
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
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-7xl font-bold mb-6 text-white"
          >
            Lucy Zimmerman
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl mb-4 text-[#1F51FF]"
          >
            Full-Stack AI Builder & Researcher
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto"
          >
            I&apos;m an AI engineer and Stanford CS master’s student specializing in applied machine learning, AI safety, and product engineering. My background blends full-stack development and AI research — I&apos;m currently building Sub-Line.com, an AI system that turns decades of news archives into searchable, interpretable intelligence for journalists and researchers — supported by a $125K Brown Institute for Media Innovation Magic Grant.
            I’m excited by roles that connect cutting-edge AI tools and research to products with real impact, especially in human-AI collaboration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="https://github.com/lucyzimmo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1F51FF] text-white rounded-lg hover:bg-[#1a45cc] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lucy-zimmerman/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#1F51FF] text-[#1F51FF] rounded-lg hover:bg-[#1F51FF] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold mb-8 text-center text-white"
          >
            About
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-300 space-y-6"
          >
            <p>
              I&apos;m passionate about building AI systems that are reliable,
              interpretable, and human-centered. My work spans both AI
              research and full-stack engineering, from fine-tuning custom NLP
              models to designing interactive platforms for human oversight.
            </p>
            <p>
              Currently, I&apos;m working on <strong>SubLine</strong>, a full-stack
              AI platform for journalists featuring custom NLP
              fine-tuning, an interactive graph UI, and human-in-the-loop
              annotation systems.
            </p>
            <p>
              My past work includes <strong>TransparencyGPT</strong> (bias
              detection app selected for Dorm Room Fund), research at{" "}
              <strong>Stanford HAI</strong> on AI harms, and computer vision +
              geospatial ML at the <strong>Human Trafficking Lab</strong>.
            </p>
            <p>
              <strong>Core philosophy:</strong> AI must be reliable,
              interpretable, and human-centered to create meaningful impact for
              society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I'm Working On Section */}
      <section id="current-work" className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#0f0f1e]">
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold mb-12 text-center text-white"
          >
            What I&apos;m Working On
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#1a1a2e] p-8 rounded-lg border-2 border-[#1F51FF]"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#1F51FF]">
              <a
                href="https://www.sub-line.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#1F51FF]"
              >
                SubLine – AI Research Platform for News Organizations
              </a>
            </h3>
            <div className="text-lg text-gray-300 space-y-4">
              <p>
                SubLine is a full-stack AI application designed to help
                journalists explore complex information through AI-powered
                knowledge graphs.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Custom NER Model:</strong> Trained domain-specific
                  transformer-based entity extraction model to capture noisy and
                  local entities
                </li>
                <li>
                  <strong>Document-Level Relation Extraction:</strong> Built
                  comprehensive LLM fine-tuning pipeline on RE-DocRED with
                  multi-label classification across 97 relation types (Mistral-7B,
                  RoBERTa, DeBERTa)
                </li>
                <li>
                  <strong>End-to-End Deployment Platform:</strong> Engineered
                  complete system with preprocessing, automated evaluation
                  metrics, HuggingFace Hub integration, and production-ready
                  deployment
                </li>
                <li>
                  <strong>Human-in-the-Loop Graph Interface:</strong> Built
                  interactive React-based knowledge graph editor where reporters
                  highlight text, review entities/relationships, and approve
                  modifications that flow back into the training loop
                </li>
                <li>
                  <strong>Active Pilots:</strong> Currently running pilots with
                  newsrooms to refine the platform
                </li>
              </ul>
              <p className="pt-4">
                <strong>Tech Stack:</strong> PyTorch, HuggingFace Transformers,
                React, Next.js, Flask, Supabase
              </p>
            </div>
          </motion.div>
        </div>
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
                      className={`object-cover w-full h-full rounded-lg ${
                        project.objectPosition || "object-center"
                      }`}
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
                        <p className="opacity-0 group-hover:opacity-100 text-xs mt-1 text-gray-400">
                          {project.year}
                        </p>
                        <p className="opacity-0 group-hover:opacity-100 text-sm mt-2 px-4">
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
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold mb-16 text-center text-white"
          >
            Skills
          </motion.h2>

          {/* Full-Stack AI Applications */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-[#1F51FF]">
              Full-Stack AI Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "HuggingFace Transformers",
                "PyTorch",
                "NLP/LLM Fine-tuning",
                "RAG Pipelines",
                "Knowledge Graphs",
                "Human-in-the-Loop Systems",
                "Computer Vision",
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0f0f1e] p-4 rounded-lg border border-[#1F51FF]/30 hover:border-[#1F51FF] transition-colors"
                >
                  <span className="text-gray-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deployment & Engineering */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-[#1F51FF]">
              Deployment & Engineering
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "React",
                "Next.js",
                "Flask",
                "Supabase",
                "CI/CD",
                "HuggingFace Hub",
                "Cloud Compute (Vertex AI, AWS)",
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0f0f1e] p-4 rounded-lg border border-[#1F51FF]/30 hover:border-[#1F51FF] transition-colors"
                >
                  <span className="text-gray-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core ML & Research */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-[#1F51FF]">
              Core ML & Research
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Contrastive Learning (SimCSE)",
                "Reinforcement Learning (Q-Learning, RLHF)",
                "Adversarial ML Defenses",
                "Interpretability Methods",
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0f0f1e] p-4 rounded-lg border border-[#1F51FF]/30 hover:border-[#1F51FF] transition-colors"
                >
                  <span className="text-gray-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#1F51FF]">
              Beyond Code
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Ocean Swimming",
                "Surfing",
                "Running",
                "Cooking",
                "Solving NYT Games",
                "Creative Writing",
              ].map((hobby, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0f0f1e] p-4 rounded-lg border border-[#1F51FF]/30 hover:border-[#1F51FF] transition-colors"
                >
                  <span className="text-gray-200">{hobby}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="min-h-screen py-20 bg-[#0f0f1e]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold mb-16 text-center text-white"
          >
            Timeline
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="min-w-[140px] text-right">
                  <span className="text-[#1F51FF] font-bold text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="relative flex-1 bg-[#1a1a2e] p-6 rounded-lg border-l-4 border-[#1F51FF]">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
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
                <Card className="bg-[#1a1a2e] border-[#1a1a2e] border-lg transition-all duration-300 transform group-hover:scale-105">
                  <div className="relative overflow-hidden h-[300px]">
                    <motion.img
                      src={job.image}
                      alt={job.title}
                      className="object-contain w-full h-full rounded-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-[#00ff00]/10 opacity-100 group-hover:bg-gray-900 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="text-white text-center px-6">
                        <h3 className="opacity-0 group-hover:opacity-100 text-lg font-bold">
                          {job.title}
                        </h3>
                        <p className="opacity-0 group-hover:opacity-100 text-xs mt-1 text-gray-400">
                          <a
                            href={job.link}
                            target="_blank"
                            className="hover:underline"
                            rel="noopener noreferrer"
                          >
                            {job.company}
                          </a>
                        </p>
                        <p className="opacity-0 group-hover:opacity-100 text-sm mt-2">
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
