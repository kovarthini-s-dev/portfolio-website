import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <section className="section">
          <div className="container">
            <h1>Kovarthini Sathya</h1>

            <p>
              Frontend Engineer building responsive and
              performance-focused web applications.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;