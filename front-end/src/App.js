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
    <div class = "middle1"> 
      <div class = "header" id="navlist">
        <button class = "box00" href="#">Home</button>
        <button class = "box0" href="#">Class: IX</button>
        <button class = "box0" href="#">Class: X</button>
        <button class = "box0" href="#">Class: XI</button>
        <button class = "box0" href="#">Class: XII</button>
        
    <form class = "m" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search..."
            name="s"
        />
        <button>Search</button>
    </form>

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

    
      

   <div class="container">
      <button><img src={require('./img/plus.png')} alt="calu" class="picture"/></button>
        <div class="content">
          <h1 class="new">NEW</h1>
        </div>
      </div>


    </div>

      {/* <<div class="container">

      <div class="content">
        <h1 style="margin-top: 12%;">NEW</h1>
      </div>
      </div> */}

     

      
    
    
    </>  
      
    );

   } 


export default App;
