function loadRepoData(repoURL) {
    $.ajax({
        url: repoURL,
        type: "GET",
        success: function (response) {
            console.log("Response:", response);
        },
        error: function (xhr, status) {
            alert("error: " + JSON.stringify(xhr));
        }
    });
}

$(document).ready(function() {
    $("#myform").submit(function(event) {
        event.preventDefault();
        console.log("Submitted");
    });
});