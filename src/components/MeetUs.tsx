import * as React from "react";
import { Users, MapPin, Calendar, Award } from "lucide-react";

const defaultTeamMembers = [
  {
    name: "Matt Boney",
    role: "CEO",
    image: "/6_Photo%20-%203%20(2).jpg",
    bio: "2X Founder, $3.5M in Daypass Sales, 12 years in hospitality."
  },
  {
    name: "Misha Krymov",
    role: "Product",
    image: "/6_Photo%20-%204%20(1).jpg",
    bio: "3x Founder, Award–winning architect, founder of a micro-hotel brand."
  }
];

const defaultStats = [
  {
    icon: <Users className="h-6 w-6" />,
    value: "50+",
    label: "Team Members"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    value: "12",
    label: "Global Offices"
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    value: "8",
    label: "Years Experience"
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "100+",
    label: "Projects Delivered"
  }
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface MeetUsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  teamMembers?: TeamMember[];
  stats?: Array<{
    icon: React.ReactNode;
    value: string;
    label: string;
  }>;
  ctaText?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

export const MeetUs = ({
  title = "Meet Our Team",
  subtitle = "The people behind our success",
  description = "We're a diverse team of passionate individuals dedicated to creating exceptional experiences and driving innovation in everything we do.",
  teamMembers = defaultTeamMembers,
  stats = defaultStats,
  ctaText = "Ready to work with us?",
  ctaButtonText = "Get in Touch",
  onCtaClick = () => console.log("CTA clicked")
}: MeetUsProps = {}) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div key={index} className="group">
              <div className="relative flex justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-64 h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-dark mb-1 font-heading uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-sky-500 font-medium mb-2 font-heading uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-lg text-gray-600 font-body mb-10">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Headquarters Section */}
        <div className="text-center bg-blue-dark rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading uppercase tracking-wide">
            Our Headquarters
          </h2>
          <p className="text-white/80 mb-6 font-body">
            Come and meet us at our office
          </p>
          <div className="text-lg text-white font-body">
            📍 123 Innovation Street, Tech District<br />
            San Francisco, CA 94105
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetUs; 