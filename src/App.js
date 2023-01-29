import logo from './assets/svg/logo.svg';
import './assets/css/App.css';
import Table from './components/table';
import Footer from './components/footer';

// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello, React!</h1>
//       </div>
//     );
//   }
// }

function App() {
  const name = "1teguh";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>بسم الله</p>
        <p>Pertama kali belajar react js, semoga bisa berkembang dan berkah <br>
        </br>Aamiin</p>
        <p>by {name}</p>
      </header>
      <main className='container mt-5'>
          <Table />
      </main>
      <footer className='container mt-5'>
          <Footer />
      </footer>
    </div>
  );
}




// eslint-disable-next-line import/no-anonymous-default-export
export default App;
