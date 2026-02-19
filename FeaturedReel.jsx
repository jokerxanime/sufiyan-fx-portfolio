import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';

const FeaturedReel = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {data.title}
          </h2>
          <p className="text-gray-400 text-lg">
            Watch my latest compilation of work
          </p>
        </div>

        {/* Video Thumbnail */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={data.thumbnail}
              alt="Featured Reel"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="w-20 h-20 rounded-full bg-[#00d9ff] hover:bg-[#00b8d9] text-black transition-all duration-300 group-hover:scale-110"
              >
                <Play className="h-10 w-10 fill-black" />
              </Button>
            </div>

            {/* Label */}
            <div className="absolute bottom-8 left-8">
              <p className="text-white text-xl font-bold">Watch Demo Reel</p>
              <p className="text-gray-300 text-sm">3 minutes of pure creativity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isPlaying} onOpenChange={setIsPlaying}>
        <DialogContent className="max-w-6xl bg-black border-gray-800 p-0">
          <DialogTitle className="sr-only">Featured Reel Video</DialogTitle>
          <div className="relative aspect-video w-full">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#00d9ff] transition-colors z-50"
            >
              <X size={32} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`${data.videoUrl}?autoplay=1`}
              title="Featured Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedReel;
