$(document).ready(function () {
    // Toggle menu for small screens
    $("#menuIcon").click(function () {
        $("#menuDropdown").toggleClass("show");
    });

    // Toggle profile dropdown
    $("#profileIcon").click(function () {
        $("#profileDropdown").toggle();
    });

    // Close menu dropdown when clicking outside
    $(document).click(function (event) {
        if (!event.target.closest('#menuIcon')) {
            $("#menuDropdown").removeClass("show");
        }
    });
    
    // Close profile dropdown when clicking outside
    $(document).click(function (event) {
        if (!event.target.closest('#profileIcon')) {
            $("#profileDropdown").hide();
        }
    });
});



// profile

$(document).ready(function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    setMode(isDarkMode);

    $('#darkModeToggle').change(function () {
        const darkModeEnabled = $(this).prop('checked');
        setMode(darkModeEnabled);
    });

    function setMode(enableDarkMode) {
        if (enableDarkMode) {
            $('body').addClass('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            $('body').removeClass('dark-mode');
            localStorage.setItem('darkMode', null);
        }
    }
});