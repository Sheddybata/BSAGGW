import React, { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

interface HeaderProps {
  onMenuClick: () => void;
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

function Earth3D() {
  return (
    <Canvas style={{ width: '100px', height: '100px' }} camera={{ position: [0, 0, 2.5], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <Suspense fallback={null}>
        <mesh rotation={[0.5, 0.5, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#22c55e" wireframe={false} />
        </mesh>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} enablePan={false} />
    </Canvas>
  );
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, currentLang, onLanguageChange }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ha', name: 'Hausa' },
    { code: 'kr', name: 'Kanuri' }
  ];

  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-2/3 md:w-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="md:hidden text-white hover:bg-green-700 mr-2"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-3">
              <img
                src="/boaggw-logo.jpg"
                alt="Borno State Agency for Great Green Wall Logo"
                className="w-14 h-14 object-contain border-2 border-green-200 bg-white mb-1 md:mb-0 md:w-20 md:h-20"
              />
              <h1 className="hidden md:block text-base font-bold text-left leading-tight md:text-xl md:text-left md:ml-2">
                Borno state agency for great green wall
              </h1>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-end md:flex-row md:items-center md:w-auto md:mt-0">
            <div className="mb-2 md:mb-0 md:mr-4 flex justify-end">
              <Earth3D />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
                  <Globe className="h-4 w-4 mr-2" />
                  {languages.find(l => l.code === currentLang)?.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;