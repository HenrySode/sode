import { Rocket, ShieldCheck, Sparkles } from 'lucide-react';

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
    return (
        <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
            <Reveal>
                <h2 className='text-2xl font-semibold tracking-tight'>
                    Why Choose Us
                </h2>
            </Reveal>

            <div className='mt-6 grid gap-6 md:grid-cols-3'>
                {reasons.map((r, i) => (
                    <Reveal key={r.title} delay={i * 0.05}>
                        <div className='rounded-2xl border border-white/10 bg-surface-800/60 p-6 transition-transform hover:-translate-y-1 hover:shadow-glow'>
                            <r.icon className='size-7 text-brand-400' />
                            <h3 className='mt-3 text-lg font-medium'>
                                {r.title}
                            </h3>
                            <p className='mt-2 text-sm text-slate-300/90'>
                                {r.desc}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
