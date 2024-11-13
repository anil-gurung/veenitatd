import './about.css';
import Headering from '../../components/Headering';
import aboutImg from '../../assets/aboutimage.jpg';
import { about } from '../../data';
import Card from '../../UI/Card';

const About = () => {
  return (
    <>
      <Headering title="About Us" image={aboutImg}></Headering>
      <div className="container about_container">
        {about.map(({ title, id, desc }) => {
          return (
            <Card key={id} className="card">
              <h2>{title}</h2>
              <p>{desc}</p>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default About;
