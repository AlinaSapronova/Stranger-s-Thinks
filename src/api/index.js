



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
 
 
