import './App.css';
import ProductCard from './components/ProductCard';
import RandomUser from './components/RandomUser';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile />
      <RandomUser />
      <ProductCard />
    </div>
  );
}

export default App;
