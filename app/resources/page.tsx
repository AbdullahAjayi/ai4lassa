import Image from 'next/image'

import Section from '@/components/Section'

const page = () => {
    return (
        <Section className='pt-16 min-h-screen flex justify-center items-center'>
            <div>
                <h1 className='h1 text-center'>Resources</h1>
                <Image
                    src="/assets/svg/coming-soon.svg"
                    alt="Coming Soon"
                    width={300}
                    height={0}
                    priority
                    className="rounded-lg mx-auto w-[600px] h-auto"
                />
                <p className="text-lg text-center mt-6">Nothing here yet, check again later!</p>

            </div>
        </Section>
    )
}

export default page