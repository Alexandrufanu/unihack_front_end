import logo from './logo.svg';
import './App.css';
import ImageUploader from './ImageUploader';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//       <ImageUploader />

//     </div>
//   );
// }
  function App() {
    return ( 
      <div id="navlist">
        <a href="#">Home</a>
        <a href="#">Class: X</a>
        <a href="#">Class: XI</a>
        <a href="#">Class: XII</a>
        
        <div class="search-box">
          <button class="btn-search"><i class="fas fa-search"></i></button>
          {/* <input type="text" class="input-search" placeholder="Type to Search..."> */}
        </div>
      </div>
    );

   } 


export default App;
