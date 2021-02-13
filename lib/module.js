const fs = require("fs");

module.exports = {
    settings: async (json) => {
      try {
        const jsonParse = JSON.parse(JSON.stringify(json));
        this.path = jsonParse.path;
        this.port = jsonParse.port;
        console.log("======================== Express Assets Adjusting v1.0.0 ========================\n\n");
        console.log("[express-assets-adjusting] - Load settings " + JSON.stringify(jsonParse));
      } catch (err) {
        throw new Error("[express-assets-adjusting] Error: " + err);
      };
    },
    start: async (app) => {
        if(!this.path && !this.port || !this.path && this.port || this.path && !this.port) {
            throw new Error("[express-assets-adjusting] Error: All or some settings are not entered");
        }
        app.listen(this.port);
        
        console.log("[express-assets-adjusting] - Listening port " + this.port + " - http://localhost:" + this.port);

        fs.readdir(this.path, (err, files) => {
            if(err) throw new Error("[express-assets-adjusting] - Read dir error: " + err)
            console.log(`[express-assets-adjusting] - There are ${files.length} files in total`);
        });

        app.get("/:path", async (req, res) => {
            try {
                fs.readFileSync(`${this.path}/${req.params.path}`)
                res.sendFile(`${this.path}/${req.params.path}`);
            } catch {
                res.send("[express-assets-adjusting] - Error: '" + `${this.path}/${req.params.path}` + "' File not found!")
            }
        });
    
    }
};

process.on('SIGINT', () => {
    console.log('[express-assets-adjusting] - Localhost closed');
    process.exit();
});
