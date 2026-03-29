export default function Home() {
  const navlinks = [
    { label: "About", url: "https://example.com" },
    { label: "Learn ", url: "https://example.com" },
    { label: "Enterprise", url: "https://example.com" }
  ];
  const roverlinks = [
    { label: "Learn More", url: "https://example.com", styles: styles.whitebutton },
    { label: "View Guide", url: "https://example.com", styles: styles.gradientButton },
  ];

  return (
    <main style={styles.container}>
      <div style={styles.navbar}>
        <img src="fbx_logo.png" alt="FBX Logo" style={styles.logo} />
        <div style={styles.navlinksContainer}>
          {navlinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={styles.navlinks}>
              {link.label}
            </a>
          ))}
        </div>

        <div style={styles.navActions}>
          <a href="https://example.com" target="_blank" style={styles.whitebutton}>Contact Us</a>
          <a href="https://example.com" target="_blank" style={styles.gradientButton}>Sign In</a>
        </div>
      </div>
      
      <div style={styles.heroMain}>
        <div style={styles.heroMainLeft}>
          <a href="https://example.com" target="_blank" style={styles.glassButton}>Visit the FBX Shop</a>
          <img src="fbx_logo.png" alt="Hero Image" style={{ maxHeight: "40vh" }} />
          <div style={styles.heroTitle}>The ultimate kick-starter to becoming a roboticist</div>
          <p style={styles.heroText}>This is a simple static site built with Next.js. Explore the features and get started today!</p>
          <div style={styles.roverlinksContainer}>
            {roverlinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={link.styles}>
              {link.label}
            </a>
          ))}
          </div>
        </div>
        <div style={styles.heroRight}>
          <img src="fbx_logo.png" alt="Hero Image" style={{ borderRadius: "8px", maxHeight: "300px", maxWidth: "100%" }} />
        </div>

      <div style={styles.space}></div>
        
      </div>
      <div style={styles.restofPage}>
        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={styles.stackTitle}>Build Assembly Skills</div>
            <p style={styles.heroText}>Build Assembly Skills and Learn the Anatomy of A Robot</p>
            <div style={styles.buttonContainer}>
              <a href="https://example.com" target="_blank"style={styles.gradientButton}>Learn More</a>
            </div>
          </div>
          <div style={styles.heroRight}>
            <img src="fbx_logo.png" alt="Hero Image" style={{ borderRadius: "8px", maxHeight: "500px", maxWidth: "100%" }} />
          </div>
        </div>

        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <img src="fbx_logo.png" alt="Hero Image" style={{ borderRadius: "8px", maxHeight: "500px", maxWidth: "100%" }} />
          </div>
          <div style={styles.heroRight}>
            <div style={styles.stackTitle}>Step-by-Step Learning</div>
            <p style={styles.heroText}>All Taught Through Online Step-By-Step Guides and Video Tutorials</p>
            <div style={styles.buttonContainer}>
              <a href="https://example.com" target="_blank"style={styles.gradientButton}>Learn More</a>
            </div>
          </div>
        </div>

        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={styles.stackTitle}>Test Your Skills</div>
            <p style={styles.heroText}>Test Your Robotics Skills in Capstones and Challenges</p>
            <div style={styles.buttonContainer}>
              <a href="https://example.com" target="_blank"style={styles.gradientButton}>Learn More</a>
            </div>
          </div>
          <div style={styles.heroRight}>
            <img src="fbx_logo.png" alt="Hero Image" style={{ borderRadius: "8px", maxHeight: "500px", maxWidth: "100%" }} />
          </div>
        </div>

        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <img src="fbx_logo.png" alt="Hero Image" style={{ borderRadius: "8px", maxHeight: "500px", maxWidth: "100%" }} />
          </div>
          <div style={styles.heroRight}>
            <div style={styles.stackTitle}>Learn to Code</div>
            <p style={styles.heroText}>Learn to Code in the World of Robotics Autonomous and Driver Control</p>
            <div style={styles.buttonContainer}>
              <a href="https://example.com" target="_blank"style={styles.gradientButton}>Learn More</a>
            </div>
          </div>
        </div>
        
        <div style={styles.space}></div>
        
        <div style={styles.spotlightStack}>
          <div style={styles.heroTitle}>We Prioritize Access</div>
          <p style={styles.heroText}>Our team strives to democratize experiential engineering education.</p>
          <div style={styles.spotlightCardContainer}>
            <div style={styles.spotlightCard}>
              <div style={styles.spotlightCardTitle}>Open-Source to the Core</div>
              <p style={styles.spotlightCardText}>The FBX Rover is an open-source robotics platform built using an ESP-32 microcontroller, allowing users to access and modify its underlying code and hardware to support customization, experimentation, and hands-on learning in robotics and embedded systems.</p>
            </div>
            <div style={styles.spotlightCard}>
              <div style={styles.spotlightCardTitle}>Scholarships</div>
              <p style={styles.spotlightCardText}>We offer scholarships to ensure that financial barriers do not hinder access to our programs.</p>
            </div>
          </div>
        </div>

        <div style={styles.space}></div>

        <div style={styles.floatingStack}>
          <div style={styles.heroTitle}>Our Partners</div>
          
        </div>  

        <div style={styles.buttonContainer}>
          <div style={styles.gradientButton}>Get Started</div>
        </div>
        <div style={styles.space}></div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    overflow: "visible",
    backgroundImage: "url('/color4bg_cubes_alt.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "0px 0px 0px 0px",
  },
  restofPage: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "visible",
    backgroundColor: "#0b081c",
    gap: "20px",
  },
  navbar: {
    height: "200px",
    width: "100%",
    alignSelf: "stretch",
    display: "flex",
    gap: "10px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    padding: "10px 20px",
    overflow: "visible",
    backgroundColor: "#0b081c",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  navlinks: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    padding: "10px 20px",
  },
  navlinksContainer: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flex: 1,
    overflow: "visible",
  },
  roverlinksContainer: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
    overflow: "visible",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
    overflow: "visible",
  },
  navActions: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    overflow: "visible",
  },
  logo: {
    height: "40px",
    marginRight: "10px",
  },
  button: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0070f3",
    color: "white",
  },
  whitebutton: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "2em",
    border: "none",
    backgroundColor: "white",
    color: "#0070f3",
  },
  gradientButton: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "2em",
    border: "2px solid transparent",
    background: "linear-gradient(#0b081c) padding-box, linear-gradient(45deg, #629fcc, #c975b9) border-box",
    color: "white",
  },
  glassButton: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "2em",
    border: "2px solid rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
  },
  heroMain: {
    width: "100%",
    height: "auto",
    backgroundImage: "linear-gradient(to bottom, #0e5c7b00, #0e5c7b00, #0e5c7b00, #0e5c7b00, #13173e, #0b081c)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: "0px 20px",
  },
  hero: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b081c",
    marginBottom: "20px",
    flexDirection: "row",
    padding: "0px 20px",
  },
  space: {
    height: "50px",
  },
  heroMainLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
    height: "90vh",
  },
  heroLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
    height: "50vh",
  },
  heroRight: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
    height: "auto",
  },
  heroTitle: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    fontWeight: "700",
    fontSize: "3rem",
    lineHeight: "90%",
    letterSpacing: "-0.03em",
    background: "linear-gradient(90deg, #ffffff, #d3dfe9, #91bee3, #6277e0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
    overflow: "visible",
    padding: "4px 0",
    whiteSpace: "normal",
  },
  heroText: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "120%",
    letterSpacing: "0px",
    color: "white",
    marginTop: "10px",
    maxWidth: "75%",
  },
  stackTitle: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "110%",
    letterSpacing: "-0.03em",
    color: "white",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    display: "inline-block",
    overflow: "visible",
    padding: "4px 0",
    whiteSpace: "normal",
  },
  spotlightStack: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    display: "flex",
    width: "60%",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px",
    overflow: "visible",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f0f0f03c",
    borderRadius: "20px",
  },
  spotlightCard: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#ffffff3c",
    maxWidth: "45%",
    alignItems: "center",
    textAlign: "center",
  },
  spotlightCardTitle: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    fontWeight: "500",
    fontSize: "30px",
    lineHeight: "110%",
    letterSpacing: "-0.03em",
    color: "white",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    display: "inline-block",
    overflow: "visible",
    padding: "4px 0",
    whiteSpace: "normal",
  },
  spotlightCardText: {
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "160%",
    letterSpacing: "0px",
    color: "white",
    width: "100%",
  },
  spotlightCardContainer: {
    display: "flex",
    width: "auto",
    flexDirection: "row",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "20px",
  },
  floatingStack: {
    display: "flex",
    width: "60%",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px",
    overflow: "visible",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
};