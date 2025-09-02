import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import Reveal from './reveal';

export default function SectionVisionMission() {
    return (
        <section className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
            <Reveal>
                <h2 className='text-2xl font-semibold tracking-tight'>
                    Vision & Mission
                </h2>
            </Reveal>

            <div className='mt-6 grid gap-6 md:grid-cols-2'>
                <Reveal>
                    <Card className='group rounded-2xl border-white/10 bg-surface-800/60 transition-transform hover:-translate-y-1 hover:shadow-glow'>
                        <CardContent className='p-6'>
                            <Badge className='mb-4 rounded-full'>Vision</Badge>
                            <p className='text-slate-300/90'>
                                To be the trusted digital partner that empowers
                                businesses to bloom through innovative
                                technology and human-centered design.
                            </p>
                        </CardContent>
                    </Card>
                </Reveal>

                <Reveal delay={0.05}>
                    <Card className='group rounded-2xl border-white/10 bg-surface-800/60 transition-transform hover:-translate-y-1 hover:shadow-glow'>
                        <CardContent className='p-6'>
                            <Badge className='mb-4 rounded-full'>Mission</Badge>
                            <p className='text-slate-300/90'>
                                Deliver robust software, elevate brands, and
                                maintain reliable infrastructure—on time and
                                with excellence.
                            </p>
                        </CardContent>
                    </Card>
                </Reveal>
            </div>
        </section>
    );
}
