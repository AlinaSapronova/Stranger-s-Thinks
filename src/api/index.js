



export const cohortName = "2206-FTB-ET-WEB-FT";
export const apiURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


 export async function getPost(){
  try{const response = await  fetch(`${apiURL}/posts`)
  const result = await response.json()
  console.log(result)
  return result}
  catch (error){
    console.log(error);

  }
  
  }

  export const getProfile= async(token) => {
    const response = await fetch(`${apiURL}/users/me`,{
      headers: {"Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
      }
    })
    const result = await response.json()
    const data= result.data
    return data
  }
 
