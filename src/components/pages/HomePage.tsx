import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Users, Target, Globe } from 'lucide-react';

interface HomePageProps {
  language: string;
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'Borno State Agency for the Great Green Wall',
        subtitle: 'Building a Sustainable Future Through Environmental Restoration',
        description: 'Leading the fight against desertification and climate change in Borno State through innovative green initiatives, community engagement, and sustainable development.',
        cta: 'Explore Our Mission'
      },
      stats: [
        { icon: Leaf, value: '50,000+', label: 'Trees Planted' },
        { icon: Users, value: '25+', label: 'Communities Engaged' },
        { icon: Target, value: '15', label: 'Active Projects' },
        { icon: Globe, value: '1,200km²', label: 'Area Restored' }
      ],
      features: [
        {
          title: 'Environmental Restoration',
          description: 'Combating desertification through strategic tree planting and land rehabilitation programs.'
        },
        {
          title: 'Community Engagement',
          description: 'Empowering local communities with knowledge and resources for sustainable practices.'
        },
        {
          title: 'Youth Mobilization',
          description: 'Engaging young people in environmental conservation and green job opportunities.'
        }
      ]
    },
    ha: {
      hero: {
        title: 'Hukumar Jihar Borno ta Great Green Wall',
        subtitle: 'Gina Makoma Mai Dorewa Ta Hanyar Maido da Muhalli',
        description: 'Jagorantar yaki da hamada da sauyin yanayi a Jihar Borno ta hanyar sabbin ayyukan kore, hada kai da al\'umma, da ci gaban dorewa.',
        cta: 'Bincika Manufarmu'
      },
      stats: [
        { icon: Leaf, value: '50,000+', label: 'Bishiyoyi da aka dasa' },
        { icon: Users, value: '25+', label: 'Al\'ummomi da aka hada' },
        { icon: Target, value: '15', label: 'Ayyukan da ke gudana' },
        { icon: Globe, value: '1,200km²', label: 'Yankin da aka maido' }
      ],
      features: [
        {
          title: 'Maido da Muhalli',
          description: 'Yaki da hamada ta hanyar dasa bishiyoyi da shirye-shiryen gyaran kasa.'
        },
        {
          title: 'Hada kai da Al\'umma',
          description: 'Karfafa al\'ummomi da ilimi da kayayyaki don ayyukan dorewa.'
        },
        {
          title: 'Tara Matasa',
          description: 'Hada matasa cikin kiyaye muhalli da damar ayyukan kore.'
        }
      ]
    },
    kr: {
      hero: {
        title: 'Borno Lawan Great Green Wall-ye Agency',
        subtitle: 'Kəmtəgəl Dərbəl Fəye Kəlkəl Restoration-ye',
        description: 'Borno Lawan-ye desertification ro climate change-ye ngərgəl leadership, innovative green initiatives, community engagement, ro sustainable development fəye.',
        cta: 'Andəl Mission Explore'
      },
      stats: [
        { icon: Leaf, value: '50,000+', label: 'Kəlkəl Planted' },
        { icon: Users, value: '25+', label: 'Communities Engaged' },
        { icon: Target, value: '15', label: 'Active Projects' },
        { icon: Globe, value: '1,200km²', label: 'Area Restored' }
      ],
      features: [
        {
          title: 'Kəlkəl Restoration',
          description: 'Desertification combat strategic tree planting ro land rehabilitation programs fəye.'
        },
        {
          title: 'Community Engagement',
          description: 'Local communities empowerment knowledge ro resources sustainable practices fəye.'
        },
        {
          title: 'Youth Mobilization',
          description: 'Young people engagement environmental conservation ro green job opportunities fəye.'
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 md:p-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {currentContent.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-green-100">
            {currentContent.hero.subtitle}
          </h2>
          <p className="text-lg mb-8 text-green-50">
            {currentContent.hero.description}
          </p>
          <Button size="lg" variant="secondary">
            {currentContent.hero.cta}
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentContent.stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <Icon className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold text-green-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {currentContent.features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-green-800">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;