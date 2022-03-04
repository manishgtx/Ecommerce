import {Link} from 'react-router-dom';
const Card = ({item}) => {
  const {id,title,price,description,image} = item;
    return (
      <Link to={`/products/${id}`}>
        <article className="sm:w-72">
          <img
            src={image}
            alt=""
            className="rounded-t-lg h-72 w-full object-contain pb-4"
          />
          <div id="card-info" className="px-4  rounded-b-lg border">
            <div className="flex justify-between pt-2 overflow-hidden h-8">
              <h1>{title}</h1>
              <h1>${price}</h1>
            </div>
            <div className="flex justify-between text-sm text-gray-400 pb-4">
              <p>{description.substring(1, 40)}</p>
              <p className="line-through">${price}</p>
            </div>
            <div className="pb-2">
              <button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black p-2 rounded-md w-full">
                BUY
              </button>
            </div>
          </div>
        </article>
      </Link>
    );
}

export default Card;