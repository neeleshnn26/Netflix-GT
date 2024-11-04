import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
return(

<>
      <Header />
      <Outlet /> {/* This renders the child component of the route */}
</>
)
    
}
  ;
  export default Layout ;