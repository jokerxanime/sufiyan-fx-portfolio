import React from 'react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-[#00d9ff]">Me</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:h-[500px]">
                <img
                  src={data.image}
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold">{data.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {data.description}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {data.story}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {data.stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-[#00d9ff] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <Card className="bg-[#1a1a1a] border-gray-800 p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-sm text-[#00d9ff]">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-800"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
