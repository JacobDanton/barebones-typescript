// Return greeting to the given name
// If no name is specified, say hello to the world
export function sayHello(name?: string): string {
    'use strict';
    if (name && name.length > 0)
        return 'hello, ' + name
    else
        return 'hello world'
}

// Application should just say 'hello world'
console.log(sayHello())
