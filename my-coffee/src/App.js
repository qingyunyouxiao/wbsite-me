import './App.css';

function App() {
  return (
    <div className="App">
      {/* 标题栏 */}
      <h1>Wombat Coffee Roasters</h1>
      {/* 导航栏 */}
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/coffees">Coffees</a></li>
        <li><a href="/brewers">Brewers</a></li>
        <li><a href="/specials" className="feature">Specials</a></li>
      </ul>  
        <p>
          Be sure to check out {' '}
            <a href="/specials" className="feature">our specials</a>
        </p>
    </div>
  );
}

export default App;