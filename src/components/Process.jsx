import { process } from '../data';

const Process = () => {
  return (
    <div className="container process_container">
      <div className="upside">
        <h1>
          <span className="title_style">OUR</span> PROCESS
        </h1>
        <p>
          At Taradevi Suppliers, our unwavering commitment to quality is at the
          heart of everything we do. We take immense pride in the stringent
          processes we have put in place to ensure that only the finest quality
          rice reaches your table.
        </p>
      </div>
      <div className="downside">
        {process.map(({ title, desc, icon, id }) => {
          return (
            <div key={id} className="process_info">
              <div className="icon">{icon}</div>
              <h4 className="title">{title}</h4>
              <div className="desc">{desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Process;
