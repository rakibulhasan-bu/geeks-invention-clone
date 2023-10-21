import Footer from "./Footer";
import Hero from "./Hero"
import Main from "./Main";

const Home = () => {
    return (
        <>
            <Hero />
            {/* <!-- fake div --> */}
            <div className="lg:h-screen lg:w-screen"></div>
            <Main />
            <div className="lg:h-screen lg:w-screen"></div>
            <Footer />
        </>
    );
};

export default Home;