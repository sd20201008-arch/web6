$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#name").text("Sakenov Danial");
    $("#headline").html("<em>SE-2540</em>");

    $("#btn-light").click(function() {
        $("body").removeClass("dark-theme");
    });

    $("#btn-dark").click(function() {
        $("body").addClass("dark-theme");
    });

    $("#btn-hide").click(function() {
        $("#status, #facts").hide();
    });

    $("#btn-show").click(function() {
        $("#status, #facts").show();
    });

    $("#btn-toggle").click(function() {
        $("#status, #facts").toggle();
    });

    $("#btn-fade-in").click(function() {
        $(".gallery-img").fadeIn();
    });

    $("#btn-fade-out").click(function() {
        $(".gallery-img").fadeOut();
    });

    $("#btn-fade-toggle").click(function() {
        $(".gallery-img").fadeToggle();
    });

    $(".panel-header").click(function() {
        $(this).next(".panel-content").slideToggle();
    });

    $("#btn-add").click(function() {
        var skill = $("#skill-input").val().trim();
        if (skill !== "") {
            $("#skills-list").append("<li>" + skill + "</li>");
            $("#skill-input").val("");
        }
    });

    $("#btn-prepend").click(function() {
        var skill = $("#skill-input").val().trim();
        if (skill !== "") {
            $("#skills-list").prepend("<li>" + skill + "</li>");
            $("#skill-input").val("");
        }
    });

    $("#btn-remove").click(function() {
        $("#skills-list li:last").remove();
    });

    $("#btn-change-link").click(function() {
        $("#social-link").attr("href", "https://github.com/sd20201008-arch/web6.git").text("Visit GitHub");
    });

    $("#input-name").on("input", function() {
        $("#live-name").text($(this).val());
    });

    $("#input-email").on("input", function() {
        $("#live-email").text($(this).val());
    });

    var animated = false;
    $("#btn-animate").click(function() {
        if (!animated) {
            $(".skill-bar").each(function() {
                var targetWidth = $(this).attr("data-width");
                $(this).animate({ width: targetWidth }, 1000);
            });
            animated = true;
        } else {
            $(".skill-bar").animate({ width: "0%" }, 1000);
            animated = false;
        }
    });
});