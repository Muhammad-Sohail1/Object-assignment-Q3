
const Object1 = {
        
};

function firstform(){

                     const firstname = document.querySelector(".fname").value;
                     const lastname = document.querySelector(".lname").value;
                     const email = document.querySelector(".email").value;
                     const conem = document.querySelector(".conem").value;
                     const password = document.querySelector(".password").value;
                     const conpass = document.querySelector(".conpasss").value;

                     Object1['Email'] = email;
                     Object1['Confirm Email'] = conem;
                     Object1['First Name'] = firstname;
                     Object1['Last Name'] = lastname;
                     
                     console.log("First Name" +" " + "-" +" " +firstname)
                     console.log("Last Name" +" " + "-" +" " + lastname);
                     console.log("Email" +" " + "-" +" " + email);
                     console.log("Confirm Email" +" " + "-" +" " + conem);
                     console.log("Password" +" " + "-" +" " + password);
                     console.log("Confirm Password" +" " + "-" +" " + conpass)


                    if(password === conpass){

                    Object1['Password'] = password;
                    Object1['Confirm Password'] = conpass;

                    }else{

                        alert("No Matched Password")
                    }
                     
}

                // form 2

function form2(){

    const getid = document.getElementById("sel");
    const texts = getid.options[getid.selectedIndex].text;

    const getid2 = document.getElementById("selectbox");
    const txt = getid2.options[getid2.selectedIndex].text;

    const addres = document.querySelector(".addres").value;
    const addres2 = document.querySelector(".addres2").value;
    const city = document.querySelector(".city").value;

    const contry = document.getElementById("contrys");
    const t = contry.options[contry.selectedIndex].text;

    const postalcode = document.querySelector(".postalcode").value;
    const phone = document.querySelector(".phone").value;
    const mobile = document.querySelector(".mobile").value;



    Object1['State'] = texts;
    Object1['Nearest Office'] = txt;

    Object1['Address'] = addres;
    Object1['Address 2'] = addres2;
    Object1['City'] = city;

    Object1['Contry'] = t;

    Object1['Postal Code'] = postalcode;
    Object1['Phone'] = phone;
    Object1['Mobile Phone'] = mobile;

    console.log('Nearest Office' + " " + '-' +" " +txt)

    console.log("Contry Name" +" " +"-" +" " +t)
    console.log("Address" +" " +"-" +" " +addres)
    console.log("Address 2" +" " +"-" +" " + addres2)
    console.log("City" +" " +"-" +" " + city)
    console.log("State" +" " +"-" +" " + texts)
    console.log("Postal Code" +" " +"-" +" " + postalcode)
    console.log("Phone Number" +" " +"-" +" " + phone)
    console.log("Mobile Number" +" " +"-" +" " + mobile)
    
}



                    // FORM  3

    
function form3(){

    const box1 = document.querySelector(".selectbox3");
    const textbox = box1.options[box1.selectedIndex].text;

    const jobtitle = document. querySelector(".jobtitle").value;

    const relocate3 = document.getElementById("relocate3");
    const textrelocate3 = relocate3.options[relocate3.selectedIndex].text;

    const exper = document.getElementById("experiencebox");
    const expertext = exper.options[exper.selectedIndex].text;

    const workbox = document.querySelector(".work");
    const worktext = workbox.options[workbox.selectedIndex].text;

    const web = document.querySelector(".web").value;

    const agebox = document.querySelector(".age");
    const agetxt = agebox.options[agebox.selectedIndex].text;

    const otherselected = document.querySelector(".other").value;

    const getfile = document.getElementById("image").value;


    Object1['Categories'] = textbox;
    Object1['Job Title'] = jobtitle;
    Object1['Where is your Relocate'] = textrelocate3;
    Object1['Experience'] = expertext;
    Object1['Which Contry Do You Work In'] = worktext;
    Object1['WebSite'] = web;
    Object1['Age'] = agetxt;
    Object1['Other Selected Option'] = otherselected;
    Object1['File Uploads'] = getfile;



    console.log("Categories" +" " +"-" +" "+textbox);
    console.log("Job Title" +" " +"-" +" "+ jobtitle);
    console.log("Your Relocate" +" " +"-" +" "+ textrelocate3);
    console.log("Experience" +" " +"-" +" "+ expertext);
    console.log("Which Contry You Do Work" +" " +"-" +" "+ worktext);
    console.log("Web" +" " +"-" +" "+web);
    console.log("Age" +" " +"-" +" "+ agetxt);
    console.log("Other Information" +" " +"-" +" "+ otherselected);
    console.log("Your File" +" " +"-" +" "+ getfile);


}