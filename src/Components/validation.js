const validation =(values)=>{
let error={};
if(!values.username){
    error.username="UserName is required!!"
}
if(!values.email){
    error.email=" Email is required!!"
}else if(!/\S+@\S+\.\S+/.test(values.email)){
    error.email=" That Not Email!!"

}
if(!values.password){
    error.password=" password is required!!"
}else if(values.password.length <5){
    error.password=" your password is short"

}
if(!values.re_password){
    error.re_password=" Enter your password again!!"
}else if(values.re_password != values.password){
    error.re_password=" Not the same password"

}

    return error;
}
export default validation;