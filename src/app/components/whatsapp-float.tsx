'use client';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppFloat() {
    return (
        <Link
            href='https://wa.me/255744524239'
            target='_blank'
            aria-label='Chat on WhatsApp'
            className='fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-blue-900 shadow-lg shadow-emerald-900/30 transition hover:scale-105 focus-visible:outline-none'
        >
            <MessageCircle className='size-6 text-white' />
        </Link>
    );
}
