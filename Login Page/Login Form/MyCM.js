function validateForm()
{
    var username-document.forms["usernameForm"]["username"].value;
    var pwd=document.forms["usernameForm"]["password"].value;
    
    if(username==null || username=="") {
        alert("Please enter a username");
        return false;
    }
    if(pwd==null || pwd=="") {
        alert("Please enter a password");
        return false;
    }

       
    function resetForms()
    {
        document.forms["loginForm"]["username"].value="";
        document.forms["oginForm"]["password"].value="";
    }
}
    



