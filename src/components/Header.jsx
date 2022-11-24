import '../styles/Header.css';

const Header = () => (
  <div className="header-container">
    <blackquote className="quote">The future of Money is digital currency</blackquote>
    <form>
      <input type="text" name="name" id="name" placeholder="Search here..." />
    </form>
  </div>
);

export default Header;
