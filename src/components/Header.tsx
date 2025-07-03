import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onMenuClick: () => void;
  currentLang: string;
  onLanguageChange: (lang: string) => void;
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
        <div className="flex flex-col items-center justify-center w-full md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center w-full md:flex-row md:items-center md:space-x-4">
            <div className="flex items-center justify-center w-full md:w-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={onMenuClick}
                className="md:hidden text-white hover:bg-green-700 absolute left-2 top-2"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-3 w-full">
                <img
                  src="/boaggw-logo.jpg"
                  alt="Borno State Agency for Great Green Wall Logo"
                  className="w-14 h-14 object-contain border-2 border-green-200 bg-white mb-2 md:mb-0 md:w-20 md:h-20"
                />
                <h1 className="text-base font-bold text-center leading-tight md:text-xl md:text-left md:ml-2">
                  Borno state agency for great green wall
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-2 md:mt-0">
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