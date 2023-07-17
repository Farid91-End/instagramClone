import React, { Suspense } from 'react'
import './App.css'
// import { About, Career, Contacts, Layout, Main, News, Objects, Reviews, Services } from './Routes/Routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Nothing from './Pages/Nothing/Nothing'
import { useTranslation } from 'react-i18next'
import { Add, Direct, EditPassword, EditProfile, Home, Layout, Like, Login, Message, Profile, SignUp, Top } from './Routes/Routes'
import Reels from './Pages/Reels/Reels'
// import { About, Catalog, Contacts, Job, Layout, News, Nothing } from './Routes/Routes'
// import Abc from './Pages/Abc/Abc'

const router =createBrowserRouter ([
  {
    path: "/signUp",
    element: <Suspense fallback={ <div>Loading . . .</div> }> <SignUp/> </Suspense>
  },
  {
    path: "/login",
    element: <Suspense fallback={ <div>Loading . . .</div> }> <Login/> </Suspense>
  },
  {
    path: "/",
    element: <Suspense fallback={ <div>Loading . . .</div> }> <Layout/> </Suspense>,
    children: [
      {
        index:true,
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Home/> </Suspense>
      },

      {
        path: "message",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Message/> </Suspense>
      },

      {
        path: "add",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Add/> </Suspense>
      },

      {
        path: "top",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Top/> </Suspense>
      },

      {
        path: "like",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Like/> </Suspense>
      },
      {
        path: "profile",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Profile/> </Suspense>
      },
      {
        path: "editProfile",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <EditProfile/> </Suspense>
      },
      {
        path: "editPassword",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <EditPassword/> </Suspense>
      },
      {
        path: "direct",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Direct/> </Suspense>
      },
      {
        path: "reels",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Reels/> </Suspense>
      },
      
    ]
  }
]) 

const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
