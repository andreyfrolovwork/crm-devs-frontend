module.exports = {
    root: true,

    env: {
        browser: true,
        node: true,
    },
    rules: {
        "vue/script-setup-no-uses-vars": "off",
        /* 'prefer-promise-reject-errors': 'off',*/

        // allow debugger during development only
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        "vue/multi-word-component-names": "off",
        "vue/html-indent": ["error", 4, { attribute: 1, closeBracket: 1 }],
        "vue/require-prop-types": "off",
    },
    extends: ["plugin:nuxt/recommended", "plugin:vue/vue3-recommended" /*, 'plugin:prettier/recommended'*/],
}
