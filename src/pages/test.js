//import React from 'react';
//const themes = ['light', 'dark', 'pink']

//const ThemeContext = React.createContext({
//  theme: themes[0],
//  changeTheme: () => {},
//  shoppingCart: [],
//	setShoppingCart: () => {},
//});

//function ThemeSwitcher () {
//  const { theme, changeTheme } = React.useContext(ThemeContext)

//  function handleThemeChange (e) {
//    changeTheme(e.target.value)
//  }
/*
  return (
    <div className='themeSwitcher'>
      Select theme:
      <select value={theme} onChange={handleThemeChange}>
        {themes.map(themeOption =>
          <option key={themeOption} value={themeOption}>
            {themeOption}
          </option>
        )}
      </select>
    </div>
  )}
        */
/*
const ArticleChild = () => {
  const { theme, shoppingCart, addToShoppingCart } = React.useContext(ThemeContext);
	
  return (
  		<div>
        <p>Carrito</p>
        {
        shoppingCart.map((item) => <p>{item}</p>)
        }
      </div>
  )
}

function Article () {
  const { theme, shoppingCart, addToShoppingCart } = React.useContext(ThemeContext);
  

  return (
    <div className={`article ${theme}`}>
      <h2>Fun facts about sloths</h2>
    
      <small>source: <a href='https://www.livescience.com/27612-sloths.html'>LiveScience</a></small>
      <ArticleChild />
      <button onClick={() => addToShoppingCart('articulo')}>Click</button>
    </div>
  )
}


export function ArticleWrapper () {
  const [theme, setTheme] = React.useState(themes[0])
  const [shoppingCart, setShoppingCart] = React.useState([]);
  
  const addToShoppingCart = (item) => {
  	const newShoppingCart = [...shoppingCart];
    newShoppingCart.push(item);
    setShoppingCart(newShoppingCart);
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      changeTheme: setTheme,
      shoppingCart,
      addToShoppingCart,
    }}>
      <ThemeSwitcher />
      <Article />
    </ThemeContext.Provider>
  )
}
*/
//ReactDOM.render(<ArticleWrapper />, document.querySelector("#app"))
