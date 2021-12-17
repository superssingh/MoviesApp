import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/jsx/navbar/navbar";
import Home from "./components/pages/home";
import Shop from "./components/pages/shop";
import Services from "./components/pages/services";
import Blog from "./components/pages/blog";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import NotFound from "./components/pages/not-found";
import Login from "./components/pages/loginForm";
import Signup from "./components/pages/signup";
import MovieDetails from "./components/pages/movieDetails";
import UserContext from "./components/js/contexts/userContext";
import MovieContext from "./components/js/contexts/movieContext";
import CartContext from "./components/js/contexts/cartContext";

import "./components/scss/style.css";

function App() {
  const [user, setUser] = useState({
    currentUser: {
      name: "",
      id: "",
    },
  });
  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState([]);

  const handleLoggedIn = (username) => {
    const userLogin = { name: username.name, id: username.id };
    setUser({ currentUser: userLogin });
  };

  const handleLoggedOut = () => {
    const userLogout = { name: "", id: "" };
    setUser({ currentUser: userLogout });
  };

  const handleMovies = (movies) => {
    setMovies(movies);
  };

  const addProduct = (product) => {
    cart.push(product);
  };

  const removeProduct = (product) => {
    const filtered = cart.filter((p) => p.id !== product.id);
    setCart(filtered);
  };

  return (
    <React.Fragment>
      <CartContext.Provider
        value={{
          cartItems: cart,
          addToCart: addProduct,
          removeFromCart: removeProduct,
        }}
      >
        <UserContext.Provider
          value={{
            currentUser: user.currentUser,
            onLogout: handleLoggedOut,
            onLogin: handleLoggedIn,
          }}
        >
          <MovieContext.Provider
            value={{ movies: movies, addMovies: handleMovies }}
          >
            <Navbar />
            <div className="App">
              <Switch>
                <Route path="/movie/:id" component={MovieDetails} />
                <Route path="/blog/:id" component={Blog} />
                <Route path="/blog" component={Blog} />
                <Route path="/services" component={Services} />
                <Route path="/shop" component={Shop} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" exact component={Home} />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </MovieContext.Provider>
        </UserContext.Provider>
      </CartContext.Provider>
    </React.Fragment>
  );
}

export default App;
