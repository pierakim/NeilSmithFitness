﻿$(document)
        .ready(function () {
            // Show Update Success modal popup
            if ($('#showSuccessMessage').text().length > 0) {
                $('#successModal').modal({ backdrop: 'static' });
            }
        });

$(function () {
    $("#submitContact").click(function () {
        debugger;
        if ($("#frmContact").valid()) {
            $("#loading").fadeIn();
            var opts = {
                lines: 12, // The number of lines to draw
                length: 7, // The length of each line
                width: 4, // The line thickness
                radius: 10, // The radius of the inner circle
                color: '#000', // #rgb or #rrggbb
                speed: 1, // Rounds per second
                trail: 60, // Afterglow percentage
                shadow: false, // Whether to render a shadow
                hwaccel: false // Whether to use hardware acceleration
            };
            var target = document.getElementById('loading');
            var spinner = new Spinner(opts).spin(target);
        }
    });
});