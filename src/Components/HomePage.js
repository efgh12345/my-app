import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';
import { useEffect } from "react";
import "./homePage.css";

const HomePage = () => {
  const history = useHistory();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/landingPage')
    }
  }, [isAuthenticated, history])
  return (
    <div className="container">
      <button onClick={() => loginWithRedirect()}>Get Authorize</button>
    </div>
  );
};

export default HomePage;