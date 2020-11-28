
function vegrehajt(){
    let login = document.querySelector("#login").value;
    let logout = document.querySelector("#logout").value;

    if (!login) {
        window.alert("Kérjük adja meg a bejelentkezés dátumát!")
    }
    else if(!logout){
        window.alert("Kérjük adja meg a kijelentkezés dátumát!")
    }
    else{
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
           
            let emberek = document.getElementById('szemelyekszama').value;
        
            let szobaar = 4000;
    
            if(emberek <= 0){
                window.alert("Nem lehet 0 személyre foglalni!")
                document.getElementById("napok").innerHTML = " ";
            }
            
            else{
                let vege = emberek * szobaar *naps;
                vegee = vege.toString()
                document.getElementById("abszolutvegeosszeg").innerHTML = "Összsen " + vegee + " Ft-ba fog kerülni.";
                document.getElementById("kerdes").style.display = "block";
                document.getElementById("hide").style.display = "block";
                document.getElementById("hide2").style.display = "block";
            }
        }

    }
}

