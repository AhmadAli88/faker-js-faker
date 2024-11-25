
import { faker } from '@faker-js/faker';

const RandomDate = () => {
  const pastDate = faker.date.past();  // Random past date
  const futureDate = faker.date.future();  // Random future date
  const betweenDate = faker.date.between('2020-01-01', '2022-12-31');  // Random date between two dates

  return (
    <div>
      <h2>Random Dates</h2>
      <p>Past Date: {pastDate.toString()}</p>
      <p>Future Date: {futureDate.toString()}</p>
      <p>Between Date: {betweenDate.toString()}</p>
    </div>
  );
};

export default RandomDate;
