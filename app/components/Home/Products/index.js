import useERPStore from '@/app/store/useERPStore';
import ProductCard from '../../ProductCard';

const Products = () => {
  const { items } = useERPStore();
  return (
    <>
    
    <h1 className='text-2xl font-bold text-center'>Products</h1>
      <div className='flex flex-wrap gap-6 w-full'>
        
      {items.map((item,index) => (
        <div key={index}>
          <ProductCard item={item} />
        </div>
      ))}
    </div>
    </>
  )
}

export default Products