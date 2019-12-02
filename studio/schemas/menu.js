export default {
    "type": "document",
    "name": "menu",
    "title": "Menu Configuration",
    "fields": [
        {
            "type": "array",
            "name": "actions",
            "title": "Menu Action Buttons",
            "description": "The action buttons displayed at the bottom of the menu",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Menu Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/menu.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}