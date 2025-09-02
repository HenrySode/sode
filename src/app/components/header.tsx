'use client';

import { Instagram, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

export default function Header() {
    return (
        <header className='sticky top-0 z-50 border-b border-white/5 bg-surface-900/70 backdrop-blur'>
            <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6'>
                {/* Left: Logo */}
                <Link href='/' className='flex items-center gap-2'>
                    <Image
                        src='/logo.png'
                        alt='SODE Logo'
                        width={30}
                        height={30}
                        className='rounded-lg'
                        priority
                    />
                    <span className='text-lg font-bold tracking-wide text-slate-200'>
                        SODE
                    </span>
                </Link>

                {/* Right: actions */}
                <div className='flex items-center gap-2 sm:gap-3'>
                    <a
                        href='tel:+255744524239'
                        className={cn(
                            'inline-flex items-center gap-2 rounded-xl px-2 py-1 text-xs text-slate-300 hover:text-white',
                            'transition-colors',
                        )}
                        aria-label='Call us'
                    >
                        <Phone className='size-4' />
                        <span className='hidden sm:inline'>
                            +255 744 524 239
                        </span>
                    </a>

                    <Link
                        href='https://www.instagram.com/sode_bd/profilecard/?igsh=MWpuYmpka2p3M3I1bA=='
                        target='_blank'
                        className='rounded-xl p-2 text-slate-300 transition hover:text-white'
                        aria-label='Instagram'
                    >
                        <Instagram className='size-5' />
                    </Link>

                    <Button asChild className='rounded-xl shadow-glow'>
                        <a
                            href='mailto:info@sodebd.com?subject=Book%20a%20Service'
                            aria-label='Book a Service'
                        >
                            <Mail className='mr-2 size-4' />
                            Book Service
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
