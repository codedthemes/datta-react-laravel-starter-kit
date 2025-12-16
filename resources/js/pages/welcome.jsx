import SimpleLayout from '@/layouts/Simple';

import HeaderSection from '@/sections/landing/HeaderBlock';

import '@assets/scss/landing.scss';

export default function Welcome() {
    
    return (
        <>
            <SimpleLayout>
                <header className="header" id="home">
                    <HeaderSection />
                </header>
            </SimpleLayout>
        </>
    );
}
