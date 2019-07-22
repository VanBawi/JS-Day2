// TODO: Validate this form




// eamil validation part
// function ValidateEmail(inputText){
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if(inputText.value.match(mailformat))
//   {
//     document.form1.text1.focus();
//     return true;
//   }else{
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//   }
// }

function validateForm() {
  var x = document.forms["myForm"]["first_name"].value;
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  }
  var y = document.forms["myForm"]["last_name"].value;
  if (y == "") {
    alert("Last Name must be filled out");
    return false;
  }

  var a = document.forms["myForm"]["address"].value;
  if (a == "") {
    alert("Address must be filled out");
    return false;
  }

  var b = document.forms["myForm"]["country"].value;
  if (b == "") {
    alert("Country must be filled out");
    return false;
  }

  if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
    document.myForm.Zip.value.length != 5 ) {
            
    alert( "Please provide a zip in the format 55200." );
    document.Zip.focus() ;
    return false;
  }
  var d = document.forms["myForm"]["city"].value;
  if (d == "") {
    alert("City must be filled out");
    return false;
  }

  var f = document.forms["myForm"]["mobile_phone"].value;
  var phoneno = /^\d{10}$/;
  if (f !== phoneno) {
    alert("Phone must be filled out");
    return false;
  }

  var g = document.forms["myForm"]["tos"].value;
  if (g == "") {
    alert("must tick if continue!");
    return false;
  }
  var e = document.forms["myForm"]["email"].value;
  // eslint-disable-next-line no-undef
  var validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (e !== validemail) {
    alert("Enter Valid email! must be filled out");
    return false;    
  }
  return(true);
}
var hello = document.getElementsByClassName("btn");
hello.addEventListener("click", validateForm);

