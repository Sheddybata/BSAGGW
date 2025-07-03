import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Droplets, Thermometer, Wind, Leaf, Users } from 'lucide-react';

interface DashboardPageProps {
  language: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Climate-Tech Dashboard',
      subtitle: 'Real-time Environmental Data & Project Metrics',
      metrics: [
        { icon: Droplets, label: 'Soil Moisture', value: '68%', trend: '+5%', color: 'blue' },
        { icon: Leaf, label: 'Vegetation Cover', value: '42%', trend: '+12%', color: 'green' },
        { icon: Thermometer, label: 'Avg Temperature', value: '34°C', trend: '-2°C', color: 'red' },
        { icon: Wind, label: 'Wind Speed', value: '12 km/h', trend: '+3%', color: 'gray' }
      ],
      projects: {
        title: 'Project Performance',
        items: [
          { name: 'Maiduguri Green Belt', progress: 75, target: 100 },
          { name: 'Community Forests', progress: 60, target: 100 },
          { name: 'Youth Training', progress: 45, target: 100 }
        ]
      },
      impact: {
        title: 'Environmental Impact',
        co2: '2,450 tons CO₂ absorbed',
        water: '15% water retention increase',
        biodiversity: '23 species restored'
      }
    },
    ha: {
      title: 'Dashboard na Fasahar Yanayi',
      subtitle: 'Bayanan Muhalli na Yanzu da Auna Ayyuka',
      metrics: [
        { icon: Droplets, label: 'Danshin Kasa', value: '68%', trend: '+5%', color: 'blue' },
        { icon: Leaf, label: 'Rufin Ciyayi', value: '42%', trend: '+12%', color: 'green' },
        { icon: Thermometer, label: 'Matsakaicin Zafi', value: '34°C', trend: '-2°C', color: 'red' },
        { icon: Wind, label: 'Saurin Iska', value: '12 km/h', trend: '+3%', color: 'gray' }
      ],
      projects: {
        title: 'Aikin Ayyuka',
        items: [
          { name: 'Green Belt na Maiduguri', progress: 75, target: 100 },
          { name: 'Dajin Al\'umma', progress: 60, target: 100 },
          { name: 'Horar da Matasa', progress: 45, target: 100 }
        ]
      },
      impact: {
        title: 'Tasirin Muhalli',
        co2: 'Ton 2,450 CO₂ da aka sha',
        water: 'Karuwar riƙe ruwa 15%',
        biodiversity: 'Nau\'in halittu 23 da aka maido'
      }
    },
    kr: {
      title: 'Climate-Tech Dashboard',
      subtitle: 'Real-time Environmental Data & Project Metrics',
      metrics: [
        { icon: Droplets, label: 'Soil Moisture', value: '68%', trend: '+5%', color: 'blue' },
        { icon: Leaf, label: 'Vegetation Cover', value: '42%', trend: '+12%', color: 'green' },
        { icon: Thermometer, label: 'Avg Temperature', value: '34°C', trend: '-2°C', color: 'red' },
        { icon: Wind, label: 'Wind Speed', value: '12 km/h', trend: '+3%', color: 'gray' }
      ],
      projects: {
        title: 'Project Performance',
        items: [
          { name: 'Maiduguri Green Belt', progress: 75, target: 100 },
          { name: 'Community Forests', progress: 60, target: 100 },
          { name: 'Youth Training', progress: 45, target: 100 }
        ]
      },
      impact: {
        title: 'Environmental Impact',
        co2: '2,450 tons CO₂ absorbed',
        water: '15% water retention increase',
        biodiversity: '23 species restored'
      }
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50',
      green: 'text-green-600 bg-green-50',
      red: 'text-red-600 bg-red-50',
      gray: 'text-gray-600 bg-gray-50'
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          {currentContent.title}
        </h1>
        <p className="text-xl text-gray-600">{currentContent.subtitle}</p>
      </div>

      {/* Environmental Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentContent.metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${getColorClasses(metric.color)}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                <div className="flex items-center justify-center text-sm">
                  <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                  <span className="text-green-600">{metric.trend}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-800">{currentContent.projects.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentContent.projects.items.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{project.name}</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-800">{currentContent.impact.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-lg font-semibold text-green-800">
                {currentContent.impact.co2}
              </div>
              <div className="text-sm text-green-600">Carbon Sequestration</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-lg font-semibold text-blue-800">
                {currentContent.impact.water}
              </div>
              <div className="text-sm text-blue-600">Water Conservation</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-lg font-semibold text-orange-800">
                {currentContent.impact.biodiversity}
              </div>
              <div className="text-sm text-orange-600">Biodiversity Recovery</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;