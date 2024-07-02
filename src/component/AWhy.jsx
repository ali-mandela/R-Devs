import aboutUsImg from '../assets/banner.svg' 
import whyUsImg from '../assets/banner.svg' 

const AboutAndWhy = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <p className="mb-6">
                At R-DEV, we are dedicated to crafting exceptional digital experiences. Our team of experts works tirelessly to deliver innovative solutions tailored to your business needs. We pride ourselves on being reliable, responsive, and resilient.
              </p>
              <p className="mb-6">
                With years of experience in the industry, we have honed our skills and knowledge to provide top-notch services that drive success. Our commitment to excellence ensures that we exceed your expectations every time.
              </p>
              <button className="bg-white text-indigo-500 px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                Learn More
              </button>
            </div>
            <div className="relative">
              <img src={aboutUsImg} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img src={whyUsImg} alt="Why Us" className="w-full h-auto rounded-lg shadow-lg" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Why Us?</h2>
              <p className="mb-6">
                Choosing R-DEV means choosing a partner committed to your success. Our client-centric approach ensures that we understand your unique needs and deliver solutions that meet your specific goals.
              </p>
              <p className="mb-6">
                We leverage the latest technologies and industry best practices to provide secure, scalable, and high-performing solutions. Our focus on continuous improvement means we are always at the forefront of innovation, ready to tackle any challenge.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Expert team with extensive industry experience</li>
                <li>Client-centric approach for personalized solutions</li>
                <li>Commitment to excellence and continuous improvement</li>
                <li>Innovative and forward-thinking mindset</li>
              </ul>
              <button className="bg-white text-indigo-500 px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutAndWhy;
