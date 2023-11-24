const {averride, addWebpackAlias} = require("customize-cra");

const path = require("path");

module.exports = override(
    addWebpackAlias({
        "/src": path.resolve(_dirname, "src")
    })
);
