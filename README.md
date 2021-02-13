# express-assets-adjusting

`tr: Kolayca tasarım dosyanızı (HTML) görüntelecek araç.`
`eng: Tool to easily view your design file (HTML).`

```javascript
const express = require("express");
const fs = require("fs");
const app = express();
const express_assets_adjusting = require("./lib/module");

...

express_assets_adjusting.settings({
    path: "C:/.../expressassetsadjusting/assets",
    port: 3030
})

express_assets_adjusting.start(app);

...

```
