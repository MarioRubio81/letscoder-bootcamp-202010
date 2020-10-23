(function(){

//ROOT
    var root = document.getElementById("root");

//TITLE
    var title =mountTitle(function(){
        root.lastChild.replaceWith(access)
    });
    
    root.append(title);

//ACCESS
    var access = mountAcces(function(){
        access.replaceWith(register)
    },function(){
        access.replaceWith(login)    
    });

    root.append(access);

    
//REGISTER
    var register = mountRegister(function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function (error) {
            if (error)
                alert(error.message)
            else {
                register.classList.add('off');

                confirm.classList.remove('off');
            }
        })
    });
    

//REGISTER CONFIRM
    var confirm = mountRegisterConfirm(function () {
        confirm.classList.add('off');

        login.classList.remove('off');
    });


//LOGIN 
    var login = mountLogin(function (email, password) {
        authenticateUser(email, password, function(error, token) {
            if (error)
                alert(error.message)
            else {
                login.classList.add('off');
        
                welcome.classList.remove('off');
            }
        })
    })

//WELCOME
    var welcome = mountWelcome();
    
})();