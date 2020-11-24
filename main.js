let vege;

function vegrehajt(){
    let login = document.querySelector("#login").value;
    let logout = document.querySelector("#logout").value;

    login = Date.parse(login);
    logout = Date.parse(logout);


    if(login >= logout){
        window.alert("Próbáljon már meg később kijelentkezni mint bejelentkezni, legyen szíves! Jó kössz!");
    }
    else{
        let milliseconds = (logout-login);

        let days = (milliseconds / (1000*60*60*24));
        
        let naps = days.toString();
        
        document.getElementById('napok').innerHTML = naps + " napot.";
    }
}