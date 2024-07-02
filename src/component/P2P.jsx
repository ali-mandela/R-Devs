/* eslint-disable react/no-unescaped-entities */
import img1 from '../assets/p1.svg';
import img2 from '../assets/p2.svg';
import img3 from '../assets/p3.svg';

const P2P = () => {
    return (
        <div className="px-4 py-12 bg-gray-100">
            <div className="text-center mb-12">
                <h1 className="uppercase text-4xl font-bold text-gray-900">Our Process to Product Formula</h1>
                <p className="text-lg text-gray-600 mt-2">From idea to implementation, we ensure quality at every step</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="relative p-6 text-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                    <img className="absolute inset-0 w-full h-full object-cover opacity-20" src={img1} alt="Connect with us" />
                    <div className="relative z-10 p-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Connect with Us</h2>
                        <p className="text-gray-600">Reach out and share your vision. We'll help turn it into reality.</p>
                    </div>
                </div>
                <div className="relative p-6 text-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400">
                    <img className="absolute inset-0 w-full h-full object-cover opacity-20" src={img2} alt="Meeting with the experts" />
                    <div className="relative z-10 p-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Meeting with the Experts</h2>
                        <p className="text-gray-600">Collaborate with our team of experts to plan and refine your product.</p>
                    </div>
                </div>
                <div className="relative p-6 text-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-400">
                    <img className="absolute inset-0 w-full h-full object-cover opacity-20" src={img3} alt="Your product is ready" />
                    <div className="relative z-10 p-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tada! Your v0.1.0 Product is Ready</h2>
                        <p className="text-gray-600">Experience the first version of your product, ready for feedback and iteration.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default P2P;
