import { FaAngleDoubleRight } from "react-icons/fa";

const Details = ({ company }) => {
  return (
    <article>
      <h3>{company.title}</h3>
      <h4>{company.company}</h4>
      <p>{company.dates}</p>
      <div className="duties">
        {company.duties.map((duty) => {
          return (
            <div>
              <FaAngleDoubleRight />
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Details;
