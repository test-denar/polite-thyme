export default {
    "type": "document",
    "name": "social",
    "title": "Social Configuration",
    "fields": [
        {
            "type": "boolean",
            "name": "enabled",
            "title": "Enabled",
            "description": "Displays the social section in the page footer",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Section Title",
            "description": "The bold text displayed at the top of the section",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "social_content",
            "title": "Section Text",
            "description": "The text displayed below the section title",
            "validation": null
        },
        {
            "type": "array",
            "name": "social_links",
            "title": "Social Media",
            "description": "A list of social media icons displayed along the bottom of the section",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Icon Title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Icon",
                            "description": "Font Awesome icon",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "link_url",
                            "title": "URL",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Social Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/social.yml"
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