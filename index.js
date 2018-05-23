const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name];
}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens];
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var arr2 = kittens;
  arr2 = [...arr2, kittens];
  return arr2;
}

function prependKittens(name) {
  var arr2 = kittens;
  arr2 = [kittens, ...arr2];
  return arr2;
}

function removeLastKitten() {
  var arr2 = kitten;
  arr2.pop();
  
}