import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import List from "./components/List";
import LoginSplash from "./components/LoginSplash";
import Footer from "./components/Footer";

export interface Product {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}
export interface User {
  id: number;
  email: string;
  name: string;
  selectedProducts: Product[];
  password?: string;


}

const App = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 0, name: 'Товар 1', price: 134, selected: false },
    { id: 1, name: 'Товар 2', price: 244, selected: false },
    { id: 2, name: 'Товар 3', price: 934, selected: false },
    { id: 3, name: 'Товар 4', price: 2038, selected: false },
    { id: 4, name: 'Товар 5', price: 1984, selected: false },
    { id: 5, name: 'Товар 6', price: 1984, selected: false },
    { id: 6, name: 'Товар 7', price: 1984, selected: false },

  ]);
  const [users, setUsers] = useState<User[]>([
    { id: 0, email: "N/A", name: "Artem", selectedProducts: [] },
    { id: 1, email: "first@mail", name: "Petro", password: "1234", selectedProducts: [] },
    { id: 2, email: "second@mail", name: "Vitalina", password: "1111", selectedProducts: [] }
  ]);


  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<number>(0);
  const [isLoginInit, setLoginInit] = useState(false);
  const [allowMenu, setAllowMenu] = useState(true)
  const [defaultUser, setDefaultUser] = useState(users[0])

  const currentUser = users.find(user => user.id === currentUserId);



  const checkLogged = () => (
    !isLoggedIn
    || (currentUser)
    && currentUser.id === 0
  );




  const logIn = (email?: string, password?: string) => {
    setAllowMenu(!allowMenu);
    if (!email || !password) {
      setLoggedIn(false);
      setLoginInit(true);
      return;
    }

    if (isLoggedIn) {
      setLoggedIn(true);
      setLoginInit(false);
      return;
    }

    setLoginInit(true);

    //if matches credentials
    let foundUser = users.find(user => user.email === email && user.password === password);

    if (!foundUser) {
      setLoggedIn(false);
      setCurrentUserId(0);
      setLoginInit(false);
      return;
    }

    setCurrentUserId(foundUser.id);
    setLoggedIn(true);
    setLoginInit(false);

    const updatedProducts = products.map(product => ({
      ...product,
      selected: foundUser.selectedProducts.some(selected => selected.id === product.id),
    }));
    setProducts(updatedProducts);
    console.log(foundUser);

  };

  const logOut = () => {
    if (!isLoggedIn) {
      setLoggedIn(false);
      return;
    }

    setLoggedIn(false);
    setCurrentUserId(0);
    const updatedProducts = products.map(product => ({
      ...product,
      selected: defaultUser.selectedProducts.some(selected => selected.id === product.id),
    }));
    setProducts(updatedProducts);

  }

  const handleMenuLogButtonClick = () => {
    (isLoggedIn)
      ? logOut()
      : logIn();
  }

  const handleSelectedChange = (productId: number) => {

    if (!currentUser) return;

    const updatedProducts = products.map(product =>
      product.id === productId
        ? { ...product, selected: !currentUser.selectedProducts.some(e => e.id === productId) }
        : product

    );

    const updatedUser: User = {
      ...currentUser,
      selectedProducts: updatedProducts.filter(product => product.selected)
    };

    setUsers(users.map(user => (user.id === currentUser.id) ? updatedUser : user));
    setProducts(updatedProducts);
  }

  const handleLoginSplash = () => {
    setLoginInit(false);
    setAllowMenu(true)
  }


  return (
    <>
      <LoginSplash
        show={isLoginInit}
        onHide={handleLoginSplash}
        onSubmit={logIn}

      />
      <Header
        user={currentUser}
        showLoginButton={checkLogged()}
        onLoginClick={logIn}
        onMenuLogButtonClick={handleMenuLogButtonClick}
        showMenu={allowMenu}
      />
      <Body>
        <List
          products={products}
          showCheckBoxes={true}
          onSelectedChange={handleSelectedChange}
        />
      </Body>
      <Footer />
    </>
  );
}
export default App;
