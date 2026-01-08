import { Provider } from "react-redux"
import Body from "./components/Body"
import Header from "./components/Header"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import SearchVideo from "./components/SearchVideo"





function App() {
  const appRouter=createBrowserRouter(
    [
      {
        path:"/",
        element:<Body/>,
        children:[
          {
            path:"/",
            element:<MainContainer/>
          },
          {
            path:"watch",
            element:<WatchPage/>
          },
          {
            path:"searchvideos",
            element:<SearchVideo/>
          }
        ]
      }
    ]
  )
  

  return (
  
    <Provider store={store}>
    
    <RouterProvider router={appRouter} />
    </Provider>
    
  )
}

export default App
