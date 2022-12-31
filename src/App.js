import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "./redux/productSlice";

function App() {
  const { products, status, errMsg } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  if (status === "LOADING") return <div>Loading</div>;
  return (
    <div className="App">
      <header className="App-header">
        {errMsg && <div>Error: {errMsg}</div>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>This is sample deployment to microsoft azure</p>
        <img src="./red.jpg" alt="company logo" />
        <h2>Product list</h2>
        <ul>
          {products.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
