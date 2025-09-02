import './globals.css';

import { jakarta } from './fonts';

import type {Metadata} from 'next';
export const metadata: Metadata = {
    title: 'SODE BEDIGITAL — Technology that makes you bloom',
    description:
        'Software development, digital marketing, hosting, and technology consultancy.',

    metadataBase: new URL('https://example.com'), // update when deploying
    icons: {
        icon: '/logo.png', // ✅
    },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang='en' className='dark'>
            <body className={`${jakarta.variable} font-sans`}>{children}</body>
        </html>
    );
}
