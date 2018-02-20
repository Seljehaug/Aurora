//LOGIN VALIDATION
function validateLogin() {
    "use strict";
    var email = document.forms.logmein.loginEmail.value;
    var pass = document.forms.logmein.loginPassword.value;
    var studentEmail = "student@aurora.no";
    var studentPassword = "studentpwd";
    var teacherEmail = "teacher@aurora.no";
    var teacherPassword = "teacherpwd";
    var adminEmail = "admin@aurora.no";
    var adminPassword = "adminpwd";

    if (email === studentEmail) {
        if (pass === studentPassword) {
            sessionStorage.role = 'student';
            $('#logmein').attr('action', 'index.html#/' + page3);
            return true;
        } else {
         document.getElementById('loginError').style.display = "block";
         document.getElementById('loginEmail').style.border = "2px solid #E57373";
         document.getElementById('loginPassword').style.border = "2px solid #E57373";
         return false;
        }
    } else if (email === teacherEmail) {
        if (pass === teacherPassword) {
            sessionStorage.role = 'teacher';
            $('#logmein').attr('action', 'index.html#/' + page5);
            return true;
        } else {
         document.getElementById('loginError').style.display = "block";
         document.getElementById('loginEmail').style.border = "2px solid #E57373";
         document.getElementById('loginPassword').style.border = "2px solid #E57373";
         return false;
        }
    } else if (email === adminEmail) {
        if (pass === adminPassword) {
            $('#logmein').attr('action', 'index.html#/' + page6);
            sessionStorage.role = 'admin';
            return true;
        } else {
         document.getElementById('loginError').style.display = "block";
         document.getElementById('loginEmail').style.border = "2px solid #E57373";
         document.getElementById('loginPassword').style.border = "2px solid #E57373";
         return false;
        }
    } else {
        event.preventDefault();
        document.getElementById('loginError').style.display = "block";
        document.getElementById('loginEmail').style.border = "2px solid #E57373";
        document.getElementById('loginPassword').style.border = "2px solid #E57373";
        return false;
    }
}

//CHANGE TO REGISTER
var toggle = true;
window.onload = function() {
   var a = document.getElementById('registerlink');
   a.onclick = function() {
      if(toggle === true) {
         document.getElementById('loginbutton').value = 'REGISTER';
         document.getElementById('loginheader').innerHTML = 'Welcome';
         document.getElementById('registerlink').innerHTML = 'Login';
         document.getElementById('loginState').style.display = 'none';
         document.getElementById('registerState').style.display = 'block';
         document.getElementById('forgotlink').style.display = 'none';
         toggle = false;
         return false;
      } else if(toggle === false) {
         document.getElementById('loginbutton').value = 'LOGIN';
         document.getElementById('loginheader').innerHTML = 'Welcome Back';
         document.getElementById('registerlink').innerHTML = 'Register';
         document.getElementById('registerState').style.display = 'none';
         document.getElementById('loginState').style.display = 'block';
         document.getElementById('forgotlink').style.display = 'block';
         toggle = true;
         return false;
      }
   };
};

//REGISTER VALIDATION
//   This can be implemented later
