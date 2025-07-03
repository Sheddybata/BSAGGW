import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Award, Calendar, MapPin } from 'lucide-react';

interface YouthPageProps {
  language: string;
}

const YouthPage: React.FC<YouthPageProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Youth Engagement Portal',
      subtitle: 'Empowering Young People for Environmental Action',
      hero: {
        title: 'Join the Green Revolution',
        description: 'Be part of the solution! Discover opportunities to contribute to environmental restoration in Borno State.',
        cta: 'Get Involved Today'
      },
      programs: [
        {
          title: 'Green Skills Training',
          description: 'Learn sustainable agriculture, tree nursery management, and environmental conservation techniques.',
          duration: '3 months',
          participants: 500,
          location: 'Multiple Centers',
          status: 'Open',
          benefits: ['Certificate', 'Stipend', 'Job Placement']
        },
        {
          title: 'Youth Environmental Ambassadors',
          description: 'Become a community leader in environmental awareness and climate action.',
          duration: '6 months',
          participants: 100,
          location: 'Statewide',
          status: 'Open',
          benefits: ['Leadership Training', 'Networking', 'Recognition']
        },
        {
          title: 'Innovation Challenge',
          description: 'Develop tech solutions for environmental challenges and win prizes.',
          duration: '2 months',
          participants: 200,
          location: 'Online/Hybrid',
          status: 'Coming Soon',
          benefits: ['Cash Prizes', 'Mentorship', 'Incubation']
        }
      ],
      opportunities: [
        { title: 'Tree Planting Volunteer', date: '2024-02-15', location: 'Maiduguri' },
        { title: 'Community Outreach', date: '2024-02-20', location: 'Bama' },
        { title: 'Environmental Workshop', date: '2024-02-25', location: 'Gwoza' }
      ]
    },
    ha: {
      title: 'Tashar Hada kai da Matasa',
      subtitle: 'Karfafa Matasa don Ayyukan Muhalli',
      hero: {
        title: 'Shiga Juyin Halittar Kore',
        description: 'Ku zama sashe na mafita! Gano damar ba da gudummawa ga maido da muhalli a Jihar Borno.',
        cta: 'Shiga Yau'
      },
      programs: [
        {
          title: 'Horar da Fasahar Kore',
          description: 'Koyi noman dorewa, kula da gandun bishiyoyi, da dabarun kiyaye muhalli.',
          duration: 'Watanni 3',
          participants: 500,
          location: 'Cibiyoyi da Yawa',
          status: 'A Bude',
          benefits: ['Takaddun Shaida', 'Albashi', 'Sanya Aiki']
        },
        {
          title: 'Jakadun Muhalli na Matasa',
          description: 'Zama jagoran al\'umma a wayar da kan muhalli da ayyukan yanayi.',
          duration: 'Watanni 6',
          participants: 100,
          location: 'Duk Jihar',
          status: 'A Bude',
          benefits: ['Horar da Jagoranci', 'Sadarwa', 'Karramawa']
        },
        {
          title: 'Gasar Kirkire-kirkire',
          description: 'Kirkiro hanyoyin fasaha don kalubalen muhalli ku ci kyautuka.',
          duration: 'Watanni 2',
          participants: 200,
          location: 'Online/Gauraye',
          status: 'Yana Zuwa',
          benefits: ['Kyautar Kudi', 'Jagora', 'Tallafi']
        }
      ],
      opportunities: [
        { title: 'Aikin Sa Bishiyoyi', date: '2024-02-15', location: 'Maiduguri' },
        { title: 'Wayar da Al\'umma', date: '2024-02-20', location: 'Bama' },
        { title: 'Taron Muhalli', date: '2024-02-25', location: 'Gwoza' }
      ]
    },
    kr: {
      title: 'Youth Engagement Portal',
      subtitle: 'Young People Environmental Action Empowerment',
      hero: {
        title: 'Green Revolution Join',
        description: 'Solution part be! Borno Lawan environmental restoration contribution opportunities discover.',
        cta: 'Today Get Involved'
      },
      programs: [
        {
          title: 'Green Skills Training',
          description: 'Sustainable agriculture, tree nursery management, ro environmental conservation techniques learn.',
          duration: '3 months',
          participants: 500,
          location: 'Multiple Centers',
          status: 'Open',
          benefits: ['Certificate', 'Stipend', 'Job Placement']
        },
        {
          title: 'Youth Environmental Ambassadors',
          description: 'Community leader environmental awareness ro climate action become.',
          duration: '6 months',
          participants: 100,
          location: 'Statewide',
          status: 'Open',
          benefits: ['Leadership Training', 'Networking', 'Recognition']
        },
        {
          title: 'Innovation Challenge',
          description: 'Environmental challenges tech solutions develop ro prizes win.',
          duration: '2 months',
          participants: 200,
          location: 'Online/Hybrid',
          status: 'Coming Soon',
          benefits: ['Cash Prizes', 'Mentorship', 'Incubation']
        }
      ],
      opportunities: [
        { title: 'Tree Planting Volunteer', date: '2024-02-15', location: 'Maiduguri' },
        { title: 'Community Outreach', date: '2024-02-20', location: 'Bama' },
        { title: 'Environmental Workshop', date: '2024-02-25', location: 'Gwoza' }
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

      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-green-500 to-green-700 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{currentContent.hero.title}</h2>
          <p className="text-lg mb-6 text-green-100">{currentContent.hero.description}</p>
          <Button size="lg" variant="secondary">{currentContent.hero.cta}</Button>
        </CardContent>
      </Card>

      {/* Programs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-green-800">Training Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.programs.map((program, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-green-800">{program.title}</CardTitle>
                  <Badge variant={program.status === 'Open' ? 'default' : 'secondary'}>
                    {program.status}
                  </Badge>
                </div>
                <p className="text-gray-600">{program.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Duration: {program.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Participants: {program.participants}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {program.location}
                  </div>
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-2">Benefits:</p>
                    <div className="flex flex-wrap gap-1">
                      {program.benefits.map((benefit, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4" disabled={program.status !== 'Open'}>
                  {program.status === 'Open' ? 'Apply Now' : 'Coming Soon'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-800">Upcoming Volunteer Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentContent.opportunities.map((opportunity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{opportunity.title}</h4>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {opportunity.date}
                    <MapPin className="h-3 w-3 ml-3 mr-1" />
                    {opportunity.location}
                  </div>
                </div>
                <Button size="sm">Join</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YouthPage;