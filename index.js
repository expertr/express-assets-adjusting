const express = require("express");
const fs = require("fs");
const app = express();
const express_assets_adjusting = require("./lib/module");

express_assets_adjusting.settings({
    path: "C:/.../express-assets-adjusting/assets",
    port: 3030
})

express_assets_adjusting.start(app);