odoo.define('v17.dynamic_css', [], function (require) {
    'use strict';

    var cssUrl = 'https://raw.githubusercontent.com/Arozeo/odoo-custom-css/refs/heads/master/v17/static/src/css/arozeo_custom.css';

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    link.type = 'text/css';

    document.head.appendChild(link);

    console.log('CSS loaded from:', cssUrl);
});