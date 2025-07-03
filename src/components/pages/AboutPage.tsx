import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, MapPin, Eye, Lightbulb, Users as UsersIcon, Leaf } from 'lucide-react';

interface AboutPageProps {
  language: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const content = {
    en: {
      title: 'About BSAGGW',
      subtitle: 'Leading Environmental Restoration in Borno State',
      mission: {
        title: 'Our Mission',
        text: 'To combat desertification, restore degraded lands, and build climate resilience in Borno State through innovative environmental solutions, community engagement, and sustainable development practices.'
      },
      vision: {
        title: 'Our Vision',
        text: 'A green, resilient Borno State where communities thrive in harmony with nature, contributing to the Great Green Wall initiative across the Sahel region.'
      },
      values: [
        { title: 'Transparency', description: 'Open and accountable operations' },
        { title: 'Innovation', description: 'Cutting-edge environmental solutions' },
        { title: 'Community', description: 'Inclusive and participatory approach' },
        { title: 'Sustainability', description: 'Long-term environmental stewardship' }
      ],
      team: [
        { name: 'Dr. Amina Hassan', role: 'Executive Director', expertise: 'Environmental Science' },
        { name: 'Eng. Ibrahim Musa', role: 'Technical Director', expertise: 'Land Restoration' },
        { name: 'Ms. Fatima Ali', role: 'Community Engagement Lead', expertise: 'Social Development' }
      ]
    },
    ha: {
      title: 'Game da BSAGGW',
      subtitle: 'Jagorantar Maido da Muhalli a Jihar Borno',
      mission: {
        title: 'Manufarmu',
        text: 'Yaki da hamada, maido da kasa da ta lalace, da gina karfin jure wa sauyin yanayi a Jihar Borno ta hanyar sabbin hanyoyin muhalli, hada kai da al\'umma, da ayyukan ci gaban dorewa.'
      },
      vision: {
        title: 'Hangen Nesanmu',
        text: 'Jihar Borno mai kore da karfi inda al\'ummomi ke bunkasar rayuwa cikin jituwa da yanayi, suna ba da gudummawa ga shirin Great Green Wall a yankin Sahel.'
      },
      values: [
        { title: 'Gaskiya', description: 'Ayyuka masu budewa da alhakin' },
        { title: 'Kirkire-kirkire', description: 'Sabbin hanyoyin muhalli' },
        { title: 'Al\'umma', description: 'Hanyar hada kai da kowa' },
        { title: 'Dorewa', description: 'Kula da muhalli na dogon lokaci' }
      ],
      team: [
        { name: 'Dr. Amina Hassan', role: 'Babban Darakta', expertise: 'Kimiyyar Muhalli' },
        { name: 'Eng. Ibrahim Musa', role: 'Daraktan Fasaha', expertise: 'Maido da Kasa' },
        { name: 'Ms. Fatima Ali', role: 'Jagoran Hada kai da Al\'umma', expertise: 'Ci gaban Zamantakewa' }
      ]
    },
    kr: {
      title: 'BSAGGW Game',
      subtitle: 'Borno Lawan Environmental Restoration Leadership',
      mission: {
        title: 'Andəl Mission',
        text: 'Desertification combat, degraded lands restore, ro Borno Lawan climate resilience build innovative environmental solutions, community engagement, ro sustainable development practices fəye.'
      },
      vision: {
        title: 'Andəl Vision',
        text: 'Green, resilient Borno Lawan communities nature harmony thrive, Great Green Wall initiative Sahel region contribution fəye.'
      },
      values: [
        { title: 'Transparency', description: 'Open ro accountable operations' },
        { title: 'Innovation', description: 'Cutting-edge environmental solutions' },
        { title: 'Community', description: 'Inclusive ro participatory approach' },
        { title: 'Sustainability', description: 'Long-term environmental stewardship' }
      ],
      team: [
        { name: 'Dr. Amina Hassan', role: 'Executive Director', expertise: 'Environmental Science' },
        { name: 'Eng. Ibrahim Musa', role: 'Technical Director', expertise: 'Land Restoration' },
        { name: 'Ms. Fatima Ali', role: 'Community Engagement Lead', expertise: 'Social Development' }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content] || content.en;

  return (
    <div className="space-y-8">
      {/* Leadership Block */}
      <Card className="mb-8">
        <CardHeader className="flex flex-col items-center">
          <img
            src="/amb-usman-aliyu.jpg"
            alt="Amb. Usman Aliyu"
            className="w-48 h-48 object-cover border-4 border-green-200 shadow mb-4 p-0 m-0"
          />
          <CardTitle className="text-green-800 text-2xl text-center">Amb. Usman Aliyu</CardTitle>
          <p className="text-green-700 text-center font-medium">Director-General, Borno State Agency for the Great Green Wall (BSAGGW)</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Appointed by Governor Babagana Zulum, Amb. Usman Aliyu leads the Borno State Agency for the Great Green Wall (BSAGGW) with a wealth of experience in environmental management and humanitarian work.<br /><br />
            Amb. Aliyu is a leader in grassroots environmental action. He has spearheaded a community-driven initiative that has already planted 1.5 million trees, with the ambitious goal of planting five million. His work also includes rehabilitating over 700 hand pumps, providing critical water access to numerous communities. His vision for the BSAGGW is to empower local and youth-led initiatives to build a greener, more resilient Borno.<br /><br />
            Holding a Master's degree in Environmental Management from the University of Maiduguri, Amb. Aliyu's career has spanned both the public and private sectors. His hands-on approach and dedication have been recognized with numerous awards, including a Certificate of Excellence from the African Clean Up Initiative. As Director-General, he is committed to driving sustainable change and combating desertification across the state.
          </p>
        </CardContent>
      </Card>

      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          {currentContent.title}
        </h1>
        <p className="text-xl text-gray-600">{currentContent.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Target className="h-5 w-5 mr-2" />
              {currentContent.mission.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{currentContent.mission.text}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Award className="h-5 w-5 mr-2" />
              {currentContent.vision.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{currentContent.vision.text}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-green-800">Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Transparency */}
            <div className="text-center">
              <Eye className="w-12 h-12 mx-auto mb-2 text-green-600" />
              <Badge variant="secondary" className="mb-2">Transparency</Badge>
              <p className="text-sm text-gray-600">Open and accountable operations</p>
            </div>
            {/* Innovation */}
            <div className="text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-2 text-green-600" />
              <Badge variant="secondary" className="mb-2">Innovation</Badge>
              <p className="text-sm text-gray-600">Cutting-edge environmental solutions</p>
            </div>
            {/* Community */}
            <div className="text-center">
              <UsersIcon className="w-12 h-12 mx-auto mb-2 text-green-600" />
              <Badge variant="secondary" className="mb-2">Community</Badge>
              <p className="text-sm text-gray-600">Inclusive and participatory approach</p>
            </div>
            {/* Sustainability */}
            <div className="text-center">
              <Leaf className="w-12 h-12 mx-auto mb-2 text-green-600" />
              <Badge variant="secondary" className="mb-2">Sustainability</Badge>
              <p className="text-sm text-gray-600">Long-term environmental stewardship</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;