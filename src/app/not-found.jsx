// app/not-found/page.jsx
'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import Reveal from './components/reveal';
import BackgroundPattern from './components/BackgroundPattern';

export default function NotFound() {
    return (
        <section className='relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6'>
            <BackgroundPattern />

            <Reveal>
                <h1 className='text-5xl font-bold sm:text-6xl md:text-7xl text-white'>
                    404
                    <span className='block bg-gradient-to-r from-brand-400 to-slate-300 bg-clip-text text-transparent'>
                        Page Not Found
                    </span>
                </h1>
            </Reveal>

            <Reveal delay={0.05}>
                <p className='mt-6 text-xl handwriting text-brand-400'>
                    Oops! It seems you're lost 👀
                </p>
            </Reveal>

            <Reveal delay={0.2}>
                <Button
                    asChild
                    size='lg'
                    className='rounded-xl shadow-glow mt-8'
                >
                    <Link href='/'>Go Home</Link>
                </Button>
            </Reveal>
        </section>
    );
}
