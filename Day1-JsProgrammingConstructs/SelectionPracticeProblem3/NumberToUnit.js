let number = parseInt(process.argv[2], 10);

switch (number) {
  case 1:
    console.log("One");
    break;
  case 10:
    console.log("Ten");
    break;
  case 100:
    console.log("Hundred");
    break;
  case 1000:
    console.log("Thousand");
    break;
  case 100000:
    console.log("Lakh");
    break;
  case 10000000:
    console.log("Crore");
    break;
}
