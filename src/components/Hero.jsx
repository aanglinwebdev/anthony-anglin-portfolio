function Hero() {

    function handleViewWork() {
    const portfolioSection = document.getElementById("portfolio");

    portfolioSection.scrollIntoView({
      behavior: "smooth"
    });
  }
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1>Hi, I'm Anthony Anglin</h1>
      <h2>Frontend Developer</h2>

      <p>
        I build responsive web applications using React, JavaScript,
        and modern web technologies.
      </p>

      <button onClick={handleViewWork} style={{ marginTop: "20px", padding: "10px 20px" }}>
        View My Work
      </button>
    </section>
  );
}

export default Hero;
