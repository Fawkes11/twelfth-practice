
var fnmsg = document.getElementById("firstn");
var lnmsg = document.getElementById("lastn");
var emmsg = document.getElementById("emailempty");
var emvemsg = document.getElementById("emailverf");
var psmsg = document.getElementById("pass__msg");




    function validarcampos(first,last,email,pass){
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var valido = expReg.test(email);


        if(first.length == 0){
            fnmsg.style.display = "block";
        }

        else if(last.length == 0){
            lnmsg.style.display = "block";
        }

        else if(email.length == 0){
            emmsg.style.display = "block";
        }
        else if(valido == false){
            emvemsg.style.display = "block";
        }
        else if(pass.length == 0){
            psmsg.style.display = "block";
        }
        else{
            alert("Datos correctos");
        }


    }
