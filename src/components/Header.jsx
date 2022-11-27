import { useDispatch } from 'react-redux';
import { userInput } from '../redux/AllCoins/coins';
import '../styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(userInput(e.target.value));
  };

  return (
    <div className="header-container">
      <h2 className="quote" data-testid="quote">The future of Money is digital currency</h2>
      <form>
        <input type="text" name="name" id="name" placeholder="Search here..." onChange={handleSearch} data-testid="input" />
      </form>
    </div>
  );
};

export default Header;
