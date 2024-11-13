import './gallery.css';
import Headering from '../../components/Headering';
import aboutImg from '../../assets/aboutimage.jpg';

const Gallery = () => {
  return (
    <>
      <Headering title="Our Gallery" image={aboutImg}></Headering>
    </>
  );
};
export default Gallery;
