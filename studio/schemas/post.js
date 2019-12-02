export default {
    "type": "document",
    "name": "post",
    "title": "Post",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "subtitle",
            "title": "Page Subtitle",
            "description": "The text displayed below the page title",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "excerpt",
            "title": "Post Excerpt",
            "description": "The excerpt displayed in the spotlights section of the home page",
            "validation": null
        },
        {
            "type": "image",
            "name": "img_path",
            "title": "Content Image",
            "description": "The image displayed in the page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "post_button_label",
            "title": "Spotlights Button label",
            "description": "The text displayed in the home spotligh button",
            "validation": null
        },
        {
            "type": "date",
            "name": "date",
            "title": "Post Date",
            "validation": Rule => Rule.required()
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Post Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Post URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
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
                    "page"
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