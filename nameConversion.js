// I have use lodash libraries which has inbuilt camelcase, snakecase and kebabcase functions.

const button = document.getElementById("convert-btn");
let input = document.getElementById("letter");


button.addEventListener("click", () => {
    camelCaseF();
    pascalCaseF();
    snakeCaseF();
    screamingSnakeCaseF();
    kebabCaseF();
    screamingKebabCaseF();
});

function camelCaseF() {
    let camel = document.getElementById("camel-case");
    let letters = input.value;
    camel.textContent= _.camelCase(letters);
}


function pascalCaseF() {
    let pascal = document.getElementById("pascal-case");
    let letters = input.value;
    pascal.textContent= _.startCase(_.camelCase(letters)).replace(/ /g, '');
}

function snakeCaseF(){
    let snake = document.getElementById("snake-case");
    let letters = input.value;
    snake.textContent= _.snakeCase(letters);
}

function screamingSnakeCaseF(){
    let snakeCapital = document.getElementById("screaming-snake-case");
    let letters = input.value;
    snakeCapital.textContent= (_.snakeCase(letters)).toUpperCase();
}


function kebabCaseF(){
    let kebab = document.getElementById("kebab-case");
    let letters = input.value;
    kebab.textContent= _.kebabCase(letters);
}

function screamingKebabCaseF(){
    let kebabCapital = document.getElementById("screaming-kebab-case");
    let letters = input.value;
    kebabCapital.textContent= (_.kebabCase(letters).toUpperCase());
}



