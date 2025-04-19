



class user
{
    constructor(name, username, reason, comment, rate) {
        this.name = name;
        this.username = username;
        this.reason = reason;
        this.comment = comment;
        this.rate = rate;
    }
    name;
    username;
    reason;
    comment;
    rate;
}
ButtonPress = function()
{
    form = document.getElementById("formUser")
    if (form.checkValidity())
    {
        var NewDaunname = document.getElementById("nameOfBanned").value
        var NewDaunusername = document.getElementById("Username").value
        var NewDaunreason = document.getElementById("otherr").value
        var NewDauncomment = document.getElementById("comment").value
        var NewDaunrate = document.getElementById("rate").value
        var NewDaun = new user(NewDaunname, NewDaunusername, NewDaunreason, NewDauncomment, NewDaunrate)
        if(document.getElementById("isNew").checked)
        {
            const serializedUser = JSON.stringify(NewDaun, null, 2) + "\n***\n";
            const blob = new Blob([serializedUser], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${document.getElementById("nameOfNewBase").value}.json`;
            document.body.appendChild(a); 
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
        else
        {
            jsonfile = document.getElementById("JSON")
            if(jsonfile.value != undefined)
            {
                try {
                filee = jsonfile.files[0]
                reader = new FileReader
                reader.onload = function(e)
                {
                    var serializedUsers = e.target.result;

                    serializedUsers += JSON.stringify(NewDaun, null, 2) + "\n***\n";
                    
                    const blob = new Blob([serializedUsers], {type: 'application/json'});
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${document.getElementById("nameOfNewBase").value}.json`;
                    document.body.appendChild(a); 
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }
                reader.readAsText(filee);
                }
                
                catch {
                    alert("ошибка!")
                }
            }
        }
    }
}
button = document.getElementById("butsumb")
button.addEventListener("click", ButtonPress)
