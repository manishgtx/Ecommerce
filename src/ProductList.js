import Card from './Card';
import { useGlobalContext } from './context';
const ProductList = () => {
    const {products} = useGlobalContext();
    return (
      <div className="flex w-screen mx-auto flex-wrap gap-y-4 gap-x-6 justify-center">
        {products.map((product) => {
          return <Card key={product.title} item={product} />;
        })}
      </div>
    );
}

export default ProductList;