"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import Section from "@/components/Section";
import { useStore } from "@/hooks/useStore";
import { TeamMemberData, teamMembers } from "@/data/data";


const page = () => {
    const { memberDetailsOpen, setDetailsPanelOpen } = useStore()
    const [memberDetails, setMemberDetails] = useState<TeamMemberData | null>()

    const handleTeamMeberDetailsComp = (details: TeamMemberData) => {
        setMemberDetails({ ...details })
        setDetailsPanelOpen()
    }

    useEffect(() => {
        if (memberDetailsOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [memberDetailsOpen])

    return (
        <Section className="min-h-screen py-16 pt-24">
            {/* Header Section */}
            <div className="mx-auto text-center mb-16">
                <h1 className="h1 text-4xl">Our Team</h1>
                <p className="text-xl">
                    Meet the passionate individuals working on this project
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="mx-auto bg-white rounded-lg shadow-md p-6 max-w-[400px]">
                        <div className="w-32 h-32 mx-auto mb-4 cursor-pointer rounded-full"
                            onClick={() => handleTeamMeberDetailsComp(member)}
                        >
                            <Image
                                priority
                                width={100}
                                height={0}
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                        <p className="text-gray-600 text-center mb-2">{member.role}</p>
                        <p className="text-gray-500 text-center text-sm">{member.bio}</p>
                    </div>
                ))}
            </div>

            {/* Team member details component */}
            {memberDetailsOpen && memberDetails && (<MemberDetails memberDetails={memberDetails} />)}
        </Section>
    );
};

const MemberDetails = ({ memberDetails }: { memberDetails: TeamMemberData }) => {
    const { memberDetailsOpen, setDetailsPanelClosed } = useStore()
    return (
        <div
            onClick={() => setDetailsPanelClosed()}
            className="fixed inset-0 h-screen w-screen z-[1000000] backdrop-blur-lg flex justify-center items-center">
            <div
                onClick={(e) => e.stopPropagation()}
                className="member-detail-card relative max-w-[600px] bg-appBg mx-3 p-12 max-md:px-6 rounded-lg overflow-y-auto max-sm:h-[calc(100vh-6rem)] h-[calc(100vh-2rem)] border-2 border-outline/50">
                {/* cancel btn */}
                <div onClick={() => setDetailsPanelClosed()} className="absolute right-6 top-6">
                    <div className={`hamburger-menu z-10 ${memberDetailsOpen ? 'active' : ''}`}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </div>
                    <style jsx>
                        {`
                            .hamburger-menu {
                                cursor: pointer;
                                display: inline-block;
                                position: relative;
                                width: 24px;
                                height: 24px;
                            }
                            .hamburger-line {
                                background-color: #3C6939;
                                display: block;
                                height: 2px;
                                margin-bottom: 5px;
                                transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                                width: 100%;
                            }
                            .hamburger-line:nth-child(2) {
                                margin-bottom: 5px;
                            }
                            .active .hamburger-line:nth-child(1) {
                                transform: rotate(45deg) translate(5px, 5px);
                            }
                            .active .hamburger-line:nth-child(2) {
                                opacity: 0;
                            }
                            .active .hamburger-line:nth-child(3) {
                                transform: rotate(-45deg) translate(5px, -5px);
                            }
                        `}
                    </style>
                </div>
                {/* User image */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full">
                    <Image
                        width={100}
                        height={0}
                        src={memberDetails.image}
                        alt={memberDetails.name}
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-semibold text-center">{memberDetails.name}</h3>
                <p className="text-gray-600 text-center mb-2">{memberDetails.role}</p>
                <p className="text-gray-500 text-center text-sm mb-6">{memberDetails.bio}</p>
                <p className="text-gray-600 text-sm sm:mx-2 md:mx-4">{memberDetails.about}</p>
            </div>
        </div>
    )
}

export default page;


