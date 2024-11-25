
import { faker } from '@faker-js/faker';

const RandomUser = () => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    avatar: faker.image.avatar()
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <img src={user.avatar} alt="avatar" style={{ borderRadius: '50%', marginRight: '20px' }} />
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address}</p>
      </div>
    </div>
  );
};

export default RandomUser;
