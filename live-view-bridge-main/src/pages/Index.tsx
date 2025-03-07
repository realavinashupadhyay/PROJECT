
import React from 'react';
import Header from '@/components/Header';
import CameraGrid from '@/components/CameraGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-zinc-100">
      <Header />
      <main className="container mx-auto py-6">
        <CameraGrid />
      </main>
    </div>
  );
};

export default Index;
