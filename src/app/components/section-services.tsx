import { Code2, Lightbulb, ServerCog, Share2 } from 'lucide-react';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

import Reveal from './reveal';

const services = [
    {
        icon: Code2,
        title: 'Software Development',
        desc: 'Web and mobile apps with scalable architecture and sleek UI.',
    },
    {
        icon: Share2,
        title: 'Social Media & Branding',
        desc: 'Content, strategy, and campaigns that build loyal communities.',
    },
    {
        icon: ServerCog,
        title: 'Hosting, Domain & Business Email',
        desc: 'Secure hosting, domains, and business email setup & support.',
    },
    {
        icon: Lightbulb,
        title: 'Technology Consultancy',
        desc: 'Roadmaps, audits, AI, and tech choices that save time and money.',
    },
];

export default function SectionServices() {
    return (
        <section id='services' className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
            <Reveal>
                <h2 className='text-2xl font-semibold tracking-tight'>
                    Our Services
                </h2>
            </Reveal>

            <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
                {services.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.05} className='h-full'>
                        <CardContainer className='inter-var h-full w-full' containerClassName='h-full py-0'>
                            <CardBody className='group/card relative size-auto h-full w-full rounded-2xl border border-white/10 bg-surface-800/60 p-6 transition-all hover:shadow-glow'>
                                <CardItem translateZ='50' className='w-full'>
                                    <s.icon className='size-7 text-brand-400' />
                                </CardItem>
                                <CardItem
                                    as='h3'
                                    translateZ='60'
                                    className='mt-4 text-lg font-medium text-white'
                                >
                                    {s.title}
                                </CardItem>
                                <CardItem
                                    as='p'
                                    translateZ='50'
                                    className='mt-2 text-sm text-slate-300/90'
                                >
                                    {s.desc}
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
