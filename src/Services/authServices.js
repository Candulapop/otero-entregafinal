//import firebase from "../config/firebase";//

export const create = async (data) => {
   return await fetch("http://localhost:3000/users",{
      method: "POST",
      headers:{
         'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
   })
  
   }
   
export const autenticate = async (email,password) => {
   return fetch("http://localhost:3000/users/login", {
method: "POST",
headers: {
   "Content-Type": "application/json"
},
body: JSON.stringify({email, password}),
}).then((res)=>res.json());

}
export default autenticate

   /*return firebase
   .auth()
   .signInWithEmailAndPassword(email, password)
*/


/*export const login = async (email,password) => {
   const responseUser = await firebase
   .auth()
   .signInWithEmailAndPassword(email, password);
    return responseUser
*/

   /*const responseUser = await firebase
   .auth()
   .createUserWithEmailAndPassword(data.email,data.password);
   if(responseUser){
   await  firebase.firestore().collection("usuarios").add({
   name: data.name,
   lastname: data.lastname,
   email: data.email,
   password: data.password,
   userId: responseUser.user.uid,
  });
   }
  return responseUser.user.uid
  */
   //insertar el resto de los datos en base de datos//

