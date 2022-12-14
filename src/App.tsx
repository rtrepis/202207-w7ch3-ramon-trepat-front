import NewItem from "./components/NewItem/NewItem";
import ItemsList from "./components/ItemsList/ItemsList";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1>Items App</h1>
      </header>
      <main className="main-content">
        <NewItem />
        <ItemsList />
      </main>
    </div>
  );
};

export default App;
