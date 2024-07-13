// let sentense = "The dog chased the cat.";
// let regx = /Dog/;
// // sensitive case
// console.log(regx.test(sentense));
/////////////////////////////////////////

// let petString = "James has a pet dog.";
// let petRegex = /dog|cat|bird|fish/;
// console.log(petRegex.test(petString));

////////////////////////////////////////
// let myString = "HelloWorld";
// // i => ignore the case
// console.log(/helloworld/i.test(myString));
////////////////////////////////////////

// let testStr = "Repeat, Repeat , Repeat, repeat";
// // global search
// let ourRegex = /Repeat/ig;
// console.log(testStr.match(ourRegex));

////////////////////////////////////////
// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// console.log(humStr.match(huRegex));
// console.log(hugStr.match(huRegex));
// console.log(/.un/.test("Let's have some fun"));

///////////////////////////////////////

// let vowels = /[aeiou]/ig;
// console.log("hello world its me sohad".match(vowels))

///////////////////////////////////////
//[a-z]
// console.log("The quick brown fox jumps over the lazy dog.".match(/[a-z]/ig))

////////////////////////////////////////
//[2-6]
// console.log("Bluebberry 3.141592653244s are delicious".match(/[2-6h-s]/ig))
//--------------------------------------
// console.log("3 blind mice.".match(/[^0-9aeiou]/ig));
//--------------------------------------
// console.log("Mississippi".match(/s+/g));

//--------------------------------------
// let goRegex = /go*/;
// console.log("gooooooooal".match(goRegex));
// console.log("gut feeling".match(goRegex));
// console.log("over the moon".match(goRegex));

//--------------------------------------
// console.log("titanic".match(/t[a-z]*?i/));
// console.log("<h1>Winter is coming</h1>".match(/<.*?>/))

//--------------------------------------
// ^ for the begining $ for the end.
// console.log("P1P2P3P4P5P6CCCP7P8P9".match(/C+/))
// console.log(/^Cal/.test("Cal and Ricky both like racing."));
// console.log(/caboose$/.test("The last car on a train is the caboose"));

//--------------------------------------
// \w every letter & number & _
// \W everthing except \w
// \d digit \D non number
// console.log("The five boxing? wizards jump quickly.".match(/\W/g));
// console.log("14893279".match(/\d/g))
// console.log("14893279 sohad".match(/\D/g))

//--------------------------------------
// let username = "JackOfAllTrades";
// let useCheck = /^[A-Za-z]{2,}\d*$/;
//   console.log(useCheck.test(username));
//--------------------------------------
// s => whitespace
// let sample = "Whitespace is important inseparating words";
// console.log(sample.match(/\s/g));
// console.log(sample.match(/\S/g));
//--------------------------------------
// ? for optional
// console.log("qu".match(/q(?=u)/));
// console.log("qt".match(/q(?!u)/));

//--------------------------------------
// console.log(/(\w+)\s\1/.test("regex regex"));
// console.log("regex regex".match(/(\w+)\s\1/));

//--------------------------------------
// console.log("The sky is silver".replace(/silver/, "blue"));
// console.log("Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1"));
// console.log("  Hello, World!  ".replace(/^\s+|\s+$/g , ""))
//--------------------------------------
//The End 😊