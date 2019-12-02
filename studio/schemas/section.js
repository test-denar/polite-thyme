export default {
    "type": "object",
    "name": "section",
    "title": "Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Section Title",
            "description": "The bold text displayed at the top of the section",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Section Content",
            "description": "The text displayed as section content",
            "validation": null
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Section Action Buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "component",
            "title": "Section Component",
            "hidden": true,
            "validation": Rule => Rule.required()
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
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}