document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
    var remove = document.getElementById("removal")
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        remove.style.display="none"
    } else {
        text.style.display = "none";
        remove.style.display="block"

    }
}

