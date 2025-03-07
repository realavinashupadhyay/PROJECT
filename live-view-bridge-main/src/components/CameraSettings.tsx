
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CameraConfig {
  name: string;
  ip: string;
  port: string;
  username: string;
  password: string;
  type: 'dahua' | 'coreprix';
}

const CameraSettings = () => {
  const [cameras, setCameras] = useState<CameraConfig[]>([]);
  const [newCamera, setNewCamera] = useState<CameraConfig>({
    name: '',
    ip: '',
    port: '',
    username: '',
    password: '',
    type: 'dahua'
  });

  const handleAddCamera = () => {
    if (newCamera.ip && newCamera.port && newCamera.name) {
      setCameras([...cameras, newCamera]);
      setNewCamera({
        name: '',
        ip: '',
        port: '',
        username: '',
        password: '',
        type: 'dahua'
      });
    }
  };

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Camera Name</Label>
          <Input
            id="name"
            placeholder="Front Door Camera"
            value={newCamera.name}
            onChange={(e) => setNewCamera({ ...newCamera, name: e.target.value })}
            className="bg-zinc-800 border-zinc-700"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="ip">IP Address</Label>
            <Input
              id="ip"
              placeholder="192.168.1.100"
              value={newCamera.ip}
              onChange={(e) => setNewCamera({ ...newCamera, ip: e.target.value })}
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="port">Port</Label>
            <Input
              id="port"
              placeholder="8000"
              value={newCamera.port}
              onChange={(e) => setNewCamera({ ...newCamera, port: e.target.value })}
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={newCamera.username}
              onChange={(e) => setNewCamera({ ...newCamera, username: e.target.value })}
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={newCamera.password}
              onChange={(e) => setNewCamera({ ...newCamera, password: e.target.value })}
              className="bg-zinc-800 border-zinc-700"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Camera Type</Label>
          <select
            id="type"
            value={newCamera.type}
            onChange={(e) => setNewCamera({ ...newCamera, type: e.target.value as 'dahua' | 'coreprix' })}
            className="w-full bg-zinc-800 border-zinc-700 rounded-md p-2 text-zinc-100"
          >
            <option value="dahua">Dahua NVR</option>
            <option value="coreprix">Coreprix IP Camera</option>
          </select>
        </div>

        <Button 
          onClick={handleAddCamera}
          className="w-full"
        >
          Add Camera
        </Button>
      </div>

      {cameras.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Connected Cameras</h3>
          <div className="space-y-2">
            {cameras.map((camera, index) => (
              <div key={index} className="bg-zinc-800 p-3 rounded-md">
                <p className="font-medium">{camera.name}</p>
                <p className="text-sm text-zinc-400">{camera.type === 'dahua' ? 'Dahua NVR' : 'Coreprix IP Camera'}</p>
                <p className="text-sm text-zinc-400">{camera.ip}:{camera.port}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraSettings;
