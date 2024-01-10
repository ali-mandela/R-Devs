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
                <h3>R-Dev</h3>
                <p>In a world pulsating with innovation, R-Devs stands tall as your trusted
                    partner in the realm of digital evolution. We are not just about writing code;
                    we are about scripting success stories. Our team, led by a blend of seasoned
                    managers, skilled developers, and creative minds, is on a mission to
                    revolutionize the way businesses thrive in the digital space.</p>
                    <h3>Why R-Devs?</h3>
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