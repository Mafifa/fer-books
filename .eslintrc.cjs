module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: ["plugin:astro/recommended"],
    overrides: [
        {
            env: {
                "node": true
            },
            files: [
                ".eslintrc.{js,cjs}", "*.astro"
            ],
            parser: "astro-eslint-parser",
            parserOptions: {
                extraFileExtensions: [".astro"],
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
    }
}
