export default function Home() {
  const buttons = [
    { label: "Go to Example 1", url: "https://example.com" },
    { label: "Go to Example 2", url: "https://example.com" },
    { label: "Go to Example 3", url: "https://example.com" },
  ];

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>My Static Site</h1>

      <div style={styles.buttonContainer}>
        {buttons.map((btn, index) => (
          <a key={index} href={btn.url} target="_blank" rel="noopener noreferrer">
            <button style={styles.button}>{btn.label}</button>
          </a>
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0070f3",
    color: "white",
  },
};