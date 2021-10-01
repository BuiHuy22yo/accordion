function  setup() {
    var accordion_item = document.getElementsByClassName("accordion_item");
    var heading = document.getElementsByClassName("heading");
    for (i = 0; i < heading.length; i++) {
        heading[i].addEventListener('click', accordion_active, false);
    }

    function accordion_active() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accordion_item.length; i++) {
            accordion_item[i].className = 'accordion_item';
        }
        if (itemClass == 'accordion_item') {
            this.parentNode.className = 'accordion_item active';
        }
    }
}
