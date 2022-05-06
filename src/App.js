import React from 'react'
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Company from "./pages/companys/companys";
// import Profile from "./pages/profile/Profile";
import Register from "./pages/register/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
  import { useContext } from "react";
  import { AuthContext } from "./context/AuthContext";

function App() {
   const { user } = useContext(AuthContext);

return (
<Router>
<Switch>
<Route exact path="/" component={Home}>
</Route>
<Route  path="/companys" component={Company}>
</Route>
<Route path="/Register" component={Register}>
{/* {user ? <Redirect to="/" />: <Register /> } */}
</Route>
<Route path="/Login"component={Login} >
{/* {user ? <Redirect to="/" />: <Login /> } */}
</Route>
</Switch>
</Router>
)
  // const { user } = useContext(AuthContext);
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" element={<Home />}>
//           {/* {user ? <Home /> : <Register />} */}
//         </Route>
//         <Route path="/login" element={<Login />}>
//           {/* {user ? <Redirect to="/" /> : <Login />}*/}
//           </Route>
//         <Route path="/register" element={<Register />}>
//           {/* {user ? <Redirect to="/" /> : <Register />} */}
//         </Route>
//         {/* <Route path="/profile/:username">
//           <Profile />
//         </Route> */}
//       </Switch>
//     </Router>
//   );
// }
}
export default App;
