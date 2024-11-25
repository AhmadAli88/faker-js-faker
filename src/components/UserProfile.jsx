
import { faker } from '@faker-js/faker';

const UserProfile = () => {
  const name = faker.name.fullName();  // Generates a random name
  const email = faker.internet.email();  // Generates a random email
  const address = faker.address.streetAddress();  // Generates a random street address

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default UserProfile;
