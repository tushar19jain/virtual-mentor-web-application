export function validateUserCredentials(userData){
    console.log("In controller",userData)
    if(userData.role == " " || userData.name == " " || userData.email == " " || userData.password == " "){
        return false
    }else{
        return true
    }
}