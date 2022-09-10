// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}
/*I honestly don't know where to begin from on this project oooo*/
helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

say.call(helloMessage, "John");
say.call(heyThereMessage, "Michael");


/* I don't fully understand this concept, but with some more problem sets, I'll gain understanding*/
