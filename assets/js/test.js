let sliders = document.querySelectorAll('input#editSlider');
let canvas = document.querySelector('canvas#canvas');

function getElement(attr, value, root) {
    root = root || document.body;
    if (root.hasAttribute(attr) && root.getAttribute(attr) == value) {
        return root;
    }
    var children = root.children,
        element;
    for (var i=children.length; i--;) {
        element = getElement(attr, value, children[i]);
        if (element) {
            return element;
        }
    }
    return null;
}

for(var i=0; i<sliders.length; i++) {
    sliders[i].addEventListener('change', (e) => {
        e.preventDefault();
        var attribute = 'prop';
        var value = e.target.getAttribute(attribute);
        var element = getElement(attribute, value, document.body);
        // .filters = element.value;
        Caman("#canvas", function () {
            this.brightness(element.value);
            console.log(element.value);
            this.render();
        });
    });
}