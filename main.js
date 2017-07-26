$(document).ready(function () {
    $(".ninja").click(function () {
        $(this).hide("2000");
    });

    // Restoring the ninjas
    $(".container button").click(function () {
        $(".ninja").show("2000");
    });
});
