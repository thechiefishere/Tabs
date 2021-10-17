import { useState } from "react";
import Details from "./Details";
import Tabs from "./Tabs";

const ExperiencePage = ({ companies }) => {
  const [show, setShow] = useState(companies[0]);
  const allCompanies = companies.map((item) => item.company);

  return (
    <section>
      <Tabs companies={allCompanies} />
      <Details company={show} />
    </section>
  );
};

export default ExperiencePage;
