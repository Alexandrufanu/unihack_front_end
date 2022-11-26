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
    <>  
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
     
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>


    <div class="subject">
    
    <div class="container">

      <img src={require('./img/calculator.png')} alt="calu" class="picture"/>
        <div class="content">
          <h1>MATH</h1>
        </div>
      </div> 
      
      <div class="container">

      <img src={require('./img/eng2.png')} alt="calu" class="picture"/>
        <div class="content">
          
          <h1>ENGLISH</h1>
        </div>
      </div>

      <div class="container">
      <img src={require('./img/biology2.png')} alt="calu" class="picture"/>
        <div class="content">
          <h1>BIOLOGY</h1>
        </div>
      </div>


      <div class="container">
      <img src={require('./img/planet-earth.png')} alt="calu" class="picture"/>
        <div class="content">
          <h1>GEOGRAPHY</h1>
        </div>
      </div>

      <div class="container">
      <img src={require('./img/data-science.png')} alt="calu" class="picture"/>
        <div class="content">
          <h1>COMPUTER SCIENCE</h1>
        </div>
      </div>

      <div class="container">
      <img src={require('./img/filo.png')} alt="calu" class="picture"/>
        <div class="content">
          <h1>PHILOLOGY</h1>
        </div>
      </div>


      <div class="container">
      <img src={require('./img/fizicaaa.png')} alt="calu" class="picture"/>
        <div class="content">
          <h1>PHYSICS</h1>
        </div>
      </div>


      <div class="container">
      <img src={require('./img/sports.png')} alt="calu" class="picture"/>
        <div class="content">
          <h1>  PHYSICAL EDUCATION</h1>
        </div>
      </div>

      
      <div class="container">
      <img src={require('./img/chemistry.png')} alt="calu" class="picture"/>
        <div class="content">
          <h1>CHEMISTRY</h1>
        </div>
      </div>

      </div>
      

   {/* <div class="container">
    <button class="new" id="myBtn"><img src={require('./img/calculator.png')} alt="calu" class="picture"/></button>
    <div class="content">
      <h1 style="margin-top: 12%;">NEW</h1>
    </div>
    </div> */}


    
    
    </>  
      
    );

   } 


export default App;
