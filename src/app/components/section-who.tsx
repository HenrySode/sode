import Reveal from './reveal';

export default function SectionWho() {
    return (
        <section id='about' className='mx-auto max-w-7xl px-4 py-16 sm:px-6'>
            <Reveal>
                <h2 className='text-2xl font-semibold tracking-tight'>
                    Who We Are
                </h2>
            </Reveal>
            <Reveal delay={0.1}>
                <p className='mt-4 max-w-3xl text-slate-300/90'>
                    <span className='font-bold text-blue-200'>SODE</span> is an
                    abbreviation for{' '}
                    <span className='font-bold text-blue-200'>
                        Software Digital Environment
                    </span>
                    . We are a technology company passionate about clean design
                    and reliable engineering. From concept to launch, we deliver
                    software, digital marketing, and cloud services that help
                    East African businesses scale with confidence.
                </p>
            </Reveal>
        </section>
    );
}
