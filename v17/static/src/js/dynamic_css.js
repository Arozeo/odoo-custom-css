odoo.define('arozeo_v17_custom_css_avi.dynamic_css', function (require) {
    'use strict';

    var core = require('web.core');
    var rpc = require('web.rpc');

    // Fonction pour charger le CSS depuis une URL
    function loadCSSFromURL(url) {
        if (!url) return;

        // Créer un élément link
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.type = 'text/css';

        // Ajouter au head
        document.head.appendChild(link);
    }

    // Charger le CSS au démarrage de l'application
    core.bus.on('web_client_ready', function () {
        // Récupérer l'URL depuis les paramètres système
        rpc.query({
            model: 'ir.config_parameter',
            method: 'get_param',
            args: ['arozeo_custom_css_url'],
        }).then(function (cssUrl) {
            if (cssUrl) {
                loadCSSFromURL(cssUrl);
            }
        });
    });

    return {
        loadCSSFromURL: loadCSSFromURL,
    };
});