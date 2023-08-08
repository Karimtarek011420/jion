var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var signUpButton =document.getElementById('signUpButton');
var allRequired = document.getElementById('allRequired');
var success = document.getElementById('success');
var exists =document.getElementById('exists');
var textName =document.getElementById('textName');
var textEmail =document.getElementById('textEmail');
var Data =[];
signUpButton.addEventListener('click',signUp);
userName.addEventListener('keyup',validationName);
userEmail.addEventListener('keyup',validationEmail);
function addData(){
    productData={
        name:userName.value,
        Email:userEmail.value,
        Password:userPassword.value,
    };
    Data.unshift(productData);
    localStorage.setItem("Datainfo",JSON.stringify(Data));
}
if(localStorage.getItem("Datainfo")!= null){
    Data=JSON.parse(localStorage.getItem("Datainfo"))
}
function signUp(){
    if(userName.value=="" || userEmail.value=="" || userPassword.value ==""){
        inputempty()
    }
    else {
        inputfill();
        addexist();
    }
}
function inputempty(){
    allRequired.classList.remove ("d-none");
    success.classList.add ("d-none");
    exists.classList.add ("d-none");
}
function inputfill(){
success.classList.remove ("d-none");
allRequired.classList.add ("d-none");
exists.classList.add ("d-none");

}
function addexist(){
    var box = false;
    for(var i=0;i<Data.length;i++){
        if(userEmail.value==Data[i].Email){
            box=true;
            break;
        }}
    if(box==true){
        exists.classList.remove ("d-none");
        allRequired.classList.add ("d-none");
        success.classList.add ("d-none");
    }
    else{
        addData();
    }
}
function validationName(){
    var nameRegex = /^[A-Z][a-z]{2,8}$/
    if(!nameRegex.test(userName.value)){
        signUpButton.disabled ="true";
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        textName.classList.remove("d-none");
    }else {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        textName.classList.add("d-none");
    }
}
function validationEmail(){
    var passRejex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,10}$/;
    if(!passRejex.test(userEmail.value)){
        signUpButton.disabled ="true";
        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        textEmail.classList.remove("d-none");
    }else {
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        textEmail.classList.add("d-none");
    }
}






