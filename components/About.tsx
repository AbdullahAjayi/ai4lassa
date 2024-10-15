import Section from "./Section"

const About = () => {
    return (
        <Section className="pt-10">
            <h2 className="h2">How Does Our System Help?</h2>
            <div className="grid md:grid-cols-2 gap-y-20 md:gap-y-32 mt-16 md:mt-24">
                <div className="col-start-1">
                    <h3 className="h3">Outbreak Forcasting</h3>
                    <p className="">Our advanced algorithms predict potential LASSA fever outbreaks based on real-time data, allowing communities to prepare</p>
                </div>
                <div className="md:col-start-2 row-start-2">
                    <h3 className="h3">Case Reporting</h3>
                    <p className="">Suspect a case? Easily report it to health officials through our secure platform. Quick action can save lives</p>
                </div>
                <div className="col-start-1 row-start-3">
                    <h3 className="h3">Real-time Alerts</h3>
                    <p className="">Receive immediate alerts on outbreaks in your area to stay safe and informed</p>
                </div>
            </div>
        </Section>
    )
}

export default About