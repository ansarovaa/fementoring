let script = document.createElement('script');


document.head.appendChild(script);

$("#submitButton").click(function () {
    if ($('#loginControlInput').val() == '') {
        alert("Please fill out login field");
    } else {
        $("#exampleModal").modal('show');
    }

});