import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { userInput } from '../redux/AllCoins/coins';
import headerImg from '../assets/images/header.png';
import '../styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(userInput(e.target.value));
  };

  return (
    <header>
      <div className="inner_header">
        <div>
          <h2>Hi, there 👋</h2>
          <p>Ready to start your day with some coins?</p>
          <form>
            <input type="text" name="name" id="name" placeholder="Search here..." onChange={handleSearch} data-testid="input" />
            <BiSearch />
          </form>
        </div>
        <img src={headerImg} alt="girl working on laptop" />
      </div>
    </header>
  );
};

export default Header;
