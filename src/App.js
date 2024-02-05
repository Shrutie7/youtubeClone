import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Store from "./utils/Store";
import { toggleMenu } from './utils/appSlice';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
function App() {

const appRouter = createBrowserRouter([
  {
path: '/',
element:<Body/>,
children:[
  {

    path:"/",
    element:<MainContainer/>
  },
  {
    path:"/watch",
    element:<WatchPage/>

  }
]
  },
  {

  }
])

  return (
<Provider store={Store}>
      <div className="App">
        <div style={{ position: 'sticky !important', top: "0", zIndex: "9999!important" }}>
          <Head />
        </div>

        <div style={{ position: 'relative', zIndex: "0" }}>
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>



  );
}

export default App;



/*
* Head 
* Body
* Sidebar
*    -Menu Items
* MainConatiner
*    -ButtonsList
*    -VideoContainer
*       -VideoCard



*/