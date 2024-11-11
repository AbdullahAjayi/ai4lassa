import Section from "@/components/Section";
import Image from "next/image";

const page = () => {
    const teamMembers = [
        {
            name: "UMARU, Emmanuel Tanko",
            role: "Founder & CEO",
            image: "/assets/images/profiles/Picture1.png",
            bio: "Associate Professor | Researcher | Deputy Director @ WASCAL.",
            details: ""
        },
        {
            name: "CHINGLE, MOSES PETER",
            role: "Founder & CEO",
            image: "/assets/images/profiles/Picture2.png",
            bio: "Professor of Epidemiology and Primary Health Care, University of Jos"
        },
        {
            name: "James Garba Ambafi (PhD)",
            role: "Founder & CEO",
            image: "/assets/images/profiles/Picture3.png",
            bio: "Senior Lecturer in the Department of Electrical & Electronics Engineering at the Federal University of Technology, Minna."
        },
        {
            name: "Dr. Rakiya Gambo Musa",
            role: "Founder & CEO",
            image: "/assets/images/profiles/Picture4.png",
            bio: "Senior Medical Officer at the University Clinic of the Federal University of Technology, Minna."
        },
        {
            name: "GBENGA MORENIKEJI",
            role: "Founder & CEO",
            image: "/assets/images/profiles/Picture5.png",
            bio: "Academic staff member in the Department of Estate Management at the Federal University of Technology, Minna."
        },
        {
            name: "Adeleye Bamiji Michael (PhD)",
            role: "Founder & CEO",
            image: "/assets/images/profiles/Picture6.png",
            bio: "Lecturer in the Department of Urban and Regional Planning at the Federal University of Technology Minna."
        },
        {
            name: "Henry Ohiani Ohize (PhD)",
            role: "Founder & CEO",
            image: "/assets/images/profiles/Picture7.png",
            bio: "Associate Professor of Electrical and Electronics Engineering at the Federal University of Technology Minna."
        },
        {
            name: "Chibueze Valentine Ikpo (PhD)",
            role: "Founder & CEO",
            image: "/assets/images/profiles/Picture8.png",
            bio: "Lecturer in Software Engineering at Veritas University, Nigeria."
        },
        {
            name: "John Doe",
            role: "Founder & CEO",
            image: "/assets/images/placeholder/profile-pic-avatar.avif",
            bio: "15+ years of experience in software development"
        },
    ];

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
                        <div className="w-32 h-32 mx-auto mb-4">
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
        </Section>
    );
};

export default page;