'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const team = [
  {
    name: "Handy Christian",
    role: "CEO & Co-Founder",
    image: "/assets/handy-christian.png"
  },
  {
    name: "Charles Tan",
    role: "CTO & Co-Founder",
    image: "/assets/charles-tan.png"
  }
]

export default function Team() {
  return (
    <section className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Clean Apple Style */}
        <div className="text-center mb-20">
          <h2 className="text-[48px] sm:text-[56px] lg:text-[64px] font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Leadership
          </h2>
          <p className="text-[21px] text-[#86868B] max-w-2xl mx-auto">
            Meet the team helping businesses save 20+ hours weekly through automation.
          </p>
        </div>

        {/* Team Members - Simple & Clean */}
        <div className="flex justify-center gap-16 flex-wrap mb-20">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              {/* Avatar - Clean */}
              <Avatar className="w-48 h-48 mx-auto mb-6 border border-gray-200">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="text-4xl bg-[#F5F5F7] text-black">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              {/* Name */}
              <h3 className="text-[24px] font-semibold text-black mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[17px] text-[#86868B]">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* N8N Partner Card - Clean */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-10 border border-gray-200 text-center">
            <img
              src="/assets/n8n-logo.png"
              alt="N8N Partner"
              className="h-12 mx-auto mb-4"
            />
            <p className="text-[17px] text-[#86868B]">
              Official N8N Partner in Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}