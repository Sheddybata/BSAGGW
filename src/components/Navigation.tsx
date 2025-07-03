import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Home, Info, FolderOpen, BarChart3, Users, X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
  isMobile: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  onClose,
  currentPage,
  onPageChange,
  isMobile,
}) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'youth', label: 'Youth Portal', icon: Users },
  ];

  const NavigationContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-green-800">BSAGGW</h2>
        <p className="text-sm text-gray-600">Digital Gateway</p>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  currentPage === item.id && 'bg-green-100 text-green-800 hover:bg-green-200'
                )}
                onClick={() => onPageChange(item.id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="w-64 p-0">
          <NavigationContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className={cn(
      'fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r transition-transform duration-300 ease-in-out z-30',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    )}>
      <NavigationContent />
    </aside>
  );
};

export default Navigation;