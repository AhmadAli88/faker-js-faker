import './App.css';
import LoremText from './components/LoremText';
import ProductCard from './components/ProductCard';
import RandomUser from './components/RandomUser';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile />
      <RandomUser />
      <ProductCard />
      <LoremText/>
    </div>
  );
}

export default App;
