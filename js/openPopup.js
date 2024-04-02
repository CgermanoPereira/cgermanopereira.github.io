function openPopup(url) {
    // Define o tamanho e as configurações da janela pop-up
    var width = 600;
    var height = 400;
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    var features = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes,resizable=yes';

    // Abre a janela pop-up
    var popup = window.open(url, '_blank', features);
}
