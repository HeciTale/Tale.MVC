// script.js

$(document).ready(function () {
    $("#SendToServer").on("click", function () {
        var remonts = [];

        $(".table-container table tbody tr").each(function () {
            var cells = $(this).find("td");

            var remont = {
                RemontType: cells.eq(1).text(),
                RemontCount: parseInt(cells.eq(2).text()),
                RemontPrice: parseFloat(cells.eq(3).text())
            };

            remonts.push(remont);
        });

        $.ajax({
            url: "https://your-api-base-url/api/remont",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(remonts),
            success: function (data) {
                alert(data);
            },
            error: function (error) {
                alert("Error: " + error.responseText);
            }
        });
    });
});
