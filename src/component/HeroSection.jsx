import bg1 from '../assets/p4.png';
import bg2 from '../assets/p5.png';
import bg3 from '../assets/p4.png';

const HeroSection = () => {
    const heroSections = [
        {
            title: "Website Development",
            tagline: "Crafting Digital Experiences",
            message: "Transform your online presence with our bespoke website solutions. We create visually stunning, highly functional websites tailored to your business needs.",
            bg: bg1
        },
        {
            title: "Web Apps",
            tagline: "Empowering Businesses Online",
            message: "Unlock the full potential of your business with our cutting-edge web applications. We deliver secure, scalable, and high-performing solutions to drive your success.",
            bg: bg2
        },
        {
            title: "Mobile Apps",
            tagline: "Innovation in Your Hands",
            message: "Stay ahead in the digital era with our innovative mobile app solutions. From concept to launch, we ensure seamless functionality and user engagement.",
            bg: bg3
        }
    ];

    return (
        <div className="h-full w-full bg-gray-100 py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="h-full bg-teal-400 p-6 rounded-lg shadow-lg text-white flex flex-col justify-between items-center">
                        <h1 className="text-2xl font-bold mb-4">Hola from R-dev</h1>
                        <p className="mb-4">Your go-to solution for all things tech, making your digital journey seamless and hassle-free.</p>
                        <button className="bg-neutral-300 text-gray-900 px-6 py-2 rounded-full hover:bg-neutral-400 transition duration-300">Start your Idea</button>
                    </div>
                    {heroSections.map((section, index) => (
                        <div key={index} className="h-full p-6 rounded-lg shadow-lg overflow-hidden relative group">
                            <ProjectSection item={section} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectSection = ({ item }) => {
    return (
        <div className='h-full w-full bg-cover bg-center flex flex-col justify-between items-center text-white p-6 relative transition-opacity duration-300 group-hover:opacity-100' style={{ backgroundImage: `url(${item.bg})` }}>
            <div className="bg-black bg-opacity-50 p-4 rounded-lg w-full text-center">
                <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
                <i className="text-lg mb-4">{item.tagline}</i>
                <p className="mb-4">{item.message}</p>
                <button className="bg-neutral-300 text-gray-900 px-6 py-2 rounded-full hover:bg-neutral-400 transition duration-300">Contact us</button>
            </div>
        </div>
    );
};

export default HeroSection;
