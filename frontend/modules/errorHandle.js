/**
 * Handles all error when in production mode. 
 */

import bus from "./eventBus";

window.addEventListener("error",(message, source, lineno, colno, error)=>{
	bus.emit("chat.push",`
    Message: ${message}
    source: ${source}
    Line: ${lineno}
    Col: ${colno}
    Error: ${JSON.stringify(error)}
    `);    
});