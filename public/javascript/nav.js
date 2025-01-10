function abtMe() {
    document.getElementById("myDropdownMe").classList.toggle("show");
    }
function abtSite() {
    document.getElementById("myDropdownSite").classList.toggle("show");
    }
function forYou() {
    document.getElementById("myDropdownYou").classList.toggle("show");
    }
function other() {
    document.getElementById("myDropdownOther").classList.toggle("show");
    }
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-main') {
        setTheme('theme-dreamspace');
    } else {
        setTheme('theme-main');
    }
}
(function () {
    if (localStorage.getItem('theme') === 'theme-main') {
        setTheme('theme-main');
    } else {
        setTheme('theme-dreamspace');
    }
})();