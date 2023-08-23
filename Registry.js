export const handleFetchResponse = async (response) => {
  debugger;
  console.log(response);
  if (!response.ok) {
    const data = await response
    console.log(data);
    throw new Error(data.statusText || (data.status === 401 ? "Unauthorized" : "Something went wrong!"));
  } else {
    const data = response.json();
    return data;
  }
}

export async function getAuthorize() {
  const response = await fetch(`https://dev-crkwrlwas2iyxiqz.us.auth0.com/authorize`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "response_type": "code",
      "client_id":"uuQfpU8GWluxOtgmgrqS5xVxKP2DAhhQ",
      "redirect_uri": "http://127.0.0.1/success&scope=openid&state=abc"
    },
  });
  const data = await handleFetchResponse(response)
  return data
} 

export async function getToken(state, code) {
  debugger;
  const response = await fetch(`https://dev-crkwrlwas2iyxiqz.us.auth0.com/oauth/token`, {
    method: "POST",
    body: JSON.stringify({
      state: state,
      client_secret: "qkku7IOPH7RL-tax6_caxKMTKs528EGBkSakMqcCevu0uApWe1iQ-LMw5uJidAvs",
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://127.0.0.1/success&client_id=uuQfpU8GWluxOtgmgrqS5xVxKP2DAhhQ"
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = await handleFetchResponse(response)
  return data
}

export async function getUserDetails(accessToken) {
  const response = await fetch(`/users/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
  });
  const data = await handleFetchResponse(response)
  return data
}

export async function updateUser(updatedData) {
  const response = await fetch(`/users/update/`, {
    method: "PUT",
    body: JSON.stringify(updatedData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await handleFetchResponse(response)
  return data
}