function log($stuff){console.log($stuff);}

$ = function ($elm) {
    var element = {};
    if($elm.obj !== undefined) {
        return $elm;
    } 
    else if (typeof $elm === "string") {
        element = document.querySelector($elm);
    }
    else if (typeof $elm === "object") {
        element = $elm;
    }

    return {
        obj: element,
        addClass: function ($class) {
            this.obj.classList.add($class);
        },
        removeClass: function ($class) {
            this.obj.classList.remove($class);
        },
        hasClass: function ($class) {
            return this.obj.classList.contains($class);
        },
        click: function ($funstuff) {
            this.obj.addEventListener("click", $funstuff);
        },
        parent: function () {
            return this.obj.parentElement
        }
    }
}

var menuButton = $('#menu--open-button');
var menu = $(menuButton.parent());

menuButton.click(function () {
    menu.addClass("open");
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        menu.removeClass("open");
    }
};