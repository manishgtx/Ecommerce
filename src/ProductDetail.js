import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';
const ProductDetail = () => {
    const [product,setProduct] = useState({});
    console.log(product);
    const {id} = useParams();
    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>setProduct(res.data));
    },[id])
    return (
      <div id="product" className="w-screen sm:flex gap-x-16 sm:w-128 mx-auto mt-8">
        <div className="sm:w-1/2">
          <img src={product.image} alt={product.title} className="" />
        </div>
        <div id="product-info" className="p-8 sm:w-1/2">
          <div>
            <h1 className="text-orange-500 pb-8 font-bold uppercase tracking-wider">
              {product.category}
            </h1>
            <h2 className="text-black font-bold text-2xl sm:text-4xl pb-8">
              {product.title}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg pb-8">
              {product.description}
            </p>
            <h3 className="font-semibold text-3xl flex items-center gap-4 pb-4">
              ${product.price}
              <span className="text-orange-500 bg-orange-100 text-xl rounded px-1">
                50%
              </span>
            </h3>
          </div>
          <div>
            <button className="bg-orange-500 w-full py-2 rounded-lg font-bold text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
}

export default ProductDetail;