import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const Tiles = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch("http://localhost:4000/api/product/category/Tiles")
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }, []);



    return (
        <div className='Header'>
      <div className="ProdContainer">
        {product.map((item, index) => (
            <NavLink to="/SingleProduct" state={item.Product_no} className="Link">
              <div className="card" key={index}>
                <div className="image">
                  <img src="/images/Kohler.jpg" alt={item.Product_name} />
                </div>
                <div className="details">
                  <h1 className="prodname">{item.Product_name}</h1>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
        </div>
    );
}

export default Tiles;