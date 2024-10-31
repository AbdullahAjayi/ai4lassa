import Image from "next/image"

import Section from "@/components/Section"
import Button from "@/components/Button"

const page = () => {
    return (
        <Section className="pt-32 lg:pt-20 pb-20">
            {/* Content nav panel */}
            <div className="page-nav-panel fixed top-0 max-lg:left-0 lg:right-0 max-lg:py-4 max-lg:w-screen px-6 lg:h-screen lg:w-1/4 lg:pt-20 bg-appBg z-50">
                <div className="hidden lg:block text-sm font-bold mb-6">On this page</div>
                <nav className="lg:border-l lg:pl-3 lg:py-2">
                    <ul className="flex lg:flex-col flex-nowrap whitespace-nowrap gap-4 text-xs font-medium max-lg:overflow-x-scroll max-lg:pb-1">
                        <li className="font-semibold"><a href="#about-ai4lassa">About AI4LASSA</a></li>
                        <li><a href="#our-vision">Our Vision</a></li>
                        <li><a href="#objectives">Objectives</a></li>
                        <li><a href="#research-framework">Research Framework</a></li>
                        <li><a href="#research-outputs-and-outcomes">Research Outputs and Outcomes</a></li>
                        <li><a href="#make-a-difference">Join us in making a difference</a></li>
                    </ul>
                </nav>
            </div>
            {/* Page content */}
            <div id="about-page" className="lg:w-3/4 pr-6">
                <h2 id="about-ai4lassa" className="h2 relative">
                    <span>About AI4Lassa</span>
                    {/* rat image */}
                    <div className="absolute top-0 -left-4 -translate-y-2/3">
                        <Image src='/assets/images/rat.png' alt="rat-image" width={134} height={134} className="" />
                    </div>
                </h2>
                {/* dot patterns bg */}
                <div className="absolute -z-10 inset-0 top-36 overflow-hidden">
                    <Image src='/assets/images/dot-patterns.png' alt="dot-patterns" width={1832} height={838} />
                </div>
                {/* about detail */}
                <p className="">The Development of an AI solution User Application to Raise Early Alarm to Improve Urban Health awareness, preparedness and Quick Response to Lassa Fever Outbreaks Project (AI4Lassa) is a project funded by the Tertiary Education Trust Fund (TETFUND) under the National Research Fund (NRF) in 2024.</p>
                <p className="mt-6"><strong>AI4Lassa</strong> is a pioneering initiative developed to address the persistent challenge of Lassa fever outbreaks in Nigeria through the power of artificial intelligence (AI). Our solution focuses on enhancing early detection capabilities, enabling rapid response, and fostering community health awareness. With a targeted approach, AI4Lassa seeks to revolutionize Nigeria’s healthcare infrastructure by empowering public health stakeholders and communities to respond more effectively to health crises. This project stands as a significant public health milestone and invites collaboration and support to ensure sustainable and successful implementation.</p>

                <h3 id='our-vision' className="h3 mt-12">Our Vision</h3>
                <p>AI4Lassa envisions a future where Lassa fever and similar outbreaks can be detected and controlled promptly, reducing their socio-economic impact and contributing to a healthier and safer Nigeria and West Africa.</p>

                <h3 id="objectives" className="h3 mt-12">Objectives</h3>
                <p className="mb-6">The AI4Lassa initiative is anchored in the following objectives:</p>
                <ol className="ol">
                    <li><strong>Early Detection</strong>: Develop an AI-driven application capable of identifying early signs of Lassa fever outbreaks by analyzing real-time data and accurately localizing affected areas.</li>
                    <li><strong>Stakeholder Alerts</strong>: Implement an automated alert system to notify public health authorities, providing detailed and timely information for swift intervention.</li>
                    <li><strong>Outbreak Monitoring and Recommendations</strong>: Continuously monitor outbreak progression and advise on control measures, including isolation and treatment protocols.</li>
                    <li><strong>Public Awareness</strong>: Offer guidance to the public on preventive measures, emphasizing personal hygiene and food safety.</li>
                    <li><strong>Resource Allocation</strong>: Facilitate the efficient distribution of medical supplies and personnel to affected regions, ensuring swift and organized response.</li>
                </ol>

                <h3 id="research-framework" className="h3 mt-12">Research Framework</h3>
                <p className="mb-6">Our research is designed to answer key questions in the application of AI for health crisis management:</p>
                <ul className="ul">
                    <li>How can AI identify early warning signs of Lassa fever outbreaks?.</li>
                    <li>What data sources are essential for early detection?</li>
                    <li>Which machine learning and natural language processing techniques are best suited for outbreak prediction?</li>
                    <li>How can AI4Lassa be optimized for usability by stakeholders?</li>
                    <li>What ethical and legal considerations should be prioritized?</li>
                    <li>How can potential limitations of AI4Lassa be effectively mitigated?</li>
                </ul>

                <h3 className="h3 mt-12">Research Outputs and Outcomes</h3>
                <p className="mb-6">AI4Lassa is dedicated to advancing AI-based public health initiatives with the following expected outcomes:</p>
                <ol className="ol">
                    <li>Enhanced collaboration with governmental and research institutions to establish impactful policies.</li>
                    <li>Development of a comprehensive application connecting public sector institutions across Nigeria.</li>
                    <li>Establishment of state-of-the-art AI laboratories at FUTMinna to operate as data hubs.</li>
                    <li>Ensured access to clean, reliable data from verified sources, supporting data integrity and accessibility.</li>
                    <li>A dedicated website enabling seamless data access and inter-university data sharing.</li>
                    <li>Creation of mentoring opportunities within AI disciplines for Nigerian students.</li>
                    <li>Promotion of synergy between government, industry, and academia through collaborative programs.</li>
                    <li>Encouragement of stakeholder engagement and data center ownership.</li>
                    <li>Strengthening Nigeria’s national development through resource sharing and alliance-building.</li>
                </ol>

                <h3 id="research-outputs-and-outcomes" className="h3 mt-12">Project Impact</h3>
                <p className="mb-6">Beyond enhancing response times, AI4Lassa has the potential to reshape several key areas:</p>
                <ul className="ul">
                    <li><strong>Cybersecurity</strong>: Secure and accurate data safeguards the health sector from potential cyber vulnerabilities.</li>
                    <li><strong>Economic Development</strong>: Effective resource allocation ensures cost efficiency, enhancing overall productivity.</li>
                    <li><strong>Health Access and SDG Alignment</strong>: Facilitates equitable health responses, especially in underserved regions, contributing to Sustainable Development Goal 3 (Good Health and Well-Being).</li>
                    <li><strong>Industrial Growth and Job Creation</strong>: A healthy workforce is fundamental to economic stability and growth.</li>
                    <li><strong>Educational Development</strong>: The AI4Lassa framework supports research and education on Lassa fever, providing invaluable resources for academic and community awareness.</li>
                </ul>
                <p className="mt-6">In collaboration with the Nigerian health sector, public institutions, academic entities, and other stakeholders, AI4Lassa is committed to developing reliable, efficient, and responsive systems for epidemic alerts and intervention. Through these efforts, we aim to significantly enhance Nigeria’s public health resilience, enabling a proactive and well-prepared approach to epidemic management.</p>

                <h3 id="make-a-difference" className="h3 mt-12">Join Us in Making a Difference</h3>
                <p>AI4Lassa is poised to set a new standard for epidemic response and public health preparedness in Nigeria and beyond. Together, we can create a safer, healthier future for all.</p>

                <a href="mailto:aidevg_24@futminna.edu.ng" className="mt-6 block">
                    <Button className="font-normal">Contact Us</Button>
                </a>

            </div>
        </Section>
    )
}

export default page