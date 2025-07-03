import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, Calendar, Users, Leaf } from 'lucide-react';

interface ProjectsPageProps {
  language: string;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Our Projects',
      subtitle: 'Active Environmental Restoration Initiatives',
      projects: [
        {
          id: 1,
          title: 'Maiduguri Green Belt Initiative',
          location: 'Maiduguri Metropolitan',
          status: 'Active',
          progress: 75,
          startDate: '2023-01-15',
          beneficiaries: 50000,
          treesPlanted: 15000,
          description: 'Creating a protective green belt around Maiduguri to combat desertification and improve air quality.'
        },
        {
          id: 2,
          title: 'Community Forest Restoration',
          location: 'Bama, Gwoza, Chibok',
          status: 'Active',
          progress: 60,
          startDate: '2023-03-20',
          beneficiaries: 25000,
          treesPlanted: 8000,
          description: 'Restoring degraded forest areas in conflict-affected communities through participatory reforestation.'
        },
        {
          id: 3,
          title: 'Youth Green Skills Training',
          location: 'Statewide',
          status: 'Active',
          progress: 45,
          startDate: '2023-06-01',
          beneficiaries: 2000,
          treesPlanted: 5000,
          description: 'Training young people in sustainable agriculture, tree nursery management, and environmental conservation.'
        }
      ]
    },
    ha: {
      title: 'Ayyukanmu',
      subtitle: 'Ayyukan Maido da Muhalli da ke Gudana',
      projects: [
        {
          id: 1,
          title: 'Shirin Green Belt na Maiduguri',
          location: 'Babban Birnin Maiduguri',
          status: 'Yana Gudana',
          progress: 75,
          startDate: '2023-01-15',
          beneficiaries: 50000,
          treesPlanted: 15000,
          description: 'Kirkiro green belt mai karewa a kewayen Maiduguri don yaki da hamada da inganta iskar numfashi.'
        },
        {
          id: 2,
          title: 'Maido da Dajin Al\'umma',
          location: 'Bama, Gwoza, Chibok',
          status: 'Yana Gudana',
          progress: 60,
          startDate: '2023-03-20',
          beneficiaries: 25000,
          treesPlanted: 8000,
          description: 'Maido da yankunan daji da suka lalace a al\'ummomi da rikici ya shafa ta hanyar dasa bishiyoyi tare.'
        },
        {
          id: 3,
          title: 'Horar da Matasa kan Fasahar Kore',
          location: 'Duk Jihar',
          status: 'Yana Gudana',
          progress: 45,
          startDate: '2023-06-01',
          beneficiaries: 2000,
          treesPlanted: 5000,
          description: 'Horar da matasa kan noman dorewa, kula da gandun bishiyoyi, da kiyaye muhalli.'
        }
      ]
    },
    kr: {
      title: 'Andəl Projects',
      subtitle: 'Active Environmental Restoration Initiatives',
      projects: [
        {
          id: 1,
          title: 'Maiduguri Green Belt Initiative',
          location: 'Maiduguri Metropolitan',
          status: 'Active',
          progress: 75,
          startDate: '2023-01-15',
          beneficiaries: 50000,
          treesPlanted: 15000,
          description: 'Maiduguri protective green belt creation desertification combat ro air quality improvement fəye.'
        },
        {
          id: 2,
          title: 'Community Forest Restoration',
          location: 'Bama, Gwoza, Chibok',
          status: 'Active',
          progress: 60,
          startDate: '2023-03-20',
          beneficiaries: 25000,
          treesPlanted: 8000,
          description: 'Conflict-affected communities degraded forest areas restoration participatory reforestation fəye.'
        },
        {
          id: 3,
          title: 'Youth Green Skills Training',
          location: 'Statewide',
          status: 'Active',
          progress: 45,
          startDate: '2023-06-01',
          beneficiaries: 2000,
          treesPlanted: 5000,
          description: 'Young people sustainable agriculture, tree nursery management, ro environmental conservation training.'
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          {currentContent.title}
        </h1>
        <p className="text-xl text-gray-600">{currentContent.subtitle}</p>
      </div>

      <div className="grid gap-6">
        {currentContent.projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader className="bg-green-50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-green-800 mb-2">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    Started: {project.startDate}
                  </div>
                </div>
                <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Users className="h-5 w-5 mx-auto mb-1 text-blue-600" />
                    <div className="text-lg font-semibold text-blue-800">
                      {project.beneficiaries.toLocaleString()}
                    </div>
                    <div className="text-xs text-blue-600">Beneficiaries</div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <Leaf className="h-5 w-5 mx-auto mb-1 text-green-600" />
                    <div className="text-lg font-semibold text-green-800">
                      {project.treesPlanted.toLocaleString()}
                    </div>
                    <div className="text-xs text-green-600">Trees Planted</div>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 mx-auto mb-1 text-orange-600" />
                    <div className="text-lg font-semibold text-orange-800">Active</div>
                    <div className="text-xs text-orange-600">Status</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;