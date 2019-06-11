module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:vue/essential"
    ],
    "globals": {
        "DEVELOPMENT": "readonly",
        "DEBUG": "readonly",
        "mp":"readonly"
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
};