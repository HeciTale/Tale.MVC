$(document).ready(function () {
    $("#AddRemont").on("click", function () {
        var remontType = $("#RemontType").val();
        var remontText = $("#RemontText").val();
        var remontCount = $("#RemontCount").val();
        var remontPrice = $("#RemontPrice").val();

        if (remontType === "" || remontText === "" || remontCount === "" || remontPrice === "") {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        addRowToTable(remontType + "_table", remontType, remontCount, remontPrice);

        $("#RemontType").val("");
        $("#RemontText").val("");
        $("#RemontCount").val("");
        $("#RemontPrice").val("");
    });

    $(".table-container").on("click", ".deleteRow", function () {
        $(this).closest("tr").remove();
        updateTotal();
    });

    $(".table-container").on("click", ".editRow", function () {
        var row = $(this).closest("tr");
        var cells = row.find("td");

        $("#RemontType").val(cells.eq(1).text());
        $("#RemontCount").val(cells.eq(2).text());
        $("#RemontPrice").val(cells.eq(3).text());

        row.remove();
        updateTotal();
    });

    function addRowToTable(tableId, remontType, remontCount, remontPrice) {
        var tableBody = $("#" + tableId + " tbody");
        var newRow = "<tr>" +
            "<th scope='row'>" + (tableBody.find("tr").length + 1) + "</th>" +
            "<td>" + remontType + "</td>" +
            "<td>" + remontCount + "</td>" +
            "<td>" + remontPrice + "</td>" +
            "<td class='subtotal'>" + (remontCount * remontPrice) + "</td>" +
            "<td>" +
            "<button class='btn btn-danger btn-sm deleteRow'>Sil</button> " +
            "<button class='btn btn-info btn-sm editRow'>Düzenle</button>" +
            "</td>" +
            "</tr>";

        tableBody.append(newRow);
        updateTotal();
    }

    function updateTotal() {
        var total = 0;
        $(".table-container table").each(function () {
            $(this).find(".subtotal").each(function () {
                total += parseFloat($(this).text());
            });

            $(this).closest(".table-container").find(".total").text("Toplam: " + total);

            total = 0;
        });

        // Hepsinin toplamını güncelle
        var hepsininToplami = 0;
        $(".table-container .total").each(function () {
            hepsininToplami += parseFloat($(this).text().replace("Toplam: ", ""));
        });

        $("#toplam").text(hepsininToplami);
    }
});