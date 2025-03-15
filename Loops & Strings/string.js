// let string = "Hello, I'm learning javascript from Chai Aur Code channel at Youtube it's owner is Hitesh Choudhary";
const string = new String("Hello, I'm learning javascript from Chai Aur Code channel at Youtube it's owner is Hitesh Choudhary");
let str1 = "hello";
let str2 = "world ";
let str3 = "hello world";
let str4 = "     trim method     "

console.log(string);
console.log("charAt : ",string.charAt(4));
console.log("charCodeAt : ",string.charCodeAt(4)); //it retuns unicode of the given character
console.log("concat : ",str1.concat(" ",str2));
console.log("endsWith : ",string.endsWith("Choudhary")); //it retuns boolean value
console.log("endsWith : ",string.endsWith("learning",19)); //endsWith(searchString, endPosition) --- endPosition = index number
console.log("endsWith : ",string.endsWith("Js"));
console.log("includes : ",string.includes("Js")); //it retuns boolean value
console.log("includes : ",string.includes("javascript"));
console.log("indexOf : ",string.indexOf("e"));
console.log("lastIndexOf : ",string.lastIndexOf("e"));
console.log("length : ",string.length);
console.log("padStart : ",str1.padStart(9," "));
console.log("padEnd : ",str1.padEnd(10,"."));
console.log("repeat : ",str2.repeat(5));
console.log("replace : ",str1.replace("ll","r"));
console.log("replaceAll : ",str1.replaceAll("l","r"));
console.log("search : ",string.search("learning")); // index of l is 11 --- it use for regular expression also
console.log("slice : ",string.slice(69)); //printed after 69 with it
console.log("slice : ",string.slice(11,19));// printed 11th index but didn't print 19th index
console.log("slice : ",string.slice(-4)); //printing reverse without -4 index
console.log("slice : ",string.slice(-16, -10)); //16 not included -- 10 included
console.log("split : ",str3.split(" "));
console.log("split : ",str3.split("o"));
console.log("split : ",str3.split());
console.log("startsWith : ",string.startsWith("Hel"));
console.log("startsWith : ",string.startsWith("java",20));
console.log("substring : ",string.substring(7,19));
console.log("substring : ",string.substring(90));
console.log("toLowerCase : ",str1.toLowerCase());
console.log("toString : ",string.toString());
console.log("toUpperCase : ",str1.toUpperCase());
console.log("trim : ",str4.trim());
console.log("trimEnd : ",str4.trimEnd());
console.log("trimStart : ",str4.trimStart());
console.log("valueOf : ",str1.valueOf());
let iterator = string[Symbol.iterator]();
console.log("[Symbol.iterator] : ",iterator.next());
console.log("[Symbol.iterator] : ",iterator.next());



















