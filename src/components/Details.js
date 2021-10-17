import { FaAngleDoubleRight } from "react-icons/fa";

const Details = ({ company }) => {
  return (
    <article className="details">
      <h3 className="title">{company.title}</h3>
      <h4 className="company-name">{company.company}</h4>
      <p className="date">{company.dates}</p>
      <div className="duties">
        {company.duties.map((duty, index) => {
          return (
            <div key={index}>
              <FaAngleDoubleRight className="icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
      <button className="info">MORE INFO</button>
    </article>
  );
};

export default Details;
