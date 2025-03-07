
import React from 'react';
import CameraView from './CameraView';

const CameraGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      <div className="col-span-full text-center py-12">
        <h2 className="text-xl text-zinc-400">No cameras connected</h2>
        <p className="text-zinc-500 mt-2">Add cameras through the settings menu to start streaming</p>
      </div>
    </div>
  );
};

export default CameraGrid;
