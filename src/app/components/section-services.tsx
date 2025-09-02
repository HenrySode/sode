import { Code2, Lightbulb, ServerCog, Share2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

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
                    <Reveal key={s.title} delay={i * 0.05}>
                        <Card className='group h-full rounded-2xl border-white/10 bg-surface-800/60 transition-transform hover:-translate-y-1 hover:shadow-glow'>
                            <CardContent className='p-6'>
                                <s.icon className='size-7 text-brand-400' />
                                <h3 className='mt-4 text-lg font-medium'>
                                    {s.title}
                                </h3>
                                <p className='mt-2 text-sm text-slate-300/90'>
                                    {s.desc}
                                </p>
                            </CardContent>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
