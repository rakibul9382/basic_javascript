const marvel_heros = ["ironman","thor","spiderman","hulk","captainamerica"]
const dc_heros = ["superman","batman",'falsh',"aquaman"]

 marvel_heros.push(dc_heros)


//  console.log(marvel_heros);
//  console.log(marvel_heros.indexOf('thor'));
//  console.log(marvel_heros[5]);

//  const all_heros = marvel_heros.concat(dc_heros)
//  console.log(all_heros);


//  const all_new_heros = [...marvel_heros, ...dc_heros]
//  console.log(all_new_heros);

 const my_complex_array = [ 1, 2, 3, 4, [5, 6, 7], 8, 9, [8, 9, [1, 2]]]
 const my_simple_array = my_complex_array.flat(Infinity)
 console.log(my_simple_array);
console.log(Array.isArray("Rakibul"));
console.log(Array.from("Rakibul"));
console.log(Array.isArray(Array.from("rakibul")));
console.log(Array.from({name : "rakibul"})); //return empty array ..... interesting case
let rakibul = Array.from({name : "rakibul"})
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1 , score2, score3));
// console.log(typeof marvel_heros);
