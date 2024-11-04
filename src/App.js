import './App.css';

function App() {
//   const obj1={
//     width:'150px',
//     borderRadius:'20px',
//     marginRight:'20px'
// }
  return (
    <div>
      <div style={{ textAlign: "center", padding: '40px' }}>
        <h1>Yummy Blog</h1>
        <nav style={{ width: '100%', height: "40px", display: "flex", justifyContent: "space-around", alignItems: 'center' }}>
          <a>Home</a>
          <a>Page</a>
          <a>Features</a>
          <a>Category</a>
          <a>Archive</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </div>

      <div style={{ height: "530px", justifyContent: "space-evenly", display: 'flex', marginBottom: "40px" }}>
        <img src='https://images.unsplash.com/photo-1532980400857-e8d9d275d858?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww' />
        <img src='https://sincerelytori.com/wp-content/uploads/2023/02/3.-Dont-Not-Take-Advantage-of-Using-Prop.jpg' />
        <img src='https://images.squarespace-cdn.com/content/v1/534fe1eae4b0757a373ac77a/1458915943003-79EXWCMHKXOCVLMSH5XS/image-asset.jpeg' />
        <img src='https://cdn.shopify.com/s/files/1/0278/5404/5219/files/too_busy_copy_480x480.png?v=1627388966' />
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ position: "relative" }}>
          <img src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg' style={{ height: "200px", borderRadius: "15px" }} />
          <button>Food</button>
        </div>

        <div style={{ position: "relative" }}>
          <img src='https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg' style={{ height: "200px", borderRadius: "15px" }} />
          <button>Cooking</button>
        </div>

        <div style={{ position: "relative" }}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXtKCgSVPtHuYyTQ-1iDAJfiuHrHwJ9G5Yl8qcrTU9zyDx5tEnpM3TvIrNtytBHiJic2o' style={{ height: "200px", borderRadius: "15px" }} />
          <button>Life style</button>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div>
          <img src='https://themewagon.github.io/yummy/img/blog-img/1.jpg' style={{ borderRadius: "30px", height: "500px", marginLeft: "125px" }} />
        </div>

        <div style={{ textAlign: "center", height: "500px", width: "450px", marginLeft: "50px" }}>
          <h4 style={{ backgroundColor: "pink" }}>About Me</h4>
          <img src='https://themewagon.github.io/yummy/img/about-img/1.jpg' style={{ height: "280px", borderRadius: "50%" }} />
          <h4>Shopia Bernard</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
          <h4 style={{ backgroundColor: "pink" }}>Subscribe & Follow</h4>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "50px", alignContent: "center" }}>
        <div>
          <h1 style={{ marginLeft: "120px" }}>Boil The Kettle And Make A Cup Of Tea Folks,<br /> This Is Going To Be A Big One!</h1>
          <p style={{ marginLeft: "120px" }}>Tiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.</p>
        </div>

        <div style={{ textAlign: "center",  width: "450px", marginLeft: "125px", marginTop: "80px" }}>
          <h4 style={{ backgroundColor: "pink" }}>Populer Post</h4>

          <div style={{display:"flex"}}>
            <img src='https://themewagon.github.io/yummy/img/sidebar-img/1.jpg' style={{height:"200px", width:"250px", borderRadius:"40px"}}/>
            <h4>Top Wineries To Visit<br/>In England</h4>
          </div>

          {/* <div>
            <img src='https://themewagon.github.io/yummy/img/sidebar-img/2.jpg' style={{height:"200px", width:"250px", borderRadius:"40px"}}/>
          </div> */}
        </div>


      </div>
    <div style={{display:"flex" }}>
    <div style={{position:'relative'}}>
        <img src='https://themewagon.github.io/yummy/img/blog-img/2.jpg' style={{height:"250px", borderRadius:"40px", marginLeft:"120px"}}/>
        <h2 style={{marginLeft:'130px'}}>Where To Get The Best<br/> Sunday Roast In The<br/> Cotswolds</h2>
      </div>

      <div style={{position:'relative'}}> 
        <img src='https://themewagon.github.io/yummy/img/blog-img/3.jpg' style={{height:"250px", borderRadius:"40px", marginLeft:"30px"}}/>
        <h2 style={{marginLeft:"40px"}}>The Top Breakfast And<br/> Brunch Spots In Hove,<br/> Brighton</h2>
      </div>

    </div>

    <div style={{display:"flex"}}>
    <div style={{position:"relative"}}>
        <img src='https://themewagon.github.io/yummy/img/blog-img/4.jpg' style={{height:"250px", borderRadius:"40px", marginLeft:"120px"}}/>
        <h2 style={{marginLeft:'130px'}}>The 10 Best Pubs In The Lake<br/> District, Cumbria</h2>
      </div>

      <div style={{position:"relative"}}>
        <img src='https://themewagon.github.io/yummy/img/blog-img/5.jpg' style={{height:"250px", borderRadius:"40px", marginLeft:"30px"}}/>
        <h2 style={{marginLeft:'40px'}}>The 10 Best Brunch Spots In<br/> Newcastle, England</h2>
      </div>

    </div>
    
    </div>
  );
}

export default App;
