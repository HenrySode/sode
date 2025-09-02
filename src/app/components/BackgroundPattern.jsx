'use client';

export default function BackgroundPattern() {
    return (
        <div className='absolute inset-0 -z-10 overflow-hidden pointer-events-none'>
            {/* Floating dots */}
            <div className='absolute w-1 h-1 bg-blue-200 rounded-full opacity-10 animate-bounce-slow top-10 left-20'></div>
            <div className='absolute w-1.5 h-1.5 bg-slate-400 rounded-full opacity-15 animate-bounce-slow top-32 left-1/2'></div>
            <div className='absolute w-2 h-2 bg-blue-300 rounded-full opacity-10 animate-bounce-slow top-1/3 left-3/4'></div>

            {/* Moving tiny squares */}
            <div className='absolute w-1.5 h-1.5 bg-blue-500 opacity-10 animate-move-diagonal top-1/4 left-1/5'></div>
            <div className='absolute w-1 h-1 bg-slate-300 opacity-10 animate-move-diagonal top-3/4 left-2/3'></div>
        </div>
    );
}
