$('input.editFilter').change(applyFilters);

function applyFilters() {
    var brightness = parseInt($('#brightness').val());

    Caman('#canvas', function () {
        this.revert(false);
        this.brightness(brightness);
        this.render();
    });
}