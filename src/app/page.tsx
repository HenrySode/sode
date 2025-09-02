import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import SectionContact from './components/section-contact';
import SectionServices from './components/section-services';
import SectionValues from './components/section-values';
import SectionVisionMission from './components/section-vision-mision';
import SectionWho from './components/section-who';
import SectionWhy from './components/section-why';
import WhatsAppFloat from './components/whatsapp-float';

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <SectionWho />
                <SectionVisionMission />
                <SectionServices />
                <SectionWhy />
                <SectionValues />
                <SectionContact />
            </main>
            <WhatsAppFloat />
            <Footer />
        </>
    );
}
