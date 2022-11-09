import "./App.css";
import Navbar from "./container/Navbar";
import Card from "./container/Card";
import { data } from "./data";

// TODO: Создать счетчик и записывать полученные его данные в объект

function App() {
  if (!data) {
    return <h1>Loading...</h1>;
  } else if (data) {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="sneakers">
            {data.map((data) => (
              <div key={data.name}>
                <Card
                  name={data.name}
                  price={data.price}
                  img={data.img}
                  count={data.counter}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
