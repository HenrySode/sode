'use client';

import { ReactTyped } from 'react-typed';

import { Button } from '@/components/ui/button';

import BackgroundPattern from './BackgroundPattern';
import Reveal from './reveal';

export default function Hero() {
    return (
        <section className='relative overflow-hidden min-h-screen flex items-center'>
            <BackgroundPattern />
            <div className='mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6'>
                <Reveal>
                    <h1 className='text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl'>
                        Embrace the winds of technology
                        <span className='block bg-gradient-to-r from-brand-400 to-slate-300 bg-clip-text text-transparent'>
                            and watch your business bloom.
                        </span>
                    </h1>
                </Reveal>

                {/* 🌍 Animated Text */}
                <Reveal delay={0.05}>
                    <div className='mt-6 text-xl handwriting text-brand-400'>
                        <ReactTyped
                            strings={[
                                'Habari rafiki 👋',
                                'How are you friend?',
                                'Comment ça va mon ami ? 🇫🇷',
                                'Πώς είσαι φίλε μου; 🇬🇷',
                                '¿Cómo estás amigo? 🇪🇸',
                                '你好朋友 👋',
                            ]}
                            typeSpeed={80}
                            backSpeed={20}
                            loop
                        />
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className='mt-5 max-w-2xl text-balance text-slate-300/90'>
                        We are SODE who builds modern software, manages your
                        brand online, and keeps your infrastructure fast and
                        secure—so you can focus on growth.
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className='mt-8 flex gap-3'>
                        <Button
                            asChild
                            size='lg'
                            className='rounded-xl shadow-glow'
                        >
                            <a href='mailto:info@sodebd.com?subject=Book%20a%20Service'>
                                Book a Service
                            </a>
                        </Button>
                        <a
                            href='#services'
                            className='rounded-xl px-5 py-3 text-slate-400 hover:text-white'
                        >
                            Explore More
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
