'use client';

import { Instagram, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import Reveal from './reveal';

export default function SectionContact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

    async function onSubmit(formData: FormData) {
        setLoading(true);
        setStatus('idle');
        try {
            const payload = Object.fromEntries(formData.entries());
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });
            if (res.ok) setStatus('ok');
            else setStatus('error');
        } catch {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id='contact' className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
            <Reveal>
                <h2 className='text-2xl font-semibold tracking-tight'>
                    Contact
                </h2>
            </Reveal>

            <div className='mt-6 grid gap-8 md:grid-cols-5'>
                <div className='rounded-2xl border border-white/10 bg-surface-800/60 p-6 md:col-span-3'>
                    <form action={onSubmit} className='space-y-5'>
                        <div className='grid gap-4 sm:grid-cols-2'>
                            <div>
                                <Label htmlFor='name'>Name</Label>
                                <Input
                                    id='name'
                                    name='name'
                                    required
                                    placeholder='Your name'
                                />
                            </div>
                            <div>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    id='email'
                                    type='email'
                                    name='email'
                                    required
                                    placeholder='you@example.com'
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor='message'>Message</Label>
                            <Textarea
                                id='message'
                                name='message'
                                required
                                rows={5}
                                placeholder='How can we help?'
                            />
                        </div>
                        <div className='flex items-center gap-3'>
                            <Button
                                type='submit'
                                disabled={loading}
                                className='rounded-xl'
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                            <a
                                className='text-sm text-slate-400 underline-offset-4 hover:underline'
                                href='mailto:info@sodebd.com?subject=Contact%20from%20Website'
                            >
                                Prefer email? info@sodebd.com
                            </a>
                        </div>
                        {status === 'ok' && (
                            <p className='text-sm text-emerald-400'>
                                Thanks! We’ll reply soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className='text-sm text-rose-400'>
                                Something went wrong. Try email?
                            </p>
                        )}
                    </form>
                </div>

                <div className='rounded-2xl border border-white/10 bg-surface-800/60 p-6 md:col-span-2'>
                    <ul className='space-y-4 text-sm'>
                        <li className='flex items-center gap-3'>
                            <Phone className='size-4 text-brand-400' />
                            <a
                                href='tel:+255744524239'
                                className='hover:underline'
                            >
                                +255 744 524 239
                            </a>
                        </li>
                        <li className='flex items-center gap-3'>
                            <Mail className='size-4 text-brand-400' />
                            <a
                                href='mailto:info@sodebd.com'
                                className='hover:underline'
                            >
                                info@sodebd.com
                            </a>
                        </li>
                        <li className='flex items-center gap-3'>
                            <Instagram className='size-4 text-brand-400' />
                            <a
                                href='https://www.instagram.com/sode_bd/profilecard/?igsh=MWpuYmpka2p3M3I1bA=='
                                target='_blank'
                                className='hover:underline'
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
