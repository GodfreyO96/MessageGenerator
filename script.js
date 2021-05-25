//All inspirational quotes
const quote1 = ["Don't let yesterday take up too much of today"];
const quote2 = ["You learn more from failure than success"];
const quote3 = ["It's not whether you get knocked down. It's about whether you get up."];
const quote4 = ["People who are crazy enough to think they can change the world, are the ones who usually do"];
const quote5 = ["We may encounter many defeats but we must not be defeated"];

//An array of all the arrays above
const inspirationalQuotes = [quote1, quote2, quote3, quote4, quote5];

//Function: 
let randInspirationalQuotes = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
//console.log(randInspirationalQuotes)

let message = `This is your random message: "${randInspirationalQuotes}" Always remember this when you need that extra bit of motivation.`;

console.log(message);
