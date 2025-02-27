/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];

    for(let ast of asteroids) {
        
        let alive = true;

        while(alive && ast < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            let top = stack.pop();

            if(top > Math.abs(ast)) {
                stack.push(top);
                alive = false;
            } else if(top === Math.abs(ast)) {
                alive = false;
            }
        }
        if(alive) {
            stack.push(ast)
        }


    }
    return stack;
};