const Tabs = (props) => {
  return (
    <header>
      {props.companies.map((company, index) => {
        return (
          <button key={index} onClick={() => props.changeDetails(company)}>
            {company}
          </button>
        );
      })}
    </header>
  );
};

export default Tabs;
