import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./src/components/ui/Card";
import { Button } from "./src/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "TAG",
    description:
      "A mobile app for meaningful conversations through AI-crafted prompts.",
    image: "/images/tag.png",
  },
  {
    title: "TransparencyGPT",
    description: "An AI-driven platform for identifying misinformation.",
    image: "/images/transparencygpt.png",
  },
  {
    title: "F*** This",
    description:
      "A behavioral change app to help users break free from bad habits.",
    image: "/images/fthis.png",
  },
  {
    title: "Wrapped Anytime",
    description: "A tool to get Spotify Wrapped data anytime.",
    image: "/images/wrappedanytime.png",
  },
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex flex-col justify-center items-center p-12">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Projects
        </motion.h1>
        <div className="relative w-full max-w-4xl">
          <Button
            variant="ghost"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-800/50 z-10"
            onClick={prevProject}
          >
            <ArrowLeft size={24} className="text-gray-300" />
          </Button>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="flex items-center justify-center"
            >
              <Card className="w-full p-6 bg-gray-800 border-gray-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={projects[index].image}
                    alt={projects[index].title}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </motion.div>
                <CardContent>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-semibold mt-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                      {projects[index].title}
                    </h2>
                    <p className="text-gray-400 mt-2 text-lg">
                      {projects[index].description}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="ghost"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-800/50 z-10"
            onClick={nextProject}
          >
            <ArrowRight size={24} className="text-gray-300" />
          </Button>
        </div>
        <motion.div
          className="flex gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {projects.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-purple-500 w-4" : "bg-gray-600"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
