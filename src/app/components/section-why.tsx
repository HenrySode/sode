import { Rocket, ShieldCheck, Sparkles } from 'lucide-react';

import { CardStack } from '@/components/ui/card-stack';
import Reveal from './reveal';

const reasons = [
    {
        icon: Rocket,
        title: 'Speed + Quality',
        desc: 'We ship fast without compromising on stability or UX.',
    },
    {
        icon: ShieldCheck,
        title: 'Reliable & Secure',
        desc: 'Security best practices and modern tooling baked in.',
    },
    {
        icon: Sparkles,
        title: 'Design that Converts',
        desc: 'Crisp, modern interfaces that customers love to use.',
    },
];

export default function SectionWhy() {
    const cards = reasons.map((r, i) => ({
        id: i,
        name: r.title,
        designation: '',
        content: (
            <div className='flex flex-col gap-4'>
                <r.icon className='size-8 text-brand-400' />
                <p>
                    {r.desc}
                </p>
            </div>
        ),
    }));

    return (
        <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
            <Reveal>
                <h2 className='text-2xl font-semibold tracking-tight text-center'>
                    Why Choose Us
                </h2>
            </Reveal>

            <div className='mt-10 flex items-center justify-center'>
                <CardStack items={cards} />
            </div>
        </section>
    );
}
