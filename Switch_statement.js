const a = 'chrome';

function browser_launch() {
    switch (a.toLowerCase()) { // Converts input to lowercase to handle case differences
        case "chrome":
            console.log("Chrome browser is launched");
            break;
        case "firefox":
            console.log("Firefox browser is launched");
            break;
        case "edge":
            console.log("Edge browser is launched");
            break;
        default:
            console.log("Unknown browser");
    }
}

browser_launch();
