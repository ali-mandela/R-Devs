import '../styles/hero.css'
const Hero = () => {
  return (
    <div className="hero-container">
    <div className="hero-section">
            <h3>🚀 Welcome to R-Devs 🚀</h3>
            <p>A Responsive web development agency</p>
            {/* <img src='/src/assets/banner.svg' alt='mm'/> */}
    </div>
    <div className='hero-section-2'>
       <p>we don{`'`}t just navigate the digital landscape;<br/> we redefine it. We are not merely a digital agency, we are <span>architects</span> of online experiences, code poets crafting the future, and collaborators dedicated to transforming your <span>vision</span> into a digital <span>reality</span>.</p>
      </div>
    </div>
  )
}

export default Hero