document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const div = document.getElementById(`box-${keyName}`);
    div.style.marginTop = "-490px";
    setTimeout(function(){ div.style.marginTop = "0px"; div.style.display= "inline-block"; div.style.transition = "0.3s";}, 300);

})