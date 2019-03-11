function clock()
{
    var date = new Date();
    var hh = date.getHours();
    var min = date.getMinutes();
    var ss = date.getSeconds();

    var dd = date.getDate();
    var mm = date.getMonth();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var yy = date.getFullYear();
    if(hh >= 12 )
    {
        document.getElementById("midday").innerHTML = "PM";
        hh = hh - 12;
        hh = checkdigit(hh);
        document.getElementById("hours").innerHTML = hh;
    }
    else
    {
        hh = checkdigit(hh);
        document.getElementById("hours").innerHTML = hh;
        document.getElementById("midday").innerHTML = "AM";
    }
    // document.getElementById("hours").innerHTML = hh;
    min = checkdigit(min);
    document.getElementById("minutes").innerHTML = min;
    ss = checkdigit(ss);
    document.getElementById("seconds").innerHTML = ss;
    if(document.getElementById("midday").innerText == "AM")
    {
        document.getElementById("message").innerHTML = "GOOD MORNING";
    }
    else if(document.getElementById("midday").innerText == "PM" && hh < 5)
    {
        document.getElementById("message").innerHTML = "GOOD AFTERNOON";
    }
    else if(document.getElementById("midday").innerText == "PM" && hh < 10)
    {
        document.getElementById("message").innerHTML = "GOOD EVENING";
    }
    else
    {
        document.getElementById("message").innerHTML = "GOOD NIGHT";
    }

    document.getElementById("date").innerHTML = dd;
    document.getElementById("month").innerHTML = months[mm];
    document.getElementById("year").innerHTML = yy;


    setTimeout(clock,1000);
}
function checkdigit(t)
{
    if(t < 10)
    {
        return ("0" + t);
    }
    else{
    return t;
    }
}