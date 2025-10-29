odoo.define('v17.dynamic_css', [], function (require) {
    'use strict';

    try {
        var cssUrl = 'https://raw.githubusercontent.com/Arozeo/odoo-custom-css/refs/heads/master/v17/static/src/css/arozeo_custom.css';

        // Fetch the CSS content
        fetch(cssUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(cssText => {
                console.log('CSS content loaded, length:', cssText.length);
                // Create a style element
                var style = document.createElement('style');
                style.type = 'text/css';
                style.textContent = cssText;
                // Add to head
                document.head.appendChild(style);
                console.log('CSS style added to head');
            })
            .catch(error => {
                console.error('Error loading CSS:', error);
            });
    } catch (error) {
        console.error('Error in dynamic CSS module:', error);
        // Do nothing on error
    }
});