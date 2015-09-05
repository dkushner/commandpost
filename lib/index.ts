/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

"use strict";

try {
    // optional
    require("source-map-support").install();
} catch (e) {
}
try {
    if (typeof Promise === "undefined") {
        require("es6-promise").polyfill();
    }
} catch (e) {
}

import Command from "./command";

/**
 * Create new top level command.
 * @param cmdName
 * @returns {Command<Opt, Arg>}
 */
export function create<Opt,Arg>(cmdName:string):Command<Opt,Arg> {
    "use strict";

    return new Command<Opt,Arg>(cmdName);
}

/**
 * exec parsing and call callback.
 * @param cmd it created by create function.
 * @param argv pass process.argv
 * @returns {Promise<{}>}
 */
export function exec(cmd:Command<any,any>, argv:string[]):Promise<{}> {
    "use strict";

    return Promise
        .resolve(null)
        .then(()=> {
            argv = argv.slice(2);
            // cmd.parse throw an exception often.
            return cmd.parse(argv);
        });
}
