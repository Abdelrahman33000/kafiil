$(document).ready(function () {
    $("#menuIcon").click(function () {
        $("#menuDropdown").toggleClass("show");
    });

    $("#profileIcon").click(function () {
        $("#profileDropdown").toggle();
    });

    $(document).click(function (event) {
        if (!event.target.closest('#menuIcon')) {
            $("#menuDropdown").removeClass("show");
        }
    });
    
    $(document).click(function (event) {
        if (!event.target.closest('#profileIcon')) {
            $("#profileDropdown").hide();
        }
    });
});



// mode

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
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // إعادة تحميل حالة الدارك مود عند تحميل الصفحة
    window.onload = function () {
        const isDarkModeOnLoad = localStorage.getItem('darkMode') === 'enabled';
        $('#darkModeToggle').prop('checked', isDarkModeOnLoad);
        setMode(isDarkModeOnLoad);
            gfg(4);
         
    };
});
