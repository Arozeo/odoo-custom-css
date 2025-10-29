{
    'name': 'Arozeo Custom CSS',
    'version': '1.0.0',
    'summary': 'Insert Arozeo Custom CSS directly into Odoo',
    'description': "Insert Arozeo Custom CSS directly into Odoo",
    'category': 'Custom CSS',
    'author': 'Eliott Charbonneau - Arozeo',
    'website': 'https://arozeo.fr',
    'license': 'LGPL-3',
    'depends': ['web'],  # List of dependencies
    'assets': {
        'web.assets_backend': [
            'v17/static/src/js/dynamic_css.js',
        ]
    },
    'installable': True,  # Indicates if the module can be installed
    'application': False,
    'auto_install': False,  # If true, automatically installs this module
    'maintainer': 'Eliott Charbonneau - Arozeo',
}