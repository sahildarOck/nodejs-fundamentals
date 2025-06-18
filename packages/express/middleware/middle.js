const myMiddleWare = (req, res, next) => {
    console.log("Middleware executed!");
    req.customProperty = "This is a custom property";
    next();
}

module.exports = myMiddleWare;