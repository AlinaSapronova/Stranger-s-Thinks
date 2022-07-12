
export const cohortName = "2206-FTB-ET-WEB-FT";
export const apiURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export async function getPost() {
  try {
    const response = await fetch(`${apiURL}/posts`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${apiURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json()
    return result
    
  } catch (error) {
    console.error(error);
  }
};



export const registerUser = async (username,password) => {
  const response = await fetch(`${apiURL}/users/register`, {
    method:"POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  })
  const result = await response.json()
  console.log(result,"i'm from api index!!!")
  return result
  
}


export const getMessages = async (token) => {
  // console.log(token, "api token")
  const response = await fetch(`${apiURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const data = result.data;
  return data;
};


export async function sendMessage(token, postId, content) {
  console.log(postId)
  fetch(`${apiURL}/posts/${postId}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    message: {
      content: content
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}


export async function createNewPost(postObj, token) {
  console.log(postObj, "I'm a postObj")
  try {
  const response = await fetch(`${apiURL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: postObj.title,
        description: postObj.description,
        price: postObj.price,
        location: postObj.location,
        willDeliver: postObj.willDeliver,
      },
    }),
  }); 
  const result = await response.json();
  console.log(result);
  return result;

}catch(error){console.error(error)}
}
