import { CheckCircle2 } from 'lucide-react';

import Reveal from './reveal';

const values = [
    'Integrity in every deliverable',
    'Customer-first problem solving',
    'Continuous learning and innovation',
    'Clear communication and accountability',
];

export default function SectionValues() {
    return (
        <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
            <Reveal>
                <h2 className='text-2xl font-semibold tracking-tight'>
                    Core Values
                </h2>
            </Reveal>

            <div className='mt-4 grid gap-3 md:grid-cols-2'>
                {values.map((v, i) => (
                    <Reveal key={v} delay={i * 0.05}>
                        <div className='flex items-start gap-3 rounded-xl border border-white/10 bg-surface-800/60 p-4'>
                            <CheckCircle2 className='mt-0.5 size-5 text-brand-400' />
                            <p className='text-slate-300/90'>{v}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
