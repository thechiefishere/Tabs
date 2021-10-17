import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Experience from "./components/ExperiencePage";

function App() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    async () => {
      try {
        const response = await fetch(
          "https://course-api.com/react-tabs-project"
        );
        const data = await response.json();
        setCompanies(data);
      } catch (err) {
        console.log(error);
      }
    };
  }, []);

  return (
    <main>
      <h1>Our Experience</h1>
      <div className="underline"></div>
      {companies.length === 0 ? (
        <Loading />
      ) : (
        <Experience companies={companies} />
      )}
    </main>
  );
}

export default App;
