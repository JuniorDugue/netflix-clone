import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <p>{item.title}</p>
            <p>{item.subTitle}</p>
            <p>{item.image}</p>
            <p>{item.alt}</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

export default App;
