createKartochka = function(usertext, num)
{
    var cardsdiv = document.getElementById("bannedUsersDiv")
    if (usertext != "")
    {
        var userFromCard = JSON.parse(usertext)
        carddiv = document.createElement("div")
        carddiv.setAttribute("class", "card")
        carddiv.innerText = userFromCard.name + "\n" + userFromCard.username
        dopdiv = document.createElement("div")
        dopdiv.innerText = `Причина: ${userFromCard.reason} \n Комментарий: ${userFromCard.comment} \n Степень осложнения: ${userFromCard.rate}`
        carddiv.appendChild(dopdiv)
        cardsdiv.appendChild(carddiv)
        if (userFromCard.reason == "Андерейдж(UnderAge)")
        {
            imgRebenok = document.createElement("img")
            imgRebenok.setAttribute("src", "images_list\\467239a3-20f1-5824-9945-7ee302b95741.jpg")
            dopdiv.appendChild(imgRebenok)
        }
        else if (userFromCard.reason == "Тупой")
            {
                imgTupoi = document.createElement("img")
                imgTupoi.setAttribute("src", "images_list\\29909.970.jpg")
                dopdiv.appendChild(imgTupoi)
            }
        else if (userFromCard.reason == "Неадекватное поведение(абсурд, неуместные темы и т.д)")
        {
            imgBalnoy = document.createElement("img")
            imgBalnoy.setAttribute("src", "images_list\\154650626515966514.jpg")
            dopdiv.appendChild(imgBalnoy)
        }
        else if (userFromCard.reason == "Политик")
        {
            imgPolitik = document.createElement("img")
            imgPolitik.setAttribute("src", "images_list\\politik.png")
            dopdiv.appendChild(imgPolitik)
        }
    }
}
clearTrash = function()
{
    var cardsdiv = document.getElementById("bannedUsersDiv")
    
    cardsdiv.removeChild(cardsdiv.lastChild)
}
outputBannedUsers = function(e) 
{
    filejson = e.target.files[0]
    reader = new FileReader
    reader.onload = function(event) 
    {
        try
        {
            textjson = event.target.result
            for(i in textjson.split("***"))
            {
                createKartochka(textjson.split("***")[i], i)
            }
            clearTrash()
        }
        catch (error)
        {
        }
    }
    reader.readAsText(filejson);
}
const jsonuploader = document.getElementById("JSONBase")
jsonuploader.addEventListener("change", outputBannedUsers)
