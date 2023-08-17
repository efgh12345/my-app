export const handleFetchResponse = async (response) => {
  if (!response.ok) {
    const data = await response
    throw new Error(data.statusText || (data.status === 401 ? "Unauthorized" : "Something went wrong!"));
  } else {
    const data = response.json();
    return data;
  }
}

export async function getToken(state, code) {
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