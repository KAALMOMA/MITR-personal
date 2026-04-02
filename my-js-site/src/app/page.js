import styles from './page.module.css';
import Navbar from '../../components/navbar.js';

export default function Home() {
  return (
    <main className={styles.container}>
      <Navbar />
      
      <div className={styles.heroMain}>
        <div className={styles.heroMainLeft}>
          <a href="https://example.com" target="_blank" className={styles.glassButton}>Visit the FBX Shop</a>
          <img src="fbx_logo.png" alt="Hero Image" className={styles.stackImage} />
          <div className={styles.heroTitle}>The ultimate kick-starter to becoming a roboticist</div>
          <p className={styles.heroText}>This is a simple static site built with Next.js. Explore the features and get started today!</p>
          <div className={styles.roverlinksContainer}>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.whitebutton}>Learn More</a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.gradientButton}>View Guide</a>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src="rover1.png" alt="Hero Image" className={styles.stackImage} />
        </div>

      <div className={styles.space}></div>
        
      </div>
      <div className={styles.restofPage}>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.stackTitle}>Build Assembly Skills</div>
            <p className={styles.heroText}>Build Assembly Skills and Learn the Anatomy of A Robot</p>
            <div className={styles.buttonContainer}>
              <a href="https://example.com" target="_blank"className={styles.gradientButton}>Learn More</a>
            </div>
          </div>
          <div className={styles.heroRight}>
            <img src="rover2.png" alt="Hero Image" className={styles.stackImage} />
          </div>
        </div>

        <div className={styles.heroMirrored}>
          <div className={styles.heroLeft}>
            <img src="rover3.png" alt="Hero Image" className={styles.stackImage} />
          </div>
          <div className={styles.heroRight}>
            <div className={styles.stackTitle}>Step-by-Step Learning</div>
            <p className={styles.heroText}>All Taught Through Online Step-By-Step Guides and Video Tutorials</p>
            <div className={styles.buttonContainer}>
              <a href="https://example.com" target="_blank"className={styles.gradientButton}>Learn More</a>
            </div>
          </div>
        </div>

        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.stackTitle}>Test Your Skills</div>
            <p className={styles.heroText}>Test Your Robotics Skills in Capstones and Challenges</p>
            <div className={styles.buttonContainer}>
              <a href="https://example.com" target="_blank"className={styles.gradientButton}>Learn More</a>
            </div>
          </div>
          <div className={styles.heroRight}>
            <img src="rover3.png" alt="Hero Image" className={styles.stackImage} />
          </div>
        </div>

        <div className={styles.heroMirrored}>
          <div className={styles.heroLeft}>
            <img src="fbx_logo.png" alt="Hero Image" className={styles.stackImage} />
          </div>
          <div className={styles.heroRight}>
            <div className={styles.stackTitle}>Learn to Code</div>
            <p className={styles.heroText}>Learn to Code in the World of Robotics Autonomous and Driver Control</p>
            <div className={styles.buttonContainer}>
              <a href="https://example.com" target="_blank"className={styles.gradientButton}>Learn More</a>
            </div>
          </div>
        </div>
        
        <div className={styles.space}></div>
        
        <div className={styles.spotlightStack}>
          <div className={styles.heroTitle}>We Prioritize Access</div>
          <p className={styles.heroText}>Our team strives to democratize experiential engineering education.</p>
          <div className={styles.spotlightCardContainer}>
            <div className={styles.spotlightCard}>
              <div className={styles.spotlightCardTitle}>Open-Source to the Core</div>
              <p className={styles.spotlightCardText}>The FBX Rover is an open-source robotics platform built using an ESP-32 microcontroller, allowing students to access and modify its underlying code and hardware.</p>
            </div>
            <div className={styles.spotlightCard}>
              <div className={styles.spotlightCardTitle}>Making STEM Accessible</div>
              <p className={styles.spotlightCardText}>We partner with non-profits to introduce robotics and 3D printing to students, helping expand access to hands-on STEM learning opportunities.</p>
            </div>
          </div>
        </div>

        <div className={styles.space}></div>

        <div className={styles.floatingStack}>
          <div className={styles.heroTitle}>Our Partners</div>
          
        </div>  

        <div className={styles.buttonContainer}>
          <div className={styles.gradientButton}>Get Started</div>
        </div>
        <div className={styles.space}></div>
      </div>
    </main>
  );
};