## React 3

继续学习，我觉得我可以。

**step 1**

```bash
yarn create my-coffee my-coffee
cd my-coffee
echo "SKIP_PREFLIGHT_CHECK=true" > .env
yarn start
```

这两步没什么意义，添加新的页面，安装路由。

**step 2**

```
src/
├── pages/          # 所有页面都放在这里
│   ├── Home.js     # 首页
│   ├── Coffees.js  # 咖啡页面
│   ├── Brewers.js  # 冲泡器页面
│   └── Specials.js # 特惠页面
├── App.js
└── App.css
```

**step 3**

```bash
cd my-coffee
yarn add react-router-dom
```

作者样式覆盖用户代理样式，这里表现为这个橙色按钮，还加了一行文字。

**step 4**

App.js

```jsx
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
            <a href="/specials" className="feature"> our specials</a>
        </p>
    </div>
  );
}

export default App;
```

App.css

```css
/* 全局基础样式 */
.App {
  margin: 20px;
  font-family: Arial, sans-serif;
}

/* 标题样式 */
h1 {
  font-weight: bold;
  color: #2f4f4f;
  margin-bottom: 20px;
}

/* 列表样式 */
.nav-list {  
    margin-top: 10px;
    list-style: none;
    padding-left: 0;
}

/* 列表项样式 */
.nav-list li {
  display: inline-block;
}

/* 链接样式 */
.nav-list a {
  color: white;
  background-color: #13a4a4;  /* 原始绿色 */
  padding: 5px 15px;
  border-radius: 2px;
  text-decoration: none;
  margin-right: 5px;
  transition: all 0.3s ease;  /* 添加过渡效果 */
}

/* 选择器优先级 */
.nav-list .feature {
    background-color: orange;
}

/* 鼠标悬浮效果 */
.nav-list a:hover {
  background-color: #8B4513;  /* 鼠标悬停时变为咖啡色 */
  /* 可以添加轻微放大效果 */
  transform: scale(1.05);
}
```
