var s = document.createElement('script');
// js code to be executed in the context of the page
// (see http://stackoverflow.com/questions/9263671/google-chome-application-shortcut-how-to-auto-load-javascript/9310273#9310273)
s.textContent = "  \
    window.onblur = function() {};  \
    window.onfocus();  \
";

// Add code to page
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

