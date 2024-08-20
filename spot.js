let cards = document.querySelectorAll(".cards");
let others = document.querySelectorAll(".others");
let btn = document.querySelector(".sbtn");
let search =document.querySelector(".sr");
let form =document.querySelector("form");
let fp =document.querySelector(".frontPage");
let full = document.querySelector(".full");
let head = document.querySelector(".top");
let home = document.querySelector(".navbtn");

let con1 =document.querySelector(".content-H");
let con2 =document.querySelector(".content-R");
let con3 =document.querySelector(".content-J");
let con4 =document.querySelector(".content-D");

let inpu ="";
form.addEventListener("submit",function(event){
    event.preventDefault();
    let inp =document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value);
    full.classList.add("back");
    fp.classList.add("front");
    head.classList.add("back");
    console.log(inp.value);
    inpu=inp.value;
    mainHR.classList.remove("new-all");
        mainHS.classList.remove("new-all");
        mainHBS.classList.remove("new-all");
        mainHPP.classList.remove("new-all");
        mainHT.classList.remove("new-all");
        mainHH.classList.remove("new-all");
        mainHHO.classList.remove("new-all");
        mainHC.classList.remove("new-all");
        mainHPS.classList.remove("new-all");
        mainHHOS.classList.remove("new-all");
        mainHRS.classList.remove("new-all");
        mainHM.classList.remove("new-all");
        mainHA.classList.remove("new-all");
        mainHB.classList.remove("new-all");
        mainHU.classList.remove("new-all");
        mainHRE.classList.remove("new-all");
        mainRR.classList.remove("new-all");
        mainRS.classList.remove("new-all");
        mainRBS.classList.remove("new-all");
        mainRPP.classList.remove("new-all");
        mainRT.classList.remove("new-all");
        mainRH.classList.remove("new-all");
        mainRHO.classList.remove("new-all");
        mainRC.classList.remove("new-all");
        mainRPS.classList.remove("new-all");
        mainRHOS.classList.remove("new-all");
        mainRRS.classList.remove("new-all");
        mainRM.classList.remove("new-all");
        mainRA.classList.remove("new-all");
        mainRB.classList.remove("new-all");
        mainRU.classList.remove("new-all");
        mainRRE.classList.remove("new-all");
        mainJR.classList.remove("new-all");
        mainJS.classList.remove("new-all");
        mainJBS.classList.remove("new-all");
        mainJPP.classList.remove("new-all");
        mainJT.classList.remove("new-all");
        mainJH.classList.remove("new-all");
        mainJHO.classList.remove("new-all");
        mainJC.classList.remove("new-all");
        mainJPS.classList.remove("new-all");
        mainJHOS.classList.remove("new-all");
        mainJRS.classList.remove("new-all");
        mainJM.classList.remove("new-all");
        mainJA.classList.remove("new-all");
        mainJB.classList.remove("new-all");
        mainJU.classList.remove("new-all");
        mainJRE.classList.remove("new-all");
        mainDR.classList.remove("new-all");
        mainDS.classList.remove("new-all");
        mainDBS.classList.remove("new-all");
        mainDPP.classList.remove("new-all");
        mainDT.classList.remove("new-all");
        mainDH.classList.remove("new-all");
        mainDHO.classList.remove("new-all");
        mainDC.classList.remove("new-all");
        mainDPS.classList.remove("new-all");
        mainDHOS.classList.remove("new-all");
        mainDRS.classList.remove("new-all");
        mainDM.classList.remove("new-all");
        mainDA.classList.remove("new-all");
        mainDB.classList.remove("new-all");
        mainDU.classList.remove("new-all");
        mainDRE.classList.remove("new-all");
    if(inp.value=="hazaribagh"){
        con1.classList.add("content-H");
        con2.classList.add("content-R");
        con3.classList.add("content-J");
        con4.classList.add("content-D")
        con2.classList.remove("c");
        con3.classList.remove("c");
        con4.classList.remove("c");
        con1.classList.remove("content-H");
        con1.classList.add("c");
    }

    else if(inp.value=="ranchi"){
        con1.classList.add("content-H");
        con2.classList.add("content-R");
        con3.classList.add("content-J");
        con4.classList.add("content-D")
        con1.classList.remove("c");
        con3.classList.remove("c");
        con4.classList.remove("c");
        con2.classList.remove("content-R");
        con2.classList.add("c");
    }

    else if(inp.value=="jamshedpur"){
        con1.classList.add("content-H");
        con2.classList.add("content-R");
        con3.classList.add("content-J");
        con4.classList.add("content-D")
        con1.classList.remove("c");
        con2.classList.remove("c");
        con4.classList.remove("c");
        con3.classList.remove("content-J");
        con3.classList.add("c");
    }

    else if(inp.value=="dhanbad"){
        con1.classList.add("content-H");
        con2.classList.add("content-R");
        con3.classList.add("content-J");
        con4.classList.add("content-D")
        con1.classList.remove("c");
        con2.classList.remove("c");
        con3.classList.remove("c");
        con4.classList.remove("content-D");
        con4.classList.add("c");
    }

    else{
        alert("Search different location");
        fp.classList.remove("hi");
        head.classList.remove("back");
                mainHR.classList.remove("new-all");
                mainHS.classList.remove("new-all");
                mainHBS.classList.remove("new-all");
                mainHPP.classList.remove("new-all");
                mainHT.classList.remove("new-all");
                mainHHO.classList.remove("new-all");
                mainHH.classList.remove("new-all");
                mainHC.classList.remove("new-all");
                mainHPS.classList.remove("new-all");
                mainHHOS.classList.remove("new-all");
                mainHRS.classList.remove("new-all");
                mainHM.classList.remove("new-all");
                mainHA.classList.remove("new-all");
                mainHB.classList.remove("new-all");
                mainHU.classList.remove("new-all");
                mainHRE.classList.remove("new-all");
                mainRR.classList.remove("new-all");
                mainRS.classList.remove("new-all");
                mainRBS.classList.remove("new-all");
                mainRPP.classList.remove("new-all");
                mainRT.classList.remove("new-all");
                mainRHO.classList.remove("new-all");
                mainRH.classList.remove("new-all");
                mainRC.classList.remove("new-all");
                mainRPS.classList.remove("new-all");
                mainRHOS.classList.remove("new-all");
                mainRRS.classList.remove("new-all");
                mainRM.classList.remove("new-all");
                mainRA.classList.remove("new-all");
                mainRB.classList.remove("new-all");
                mainRU.classList.remove("new-all");
                mainRRE.classList.remove("new-all");
                mainJR.classList.remove("new-all");
                mainJS.classList.remove("new-all");
                mainJBS.classList.remove("new-all");
                mainJPP.classList.remove("new-all");
                mainJT.classList.remove("new-all");
                mainJHO.classList.remove("new-all");
                mainJH.classList.remove("new-all");
                mainJC.classList.remove("new-all");
                mainJPS.classList.remove("new-all");
                mainJHOS.classList.remove("new-all");
                mainJRS.classList.remove("new-all");
                mainJM.classList.remove("new-all");
                mainJA.classList.remove("new-all");
                mainJB.classList.remove("new-all");
                mainJU.classList.remove("new-all");
                mainJRE.classList.remove("new-all");
                mainDR.classList.remove("new-all");
                mainDS.classList.remove("new-all");
                mainDBS.classList.remove("new-all");
                mainDPP.classList.remove("new-all");
                mainDT.classList.remove("new-all");
                mainDHO.classList.remove("new-all");
                mainDH.classList.remove("new-all");
                mainDC.classList.remove("new-all");
                mainDPS.classList.remove("new-all");
                mainDHOS.classList.remove("new-all");
                mainDM.classList.remove("new-all");
                mainDRS.classList.remove("new-all");
                mainDA.classList.remove("new-all");
                mainDB.classList.remove("new-all");
                mainDU.classList.remove("new-all");
                mainDRE.classList.remove("new-all");
                con1.classList.add("content-H");
                con2.classList.add("content-R");
                con3.classList.add("content-J");
                con4.classList.add("content-D");
                con1.classList.remove("c");
                con2.classList.remove("c");
                con3.classList.remove("c");
                con4.classList.remove("c");
    }
});

// expanding each section
let mainHR =document.querySelector(".main-section-Hresturant");
let mainHS =document.querySelector(".main-section-Hschool");
let mainHBS =document.querySelector(".main-section-Hbus");
let mainHPP =document.querySelector(".main-section-Hpetrolpump");
let mainHT =document.querySelector(".main-section-Htour");
let mainHHO =document.querySelector(".main-section-Hhospital");
let mainHH =document.querySelector(".main-section-Hhotel");
let mainHC =document.querySelector(".main-section-Hcollege");
let mainHPS =document.querySelector(".main-section-Hpolicestation");
let mainHHOS =document.querySelector(".main-section-Hhostel");
let mainHRS =document.querySelector(".main-section-Hrailway");
let mainHM=document.querySelector(".main-section-Hmall");
let mainHA =document.querySelector(".main-section-Hatm");
let mainHB =document.querySelector(".main-section-Hbank");
let mainHU =document.querySelector(".main-section-Huniversity");
let mainHRE =document.querySelector(".main-section-Hresort");
let mainRR =document.querySelector(".main-section-Rresturant");
let mainRS =document.querySelector(".main-section-Rschool");
let mainRBS =document.querySelector(".main-section-Rbus");
let mainRPP =document.querySelector(".main-section-Rpetrolpump");
let mainRT =document.querySelector(".main-section-Rtour");
let mainRHO =document.querySelector(".main-section-Rhospital");
let mainRH =document.querySelector(".main-section-Rhotel");
let mainRC =document.querySelector(".main-section-Rcollege");
let mainRPS =document.querySelector(".main-section-Rpolicestation");
let mainRHOS =document.querySelector(".main-section-Rhostel");
let mainRRS =document.querySelector(".main-section-Rrailway");
let mainRM=document.querySelector(".main-section-Rmall");
let mainRA =document.querySelector(".main-section-Ratm");
let mainRB =document.querySelector(".main-section-Rbank");
let mainRU =document.querySelector(".main-section-Runiversity");
let mainRRE =document.querySelector(".main-section-Rresort");
let mainJR =document.querySelector(".main-section-Jresturant");
let mainJS =document.querySelector(".main-section-Jschool");
let mainJBS =document.querySelector(".main-section-Jbus");
let mainJPP =document.querySelector(".main-section-Jpetrolpump");
let mainJT =document.querySelector(".main-section-Jtour");
let mainJHO =document.querySelector(".main-section-Jhospital");
let mainJH =document.querySelector(".main-section-Jhotel");
let mainJC =document.querySelector(".main-section-Jcollege");
let mainJPS =document.querySelector(".main-section-Jpolicestation");
let mainJHOS =document.querySelector(".main-section-Jhostel");
let mainJRS =document.querySelector(".main-section-Jrailway");
let mainJM=document.querySelector(".main-section-Jmall");
let mainJA =document.querySelector(".main-section-Jatm");
let mainJB =document.querySelector(".main-section-Jbank");
let mainJU =document.querySelector(".main-section-Juniversity");
let mainJRE =document.querySelector(".main-section-Jresort");
let mainDR =document.querySelector(".main-section-Dresturant");
let mainDS =document.querySelector(".main-section-Dschool");
let mainDBS =document.querySelector(".main-section-Dbus");
let mainDPP =document.querySelector(".main-section-Dpetrolpump");
let mainDT =document.querySelector(".main-section-Dtour");
let mainDHO =document.querySelector(".main-section-Dhospital");
let mainDH =document.querySelector(".main-section-Dhotel");
let mainDC =document.querySelector(".main-section-Dcollege");
let mainDPS =document.querySelector(".main-section-Dpolicestation");
let mainDHOS =document.querySelector(".main-section-Dhostel");
let mainDRS =document.querySelector(".main-section-Drailway");
let mainDM=document.querySelector(".main-section-Dmall");
let mainDA =document.querySelector(".main-section-Datm");
let mainDB =document.querySelector(".main-section-Dbank");
let mainDU =document.querySelector(".main-section-Duniversity");
let mainDRE =document.querySelector(".main-section-Dresort");


cards.forEach((card)=>{
    card.addEventListener("click",function(event){
        console.log(inpu);
        console.log(card.innerText);
        if((card.innerText == "Resturant") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHR.classList.add("new-all");
        }

        else if((card.innerText == "School") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHS.classList.add("new-all");
        }

        else if((card.innerText == "Bus Stand") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHBS.classList.add("new-all");
        }

        else if((card.innerText == "Petrol Pump") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHPP.classList.add("new-all");
        }
        
        else if((card.innerText == "Tourist Place") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHT.classList.add("new-all");
        }

        else if((card.innerText == "Hospital") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHHO.classList.add("new-all");
        }

        else if((card.innerText == "Hotel") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHH.classList.add("new-all");
        }

        else if((card.innerText == "College") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHC.classList.add("new-all");
        }

        else if((card.innerText == "Police Station") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHPS.classList.add("new-all");
        }

        else if((card.innerText == "Hostel") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHHOS.classList.add("new-all");
        }

        else if((card.innerText == "Railway Station") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHRS.classList.add("new-all");
        }

        else if((card.innerText == "Shopping Mall") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHM.classList.add("new-all");
        }

        else if((card.innerText == "ATM") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHA.classList.add("new-all");
        }

        else if((card.innerText == "Bank") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");

            mainHB.classList.add("new-all");
        }

        else if((card.innerText == "University") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHU.classList.add("new-all");
        }

        else if((card.innerText == "Resort") && (inpu == "hazaribagh")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHRE.classList.add("new-all");
        }

        else if((card.innerText == "Resturant") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRR.classList.add("new-all");
        }

        else if((card.innerText == "School") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRS.classList.add("new-all");
        }

        else if((card.innerText == "Bus Stand") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");1
            mainRBS.classList.add("new-all");
        }

        else if((card.innerText == "Petrol Pump") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRPP.classList.add("new-all");
        }
        
        else if((card.innerText == "Tourist Place") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRT.classList.add("new-all");
        }

        else if((card.innerText == "Hospital") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRHO.classList.add("new-all");
        }

        else if((card.innerText == "Hotel") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRH.classList.add("new-all");
        }

        else if((card.innerText == "College") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRC.classList.add("new-all");
        }

        else if((card.innerText == "Police Station") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRPS.classList.add("new-all");
        }

        else if((card.innerText == "Hostel") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRHOS.classList.add("new-all");
        }

        else if((card.innerText == "Railway Station") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRRS.classList.add("new-all");
        }

        else if((card.innerText == "Shopping Mall") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRM.classList.add("new-all");
        }

        else if((card.innerText == "ATM") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRA.classList.add("new-all");
        }

        else if((card.innerText == "Bank") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRB.classList.add("new-all");
        }

        else if((card.innerText == "University") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRU.classList.add("new-all");
        }

        else if((card.innerText == "Resort") && (inpu == "ranchi")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRRE.classList.add("new-all");
        }

        else if((card.innerText == "Resturant") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJR.classList.add("new-all");
        }

        else if((card.innerText == "School") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJS.classList.add("new-all");
        }

        else if((card.innerText == "Bus Stand") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJBS.classList.add("new-all");
        }

        else if((card.innerText == "Petrol Pump") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJPP.classList.add("new-all");
        }
        
        else if((card.innerText == "Tourist Place") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJT.classList.add("new-all");
        }

        else if((card.innerText == "Hospital") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJHO.classList.add("new-all");
        }

        else if((card.innerText == "Hotel") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJH.classList.add("new-all");
        }

        else if((card.innerText == "College") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJC.classList.add("new-all");
        }

        else if((card.innerText == "Police Station") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJPS.classList.add("new-all");
        }

        else if((card.innerText == "Hostel") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJHOS.classList.add("new-all");
        }

        else if((card.innerText == "Railway Station") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJRS.classList.add("new-all");
        }

        else if((card.innerText == "Shopping Mall") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJM.classList.add("new-all");
        }

        else if((card.innerText == "ATM") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJA.classList.add("new-all");
        }

        else if((card.innerText == "Bank") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJB.classList.add("new-all");
        }

        else if((card.innerText == "University") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJU.classList.add("new-all");
        }

        else if((card.innerText == "Resort") && (inpu == "jamshedpur")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJRE.classList.add("new-all");
        }


        else if((card.innerText == "Resturant") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDR.classList.add("new-all");
        }

        else if((card.innerText == "School") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDS.classList.add("new-all");
        }

        else if((card.innerText == "Bus Stand") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDBS.classList.add("new-all");
        }

        else if((card.innerText == "Petrol Pump") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDPP.classList.add("new-all");
        }
        
        else if((card.innerText == "Tourist Place") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDT.classList.add("new-all");
        }

        else if((card.innerText == "Hospital") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDHO.classList.add("new-all");
        }

        else if((card.innerText == "Hotel") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDH.classList.add("new-all");
        }

        else if((card.innerText == "College") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDC.classList.add("new-all");
        }

        else if((card.innerText == "Police Station") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDPS.classList.add("new-all");
        }

        else if((card.innerText == "Hostel") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDHOS.classList.add("new-all");
        }

        else if((card.innerText == "Railway Station") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDRS.classList.add("new-all");
        }

        else if((card.innerText == "Shopping Mall") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDM.classList.add("new-all");
        }

        else if((card.innerText == "ATM") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDA.classList.add("new-all");
        }

        else if((card.innerText == "Bank") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDB.classList.add("new-all");
        }

        else if((card.innerText == "University") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDU.classList.add("new-all");
        }

        else if((card.innerText == "Resort") && (inpu == "dhanbad")){
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDRE.classList.add("new-all");
        }
    });
});

// ..................................inner cards

others.forEach((other)=>{
    other.addEventListener("click",function(event){
        console.log(inpu);
        console.log(other.innerText);
        if((other.innerText == "Resturant") && (inpu == "hazaribagh")){
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHR.classList.add("new-all");
        }

        else if((other.innerText == "School") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHS.classList.add("new-all");
        }

        else if((other.innerText == "Bus Stand") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHBS.classList.add("new-all");
        }

        else if((other.innerText == "Petrol Pump") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHPP.classList.add("new-all");
        }
        
        else if((other.innerText == "Tourist Place") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHT.classList.add("new-all");
        }

        else if((other.innerText == "Hospital") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHHO.classList.add("new-all");
        }

        else if((other.innerText == "Hotel") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHH.classList.add("new-all");
        }

        else if((other.innerText == "College") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHC.classList.add("new-all");
        }

        else if((other.innerText == "Police Station") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHPS.classList.add("new-all");
        }

        else if((other.innerText == "Hostel") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHHOS.classList.add("new-all");
        }

        else if((other.innerText == "Railway Station") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHRS.classList.add("new-all");
        }

        else if((other.innerText == "Shopping Mall") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHM.classList.add("new-all");
        }

        else if((other.innerText == "ATM") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHA.classList.add("new-all");
        }

        else if((other.innerText == "Bank") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHB.classList.add("new-all");
        }

        else if((other.innerText == "University") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHU.classList.add("new-all");
        }

        else if((other.innerText == "Resort") && (inpu == "hazaribagh")){
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainHRE.classList.add("new-all");
        }

        else if((other.innerText == "Resturant") && (inpu == "ranchi")){
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRR.classList.add("new-all");
        }

        else if((other.innerText == "School") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRS.classList.add("new-all");
        }

        else if((other.innerText == "Bus Stand") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");1
            mainRBS.classList.add("new-all");
        }

        else if((other.innerText == "Petrol Pump") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRPP.classList.add("new-all");
        }
        
        else if((other.innerText == "Tourist Place") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRT.classList.add("new-all");
        }

        else if((other.innerText == "Hospital") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRHO.classList.add("new-all");
        }

        else if((other.innerText == "Hotel") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRH.classList.add("new-all");
        }

        else if((other.innerText == "College") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRC.classList.add("new-all");
        }

        else if((other.innerText == "Police Station") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRPS.classList.add("new-all");
        }

        else if((other.innerText == "Hostel") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRHOS.classList.add("new-all");
        }

        else if((other.innerText == "Railway Station") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRRS.classList.add("new-all");
        }

        else if((other.innerText == "Shopping Mall") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRM.classList.add("new-all");
        }

        else if((other.innerText == "ATM") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRA.classList.add("new-all");
        }

        else if((other.innerText == "Bank") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRB.classList.add("new-all");
        }

        else if((other.innerText == "University") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRU.classList.add("new-all");
        }

        else if((other.innerText == "Resort") && (inpu == "ranchi")){
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainRRE.classList.add("new-all");
        }

        else if((other.innerText == "Resturant") && (inpu == "jamshedpur")){
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJR.classList.add("new-all");
        }

        else if((other.innerText == "School") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJS.classList.add("new-all");
        }

        else if((other.innerText == "Bus Stand") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJBS.classList.add("new-all");
        }

        else if((other.innerText == "Petrol Pump") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJPP.classList.add("new-all");
        }
        
        else if((other.innerText == "Tourist Place") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJT.classList.add("new-all");
        }

        else if((other.innerText == "Hospital") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJHO.classList.add("new-all");
        }

        else if((other.innerText == "Hotel") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");

            mainJH.classList.add("new-all");
        }

        else if((other.innerText == "College") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");

            mainJC.classList.add("new-all");
        }

        else if((other.innerText == "Police Station") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJPS.classList.add("new-all");
        }

        else if((other.innerText == "Hostel") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJHOS.classList.add("new-all");
        }

        else if((other.innerText == "Railway Station") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJRS.classList.add("new-all");
        }

        else if((other.innerText == "Shopping Mall") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJM.classList.add("new-all");
        }

        else if((other.innerText == "ATM") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJA.classList.add("new-all");
        }

        else if((other.innerText == "Bank") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJB.classList.add("new-all");
        }

        else if((other.innerText == "University") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJU.classList.add("new-all");
        }

        else if((other.innerText == "Resort") && (inpu == "jamshedpur")){
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainJRE.classList.add("new-all");
        }

        else if((other.innerText == "Resturant") && (inpu == "dhanbad")){
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDR.classList.add("new-all");
        }

        else if((other.innerText == "School") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDS.classList.add("new-all");
        }

        else if((other.innerText == "Bus Stand") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDBS.classList.add("new-all");
        }

        else if((other.innerText == "Petrol Pump") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDPP.classList.add("new-all");
        }
        
        else if((other.innerText == "Tourist Place") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDT.classList.add("new-all");
        }

        else if((other.innerText == "Hospital") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDHO.classList.add("new-all");
        }

        else if((other.innerText == "Hotel") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDH.classList.add("new-all");
        }

        else if((other.innerText == "College") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDC.classList.add("new-all");
        }

        else if((other.innerText == "Police Station") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDPS.classList.add("new-all");
        }

        else if((other.innerText == "Hostel") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDHOS.classList.add("new-all");
        }

        else if((other.innerText == "Railway Station") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDRS.classList.add("new-all");
        }

        else if((other.innerText == "Shopping Mall") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDM.classList.add("new-all");
        }

        else if((other.innerText == "ATM") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDA.classList.add("new-all");
        }

        else if((other.innerText == "Bank") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDB.classList.add("new-all");
        }

        else if((other.innerText == "University") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDU.classList.add("new-all");
        }

        else if((other.innerText == "Resort") && (inpu == "dhanbad")){
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");
            mainDRE.classList.add("new-all");
        }
    });
});

let ct1 =document.querySelector(".city1");
let ct2 =document.querySelector(".city2");
let ct3 =document.querySelector(".city3");
let ct4 =document.querySelector(".city4");

ct1.addEventListener("click",function(event){
    con2.classList.remove("content-R");
    con2.classList.add("c");
    fp.classList.add("hi");
    head.classList.add("back");
    inpu = "ranchi";
});

ct2.addEventListener("click",function(event){
    con1.classList.remove("content-H");
    con1.classList.add("c");
    fp.classList.add("hi");
    head.classList.add("back");
    inpu = "hazaribagh";
});

ct3.addEventListener("click",function(event){
    con4.classList.remove("content-D");
    con4.classList.add("c");
    fp.classList.add("hi");
    head.classList.add("back");
    inpu = "dhanbad";
});

ct4.addEventListener("click",function(event){
    con3.classList.remove("content-J");
    con3.classList.add("c");
    fp.classList.add("hi");
    head.classList.add("back");
    inpu = "jamshedpur";
});

home.addEventListener("click", function(){
    fp.classList.remove("hi");
    head.classList.remove("back");
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");

});

let sitelogo = document.querySelector(".logo");

sitelogo.addEventListener("click", function(){
    fp.classList.remove("hi");
    head.classList.remove("back");
            mainHR.classList.remove("new-all");
            mainHS.classList.remove("new-all");
            mainHBS.classList.remove("new-all");
            mainHPP.classList.remove("new-all");
            mainHT.classList.remove("new-all");
            mainHHO.classList.remove("new-all");
            mainHH.classList.remove("new-all");
            mainHC.classList.remove("new-all");
            mainHPS.classList.remove("new-all");
            mainHHOS.classList.remove("new-all");
            mainHRS.classList.remove("new-all");
            mainHM.classList.remove("new-all");
            mainHA.classList.remove("new-all");
            mainHB.classList.remove("new-all");
            mainHU.classList.remove("new-all");
            mainHRE.classList.remove("new-all");
            mainRR.classList.remove("new-all");
            mainRS.classList.remove("new-all");
            mainRBS.classList.remove("new-all");
            mainRPP.classList.remove("new-all");
            mainRT.classList.remove("new-all");
            mainRHO.classList.remove("new-all");
            mainRH.classList.remove("new-all");
            mainRC.classList.remove("new-all");
            mainRPS.classList.remove("new-all");
            mainRHOS.classList.remove("new-all");
            mainRRS.classList.remove("new-all");
            mainRM.classList.remove("new-all");
            mainRA.classList.remove("new-all");
            mainRB.classList.remove("new-all");
            mainRU.classList.remove("new-all");
            mainRRE.classList.remove("new-all");
            mainJR.classList.remove("new-all");
            mainJS.classList.remove("new-all");
            mainJBS.classList.remove("new-all");
            mainJPP.classList.remove("new-all");
            mainJT.classList.remove("new-all");
            mainJHO.classList.remove("new-all");
            mainJH.classList.remove("new-all");
            mainJC.classList.remove("new-all");
            mainJPS.classList.remove("new-all");
            mainJHOS.classList.remove("new-all");
            mainJRS.classList.remove("new-all");
            mainJM.classList.remove("new-all");
            mainJA.classList.remove("new-all");
            mainJB.classList.remove("new-all");
            mainJU.classList.remove("new-all");
            mainJRE.classList.remove("new-all");
            mainDR.classList.remove("new-all");
            mainDS.classList.remove("new-all");
            mainDBS.classList.remove("new-all");
            mainDPP.classList.remove("new-all");
            mainDT.classList.remove("new-all");
            mainDHO.classList.remove("new-all");
            mainDH.classList.remove("new-all");
            mainDC.classList.remove("new-all");
            mainDPS.classList.remove("new-all");
            mainDHOS.classList.remove("new-all");
            mainDM.classList.remove("new-all");
            mainDRS.classList.remove("new-all");
            mainDA.classList.remove("new-all");
            mainDB.classList.remove("new-all");
            mainDU.classList.remove("new-all");
            mainDRE.classList.remove("new-all");
            con1.classList.add("content-H");
            con2.classList.add("content-R");
            con3.classList.add("content-J");
            con4.classList.add("content-D");
            con1.classList.remove("c");
            con2.classList.remove("c");
            con3.classList.remove("c");
            con4.classList.remove("c");

});