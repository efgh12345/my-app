import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';
import { useEffect } from "react";
import { getAuthorize } from "../Registry";
import "./homePage.css";

const HomePage = () => {
  debugger;
  console.log("hey");
  const history = useHistory();
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  useEffect(() => {
    console.log("hey");
    if (isAuthenticated) {
      console.log(user);
      history.push('/landingPage')
    }
  }, [isAuthenticated])
  const handleAuthorize = () => {
    getAuthorize().then((res)=>{
      console.log(res);
    })
  }
  return (
    <div className="container">
      <button onClick={()=>loginWithRedirect()}>Get Authorize</button>

    </div>
  );
};

export default HomePage;