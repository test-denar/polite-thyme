export default {
    "type": "object",
    "name": "intro",
    "title": "Intro Section",
    "fields": [
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
            "name": "title",
            "title": "Title",
            "description": "The bold text displayed at the top of the section",
            "initialValue": "Reflex",
            "validation": Rule => Rule.required()
        },
        {
            "type": "image",
            "name": "img_path",
            "title": "Image",
            "description": "The image displayed on the left side of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "Intro"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "intro"
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