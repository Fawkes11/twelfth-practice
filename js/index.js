
var fnmsg = document.getElementById("firstn");
var lnmsg = document.getElementById("lastn");
var emmsg = document.getElementById("emailempty");
var emvemsg = document.getElementById("emailverf");
var psmsg = document.getElementById("pass__msg");
var ic_fnm = document.getElementById("fnm");
var ic_lnm = document.getElementById("lnm");
var ic_ema = document.getElementById("ema");
var ic_pss = document.getElementById("pss");





    function validarcampos(first,last,email,pass){
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var valido = expReg.test(email);


        if(first.length == 0){
            fnmsg.style.display = "block";
            ic_fnm.style.display ="block";
            document.getElementById("firstname").style.borderColor = "hsl(0, 100%, 74%)";

        }else{
            fnmsg.style.display = "none";
            ic_fnm.style.display ="none";
            document.getElementById("firstname").style.borderColor = "hsl(154, 59%, 51%)";
             }

        if(last.length == 0){
            lnmsg.style.display = "block";
            ic_lnm.style.display ="block";
            document.getElementById("lastname").style.borderColor = "hsl(0, 100%, 74%)";
            
        }else{
            lnmsg.style.display = "none";
            ic_lnm.style.display ="none";
            document.getElementById("lastname").style.borderColor = "hsl(154, 59%, 51%)";
        }

        if(email.length == 0){
            emmsg.style.display = "block";
            ic_ema.style.display ="block";
            emvemsg.style.display = "none";
            document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)";
            
        }else if(valido == false){
            emmsg.style.display = "none";
            emvemsg.style.display = "block";
            ic_ema.style.display ="block";
            document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)";
        }
        else{
            emmsg.style.display = "none";
            emvemsg.style.display = "none";
            ic_ema.style.display ="none";
            document.getElementById("email").style.borderColor = "hsl(154, 59%, 51%)";
        }




        if(pass.length == 0){
            psmsg.style.display = "block";
            ic_pss.style.display ="block";
            document.getElementById("password").style.borderColor = "hsl(0, 100%, 74%)";
        }else{
            psmsg.style.display = "none";
            ic_pss.style.display ="none";
            document.getElementById("password").style.borderColor = "hsl(154, 59%, 51%)";
        }

        


    }
