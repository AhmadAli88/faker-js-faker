import { faker } from '@faker-js/faker';

const ProductCard = () => {
  const product = {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
    description: faker.lorem.sentence(),
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: 'auto' }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;