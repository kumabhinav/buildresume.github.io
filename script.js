function addNewwEField(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder","Enter Here");
  newNode.setAttribute("rows",3);

  let weOb=document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewwEFieldpr(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");
    newNode.setAttribute("rows",3);
   
    let weOb=document.getElementById("pr");
    let weAddButtonOb = document.getElementById("prAddButton");
  
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewwEFieldaq(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");
    newNode.setAttribute("rows",3);
   
    let weOb=document.getElementById("AQ");
    let weAddButtonOb = document.getElementById("aqAddButton");
  
    weOb.insertBefore(newNode,weAddButtonOb);
  
  }

//   --------generate CV---------------

function generateCV(){
   
    let nameField= document.getElementById('nameField');
    let nameT1 = document.getElementById('nameT1');
    let contactField= document.getElementById('contactField');
    let addressField= document.getElementById('addressField');
    let emailField= document.getElementById('emailField');
    let fbField=document.getElementById('fbField');
    let instaField= document.getElementById('instaField');
    let LinkedField=document.getElementById('LinkedField');
    let gitField = document.getElementById('gitField');
    let objectiveField=document.getElementById('objectiveField').value;
    var fileField= document.getElementById('imgField');


    let gitFieldval=gitField.value;
    let LinkedFieldval=LinkedField.value;
    let instaFieldval=instaField.value;
    let fbFieldval= fbField.value;
    let fileFieldval = fileField.value;
    let nameFieldval= nameField.value;
    let contactFieldval=contactField.value;
    let addressFieldval=addressField.value;
    let emailFieldval= emailField.value;
    nameT1.innerHTML=nameFieldval;

    // direct
    document.getElementById('nameT2').innerHTML=nameFieldval;
    document.getElementById('contactT').innerHTML=contactFieldval;
    document.getElementById('emailT').innerHTML=emailFieldval;
    document.getElementById('addressT').innerHTML=addressFieldval;
    document.getElementById('fbT').innerHTML=fbFieldval;
    document.getElementById('instaT').innerHTML=instaField;
    document.getElementById('LinkedT').innerHTML=LinkedFieldval;
    document.getElementById('instaT').innerHTML=instaField;
    document.getElementById('objectiveT').innerHTML=objectiveField;
    document.getElementById('gitT').innerHTML=gitFieldval;
   
    let prs=document.getElementsByClassName('prField');
        let wes=document.getElementsByClassName('weField');

    let str='';
    
    //-------------------------------Check Validity-------------------------------------------------------------------------------------------------------->


    if (nameFieldval === "") {
        
        setErrorMsg(nameField, 'username cannot be blank');
    }
    else if(nameFieldval.length < 3){
        setErrorMsg(nameField,'Invalid name');
    }
    else {
        setSucessMsg(nameField);
    }

    if(contactFieldval===""){
        setErrorMsg(contactField, 'Contact field cannot be blank')
    }
    
    else if(contactFieldval.length ===10){
        setSucessMsg(contactField);
    }
    else{
        setErrorMsg(contactField,'Please enter valid number');
       
    }
    if(addressFieldval===""){
        setErrorMsg(addressField,'Address Field cannot be empty');
    }
    else if(addressFieldval.length < 5){
        setErrorMsg(addressField,'Enter valid Address');
    }
    else{
        setSucessMsg(addressField);
    }
    if(emailFieldval===""){
        setErrorMsg(emailField,'Email cannot be empty');
    }
    else{
        setSucessMsg(emailField);
    }
    if(fileFieldval.length === 0 ){
    setErrorMsg(fileField,'no file selected');
    }
    else{
        setSucessMsg(fileField);
    }

    if(fbFieldval===""){
        setErrorMsg(fbField,'This field cannot be Empty');
    }

    var FBurl = /^(http|https)\:\/\/www.facebook.com\/.*/i;
    if(!fbFieldval.match(FBurl)) {
        setErrorMsg(fbField,'Not a valid URL')
        
        }

    else if(fbFieldval.length < 10){
        setErrorMsg(fbField, 'Enter valid URL')
    }
    else{
        setSucessMsg(fbField);
    }
       
    if(LinkedFieldval===""){
        setErrorMsg(LinkedField,'This field cannot be Empty');
    }

    var Linkurl = '(https?:\\/\\/(www.)?linkedin.com\\/(mwlite\\/|m\\/)?in\\/[a-zA-Z0-9_.-]+\\/?)';
     if(!LinkedFieldval.match(Linkurl)){
        setErrorMsg(LinkedField,'Please enter valid URL');
    }


    else{
        setSucessMsg(LinkedField);
    }
    if(instaFieldval===""){
        setErrorMsg(instaField,'This field cannot be empty')
    }
    var instaurl =/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;

    if(!instaFieldval.match(instaurl)){
      setErrorMsg(instaField,'Please enter valid URL');
    }
    else{
        setSucessMsg(instaField);
    }
    
    if(gitFieldval===""){
        setErrorMsg(gitField,'This field cannot be empty')
    }
// ------------------------------------------------------------------------------------------------------------------------------------------------------------->
    for(let e of wes){
        str =str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;

    let aqs=document.getElementsByClassName('eqField');
    let str1="";
    
    for(let e of aqs)
{
    str1+=`<li> ${e.value} </li>`;
}
    document.getElementById('aqT').innerHTML=str1;

    str2 ="";
    for(let e of prs){
        str2+=`<li> ${e.value}</li>`;
    }
    document.getElementById('prT').innerHTML=str2;
    // -----------Set Image--------------------

    let file=document.getElementById('imgField').files[0];
    console.log(file);
        let reader = new FileReader()

    reader.readAsDataURL(file);
    console.log(reader.result);

    // ---set image to template

    // document.getElementById('imgT').src=reader.result;
    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;

        
    }



document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}
// error

function setErrorMsg(input, errormsgs) {
 
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-group error";
    small.innerText = errormsgs;
    

}

// success msg
function setSucessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-group sucess";
}

// print CV

function printCV(){
    // window.print();
    const cv=document.getElementById('cv-template');
    
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
    html2pdf().from(cv).set(opt).save();
}



function darkmode() {
    var element = document.getElementById('cv-form');
    element.classList.toggle("darkmode");
  }