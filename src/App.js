
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="card_content" id='card'>
        <div className="img">
          <img src="https://images.unsplash.com/photo-1550586678-f7225f03c44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" width={200} alt="" />
        </div>
        <div className="title_div_center">
          <h2 className="title text-center title_secondary">title</h2>
        </div>
        <div className="text-center">
          Description
        </div>
      </section>
    </div>
  );
}

export default App;
