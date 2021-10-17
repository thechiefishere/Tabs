const Tabs = ({ companies }) => {
  return (
    <header>
      {companies.map((company, index) => {
        return <button key={index}>{company}</button>;
      })}
    </header>
  );
};

export default Tabs;
