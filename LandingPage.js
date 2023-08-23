import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { getToken, getUserDetails, updateUser } from "../Registry";
import "./homePage.css";

const LandingPage = () => {
  const { state, code } = useParams();
  const [token, setToken] = useState(false);
  const [userData, setUserData] = useState();
  const { logout } = useAuth0();

  let updatedData;

  const handleUpdate = () => {
    updateUser(updatedData).then((response) => {
      if (response.success === true) {
        alert('Successfully updated!');
      } else
        alert('Something went wrong!');
    })
  }

  useEffect(() => {
    if (state && code) {
      console.log(state, code);
      getToken(state, code).then((response) => {
        setToken(response.accessToken)
        getUserDetails(token).then((response) => {
          setUserData(response.data);
        })
      })
    }
  }, [state, code])

  return (
    <div className="container">
      {userData && (
        <div>
          <h1>User Details</h1>
          <h3>{userData}</h3>
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
      <div>
        <button onClick={()=> logout()}>Logout</button>
      </div>
    </div>
  );
};

export default LandingPage;