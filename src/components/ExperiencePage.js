import Tabs from "./Tabs";

const Details = ({ companies }) => {
  const allCompanies = companies.map((comapany) => comapany.comapany);

  return (
    <section>
      <Tabs companies={allCompanies} />
    </section>
  );
};

export default Details;
