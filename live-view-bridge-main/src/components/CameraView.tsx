
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Maximize2, Volume2, VolumeX } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface CameraProps {
  camera: {
    id: number;
    name: string;
  };
}

const CameraView = ({ camera }: CameraProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <Card className="overflow-hidden bg-black/90 backdrop-blur-sm border-zinc-800/50">
        <div className="relative aspect-video bg-zinc-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-zinc-500">Stream loading...</p>
          </div>
          
          {/* Camera controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium">{camera.name}</h3>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/20"
                  onClick={toggleAudio}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsFullscreen(true)}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black border-zinc-800">
                    <div className="aspect-video bg-zinc-900 w-full h-full flex items-center justify-center">
                      <p className="text-zinc-500">Stream loading...</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CameraView;
