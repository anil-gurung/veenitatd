import './products.css';
import productImg from '../../assets/productimage.png';
import { products } from '../../data';
import Card from '../../UI/Card';
import { Link } from 'react-router-dom';
import Headering from '../../components/Headering';

const Products = () => {
  return (
    <>
      <Headering
        image={productImg}
        title="IKKA-Domestic Product"
        children="Aaunus yo biryani ko khusi khulerw manau. Biryani is that one dish
            that unites our entire nation and has different methods of
            preparation, taste and styles across our nation."
      />

      <div className="container products_container">
        {products.map(({ id, title, desc, url }) => {
          return (
            <Card key={id} className="product">
              <Link className="product_image">
                <img src={url} alt="productsImg" />
              </Link>
              <h2>{title}</h2>
              <p>{desc}</p>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default Products;
