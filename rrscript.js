let rrlink = document.getElementById("rrlink");

rrlink.addEventListener("blur", function()
{
    let link = this.value.trim();
    if (link && !link.startsWith("http"))
    {
        this.value = "https://" + link;
    }
});


let rrform = document.getElementById("rrform");

rrform.addEventListener('submit', function(event)
{
    // Need to do this since we don't have an actual server
    event.preventDefault();

    alert("Message successfully sent (or would have sent if we had a server).");
    window.location.href = "requestrecipe.html";
});
