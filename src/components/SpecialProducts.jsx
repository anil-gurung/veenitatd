import { Link } from 'react-router-dom';
import Card from '../UI/Card';

const SpecialProducts = () => {
  return (
    <section>
      <div className="container specialproducts_container">
        <div className="special_title">
          <h1>
            OUR <span className="title_style">EXCLUSIVE</span> PRODUCTS
          </h1>
          <p>
            We offer an exclusive range of premium rice varieties that are
            carefully cultivated and processed to deliver unparalleled taste,
            aroma, and quality. Here's a glimpse into our exquisite collection.
          </p>
        </div>
        <div className="special_products">
          <Card className="product">
            <Link className="product_image">
              <img
                src="https://aakashagro.com/wp-content/uploads/2023/09/Ikka-Celebration-Post-Size-1024x1024.jpg"
                alt="productsImg"
              />
            </Link>
            <h2>CELEBRATION</h2>
          </Card>
          <Card className="product">
            <Link className="product_image">
              <img
                src="https://aakashagro.com/wp-content/uploads/2023/09/Ikka-Biryani-Special-Post-Size-1024x1024.jpg"
                alt="productsImg"
              />
            </Link>
            <h2>BIRYANI</h2>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default SpecialProducts;
