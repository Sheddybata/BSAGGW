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
      <Card className="max-w-3xl mx-auto mb-8">
        <CardHeader className="flex flex-col items-center">
          <img
            src="/amb-usman-aliyu.jpg"
            alt="Amb. Usman Aliyu"
            className="w-48 h-48 object-contain border-4 border-green-200 shadow mb-4"
          />
          <CardTitle className="text-green-800 text-2xl text-center">Amb. Usman Aliyu</CardTitle>
          <p className="text-green-700 text-center font-medium">Director-General, Borno State Agency for the Great Green Wall (BSAGGW)</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-base leading-relaxed text-justify">
            Amb. Usman Aliyu, a seasoned environmentalist and dedicated humanitarian, currently serves as the Director-General of the Borno State Agency for the Great Green Wall (BSAGGW). Appointed in July 2024 by His Excellency, Governor Babagana Zulum, Amb. Aliyu brings a wealth of experience and a passion for grassroots action to the forefront of Borno State's climate change and desertification control efforts.
            <br /><br />
            His leadership is characterized by a hands-on approach and a deep-seated commitment to community empowerment. This is evident in his prior work with the non-governmental organization, "Dark Green Leaves," which has embarked on an ambitious campaign to plant five million trees across Borno State. Under his guidance, the organization has already achieved the remarkable milestone of planting 1.5 million trees, a significant contribution to the region's ecological restoration.
            <br /><br />
            Amb. Aliyu's vision for the BSAGGW is one of collaborative and impactful environmental governance. He has publicly expressed his agency's commitment to supporting youth-led environmental initiatives, recognizing the vital role of the younger generation in building a sustainable future for Borno State. His approach emphasizes practical, on-the-ground projects that directly benefit local communities and enhance their resilience to environmental challenges.
            <br /><br />
            A true trailblazer in the humanitarian and environmental sectors, Amb. Aliyu's work extends beyond tree planting. He has been a pivotal figure in the "Borno GoGreen Initiatives" and has overseen the rehabilitation of over 700 hand pumps, addressing critical water scarcity issues in various communities. His role as the Director of Reconstruction, Rehabilitation, and Resettlement (RRR) for the Network of Civil Society Organisations of Nigeria, Borno State Chapter, further underscores his holistic approach to community development and post-conflict recovery.
            <br /><br />
            Amb. Aliyu's distinguished career is built on a solid academic foundation. He holds a Bachelor of Science (B.Sc.) in Geology and a Master of Science (M.Sc.) in Environmental Management, both from the University of Maiduguri. He is currently a doctoral candidate in Environmental Management at the same institution, a testament to his continuous pursuit of knowledge and expertise in his field.
            <br /><br />
            His professional journey includes impactful roles in both the public and private sectors, such as with the Borno State Green Hub Africa, the Kano State Ministry of Environment, and the defunct Federal Ministry of Mineral Resources and Geological Survey in Kano. This diverse experience has equipped him with a comprehensive understanding of the environmental and developmental challenges facing northern Nigeria.
            <br /><br />
            In recognition of his outstanding contributions, Amb. Aliyu has received approximately 20 professional memberships and merit awards, including a prestigious Certificate of Excellence from the African Clean Up Initiative. These accolades are a testament to his unwavering dedication and the tangible impact of his work on the lives of people and the health of the environment in Borno State and beyond. As the Director-General of the BSAGGW, Amb. Usman Aliyu is poised to lead a new era of proactive and community-centric environmental stewardship in Borno State.
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