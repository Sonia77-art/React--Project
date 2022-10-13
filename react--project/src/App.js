import food from './food.png';
import './App.css';
import Menu from './Components/Menu';
import SearchBar from './Components/SearchBar';
import OrderButton from './Components/OrderButton';


function App() {
  return ( 
    <>
 <header className="App-header"> 
 <SearchBar text= " "> </SearchBar>

  <div className="Nav">
 <Menu text="Menu">
 <ul>
   <li>Milk</li>
     <li>Meat</li>
   <li>Vegtables</li>
 </ul> 
</Menu>

<Menu text="Contact Us"> 
 <li>Phone </li>
 <li>Email</li>
 <li>Messages</li>
</Menu>

<Menu text="About Us">
     <li>Location</li>
     <li>History</li>
     <li>Branches</li>

 </Menu>

<Menu text="Services">
    <li>Dining</li>
    <li>Takeaway</li>
    
</Menu>

    </div>
    </header>


    <div>
         <h1>THE
          <br /> 
          <spam>GROCERY TOWN</spam> 
        </h1>

        <OrderButton> "Order Your Food" </OrderButton>
        <Menu text = "Order Oline"></Menu>
        
    </div>
    
    <div>
        <img src= {food}
         alt="food.png"
         width= "400"
         height="600" >

    </img>
    
       </div>


         

    </> 
              
              
  );
}




export default App;

