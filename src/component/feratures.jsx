import '../styles/feature.css'

const Features = () => {

    const values = [
        {
          "category": "Responsive Solutions",
          "description": "We understand the rhythm of the digital world, responding to challenges with agility, precision, and creativity.",
          "emoji": "✨"
        },
        {
          "category": "Reputable Expertise",
          "description": "Backed by a wealth of experience, our team brings a reputation for delivering excellence in every digital endeavor.",
          "emoji": "🌐"
        },
        {
          "category": "Revolutionary Innovation",
          "description": "Innovation is our heartbeat. We don't follow trends; we set them, pushing the boundaries of what's possible.",
          "emoji": "🚀"
        },
        {
          "category": "Resourceful Creativity",
          "description": "We leverage our resources strategically, turning constraints into opportunities and ideas into tangible results.",
          "emoji": "💡"
        }
      ];
    return (
        <div className='feature-container'>
            <div className='section'>
                <h1>R-Dev</h1>
                <p>In a world where technology is always changing, R-Devs is here to help you adapt and succeed in the digital world. We're not just a group of programmers; we're experts at helping businesses grow and achieve their goals online. Our team is made up of experienced leaders, talented developers, and creative thinkers who are dedicated to making your business stand out online. We're on a mission to make sure your business thrives in the digital age, and we're here to guide you every step of the way.</p>
                   
            </div>
            <div>
            <h1>Why R-Devs?</h1>
                    <div className='why-us'>
                        <div >
                        {
                            values.map((item)=>{
                                return(<>
                                <p><b>{item.emoji}{item.category} : </b> {item.description}</p>
                                                            </>
                                )
                            })
                        }
                        </div>
                        <img src='/src/assets/about.svg' alt='llo'/>
                    

                    </div>
            </div>
            
        </div>
    )
}

export default Features