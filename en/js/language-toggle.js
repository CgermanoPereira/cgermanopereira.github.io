function toggleLanguage() {
    var currentUrl = window.location.href;
    var baseUrl = window.location.origin;
    var newUrl;

    // Verifica se a URL atual contém "/en/" (ou seja, está no idioma inglês)
    if (currentUrl.includes("/en/")) {
        // Se estiver no idioma inglês, substitui "/en/" por "/" para voltar para o idioma português
        newUrl = currentUrl.replace("/en/", "/");
    } else {
        // Se não estiver no idioma inglês, adiciona "/en/" ao final da URL para ir para o idioma inglês
        newUrl = baseUrl + "/en" + currentUrl.substring(baseUrl.length);
    }

    // Redireciona para a nova URL
    window.location.href = newUrl;
}
