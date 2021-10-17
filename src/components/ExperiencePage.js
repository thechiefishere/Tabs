import { useState } from "react";
import Details from "./Details";
import Tabs from "./Tabs";

const ExperiencePage = ({ companies }) => {
  const [show, setShow] = useState(companies[0]);

  const allCompanies = companies.map((item) => item.company);

  const changeDetails = (company) => {
    const toShow = companies.filter((item) => item.company == company);

    setShow(toShow[0]);
  };

  return (
    <section className="companies">
      <Tabs companies={allCompanies} changeDetails={changeDetails} />
      <Details company={show} />
    </section>
  );
};

export default ExperiencePage;
