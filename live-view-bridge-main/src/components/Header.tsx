
import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CameraSettings from './CameraSettings';

const Header = () => {
  return (
    <header className="border-b border-zinc-800/50 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-zinc-100" />
            <h1 className="text-xl font-semibold text-zinc-100">Security Monitor</h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-zinc-100 hover:bg-white/10">
                <Settings className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-zinc-900 text-zinc-100 border-zinc-800">
              <DialogHeader>
                <DialogTitle>Camera Settings</DialogTitle>
              </DialogHeader>
              <CameraSettings />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
