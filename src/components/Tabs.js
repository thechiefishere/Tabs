const Tabs = ({ companies }) => {
  return (
    <header>
      {companies.map((company, index) => {
        <button key={index}>{company}</button>;
      })}
    </header>
  );
};

export default Tabs;
