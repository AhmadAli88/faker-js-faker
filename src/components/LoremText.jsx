   import { faker } from '@faker-js/faker';

const LoremText = () => {
  const paragraph = faker.lorem.paragraphs(3); // Generates 3 paragraphs
  const sentence = faker.lorem.sentence(); // Generates a random sentence

  return (
    <div>
      <h2>Lorem Ipsum Text</h2>
      <p>{sentence}</p>
      <p>{paragraph}</p>
    </div>
  );
};

export default LoremText;
