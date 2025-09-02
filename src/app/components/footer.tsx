export default function Footer() {
    return (
        <footer className='border-t border-white/5'>
            <div className='mx-auto max-w-7xl px-4 py-8 text-center text-sm text-slate-400 sm:px-6'>
                © {new Date().getFullYear()} SODE BEDIGITAL. All rights
                reserved.
            </div>
        </footer>
    );
}
