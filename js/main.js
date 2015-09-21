gbi = function ($id) {
    return {
        obj: document.getElementById($id),
        addClass: function ($class) {
            console.log($class);
            this.obj.className = this.obj.className + " " + $class;
        },
        click: function ($funstuff) {
            this.obj.onclick = $funstuff();
        }
    }
}

log = function ($msg) {
    return console.log($msg);
}

var menuButton = gbi('menu--open-button');

menuButton.obj.onclick = function () {
    this.className = this.className + " open";
}
menuButton.click(function () {
    menuButton.addClass('open');
});