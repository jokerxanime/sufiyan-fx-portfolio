import React from 'react';
import { Check } from 'lucide-react';
import { Card } from './ui/card';

const Services = ({ services }) => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            What I <span className="text-[#00d9ff]">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive video editing services tailored to your content needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group bg-[#1a1a1a] border-gray-800 hover:border-[#00d9ff] transition-all duration-500 p-8 hover:transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Number */}
              <div className="text-5xl font-bold text-[#00d9ff]/20 group-hover:text-[#00d9ff]/40 transition-colors duration-300 mb-4">
                0{service.id}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00d9ff] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00d9ff]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-[#00d9ff]" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
