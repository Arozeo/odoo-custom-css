{
    'name': 'AVI Custom CSS',
    'version': '1.0.0',
    'summary': 'Insert AVI Custom CSS directly into Odoo',
    'description': "Insert AVI Custom CSS directly into Odoo",
    'category': 'Custom CSS',
    'author': 'Eliott Charbonneau - Arozeo',
    'website': 'https://arozeo.fr',
    'license': 'LGPL-3',
    'depends': ['base'],  # List of dependencies
    'assets': {
        'web.assets_backend': [
            'arozeo_v17_custom_css_avi/static/src/js/dynamic_css.js',
        ]
    },
    'installable': True,  # Indicates if the module can be installed
    'application': False,
    'auto_install': False,  # If true, automatically installs this module
    'maintainer': 'Eliott Charbonneau - Arozeo',
}