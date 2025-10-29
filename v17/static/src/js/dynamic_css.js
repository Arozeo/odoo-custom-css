odoo.define('v17.dynamic_css', [], function (require) {
    'use strict';

    // Fonction pour charger le CSS depuis une URL
    function loadCSSFromURL(url) {
        if (!url) {
            console.log('No CSS URL provided');
            return;
        }
        console.log('Loading CSS from:', url);

        // Créer un élément link
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.type = 'text/css';

        // Ajouter au head
        document.head.appendChild(link);
        console.log('CSS link added to head');
    }

    // Charger le CSS au démarrage de l'application
    console.log('Dynamic CSS JS loaded');
    odoo.bus.on('web_client_ready', function () {
        console.log('Web client ready, fetching CSS URL');
        // Récupérer l'URL depuis les paramètres système
        odoo.rpc.query({
            model: 'ir.config_parameter',
            method: 'get_param',
            args: ['arozeo_custom_css_url'],
        }).then(function (cssUrl) {
            console.log('CSS URL from parameter:', cssUrl);
            if (cssUrl) {
                loadCSSFromURL(cssUrl);
            } else {
                console.log('No CSS URL found in parameters');
            }
        }).catch(function (error) {
            console.error('Error fetching CSS URL:', error);
        });
    });

    return {
        loadCSSFromURL: loadCSSFromURL,
    };
});