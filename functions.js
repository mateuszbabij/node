const sayHello = () => {
  return "Hello";
};

const sayHello2 = () => "Hello2";

console.log(sayHello());
console.log(sayHello2());

module.exports = {
    sayHello,
    sayHello2
}

console.log("plik zostal zaladowany prawidlowo");