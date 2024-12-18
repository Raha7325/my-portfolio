import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const router = useRouter();

    const background = router.pathname === "/" ? "background-homePage" : "bg-pink-100"
    return (
        <div className={`flex flex-col min-h-screen ${background}`} style={{ backgroundImage: `url('./images/background-homePage.jpeg')` }}>
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto p-4">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
