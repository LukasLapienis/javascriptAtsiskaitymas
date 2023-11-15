console.log(`pirma uzduotis:`);

let paz = parseInt(prompt("iveskite savo pazymi skaiciumi"));
switch (paz) {
    case 1:
    case 2:
    case 3:
        console.log(`neigiamas pazymys`);
        break;
    case 4:
    case 5:
        console.log(`teigiamas, bet reikia pasistengti`);
        break;
    case 6:
    case 7:
        console.log(`vidutiniskai, ar tikrai tau to gana?`);
        break;
    case 8:
    case 9:
        console.log(`pagirk save`);
        break;
    case 10:
        console.log(`super!`);
        break;
    default:
        console.log(`pateikta neteisinga reiksme`);
}

console.log(`antra uzduotis:`);

let menesis = prompt("iveskite menesio pavadinima");
switch (menesis) {
    case "gruodis":
    case "sausis":
    case "vasaris":
        console.log(`${menesis} yra ziema`);
        break;
    case "kovas":
    case "balandis":
    case "geguze":
        console.log(`${menesis} yra pavasari`);
        break;
    case "birzelis":
    case "liepa":
    case "rugpjutis":
        console.log(`${menesis} yra vasara`);
        break;
    case "rugsejis":
    case "spalis":
    case "lapkritis":
        console.log(`${menesis} yra rudeni`);
        break;
    default:
        console.log(`neteisingai ivestas menesis`);    
}

console.log("trecia uzduotis:")

let time = parseInt(prompt("kiek dabar valandu?"));
if (time>=0 && time<=24) {
    if (time>=6 && time<11) {
        console.log(`labas rytas`);
    } else if (time>=11 && time<18) {
            console.log(`labas diena`);
    } else if (time>=18 && time<21) {
            console.log(`labas vakaras`);
    } else {
            console.log(`labanakt`);
    }
} else {
    console.log(`blogai ivestos valandos`); 
}

console.log("ketvirta uzduotis:")

const date = new Date();
const day = date.getDay();

switch (day) {
    case 1:
        console.log(`pirmadienis`);
        break;
    case 2:
        console.log(`antradienis`);
        break;
    case 3:
        console.log(`treciadienis`);
        break;
    case 4:
        console.log(`ketvirtadienis`);
        break;
    case 5:
        console.log(`penktadienis`);
        break;
    case 6:
        console.log(`sestadienis`);
        break;
    case 7:
        console.log(`sekmadienis`);
        break;
    default:
        console.log('kazkas neteisingai')
}

console.log("penkta uzduotis:")

let age = parseInt(prompt("Iveskite metus"));
if(age>=18){
    if((prompt("Ar turi vairuotojo pazymejima? atsakymas turi buti taip arba ne"))=="taip") {
        console.log("pilnametis ir turi pazymejima");
    }
    else {
        console.log("pilnameti, vairuotojo pazymejimo ner");
    }
}
else {
    console.log("nepilnametis ir neturi pazymejimo")
}

console.log("sesta uzduotis:")

let number = parseInt(prompt("iveskite skaiciu"));
if (number>0) {
    console.log("teigiamas")
}
else if (number==0) {
    console.log("lygus nuliui")
}
else {
    console.log("neigiamas")
}

console.log("septinta uzduotis:")

let on = prompt("Ar vartotojas prisijunges? taip arba ne")
let adm = prompt("Ar vartotojas yra adminas? taip arba ne")
if(on == "taip") {
    if(adm == "taip") {
        console.log("prisijunges ir yra adminas");
    }
    else {
        console.log("prisijunges ir nera adminas");
    }
}
else {
    console.log("neprisijunges");
}

console.log("astunta uzduotis:")

on = prompt("Ar vartotojas prisijunges? taip arba ne")
if(on == "taip") {
    if (prompt("Ar vartotojas yra adminas? taip arba ne") == "taip") {
    console.log("skelbimas patvirtintas")
    } else {
        if (prompt("Ar vartotojas skelbimo autorius? taip arba ne") == "taip") { 
        console.log("skelbima gali sukurti arba istrinti")
        } else {
            console.log("nieko negali daryt")
        }
    }
}
else {
    console.log("prisijunk")
}

console.log("devinta uzduotis:")

let sk = parseInt(prompt("iveskite skaiciu"))
if (sk >= 50) {
    console.log(`ivestas skaicius ${sk}`)
    }
else { 
    console.log("ivestas skaicius mazesnis uz 50")
}

console.log("desimta uzduotis:")

let sign = prompt("iveskite aritmetini zenkla (+ - / *")
let sk1 = parseInt(prompt("iveskite pirma skaiciu"))
let sk2 = parseInt(prompt("iveskite antra skaiciu"))

if (sign == "/") {
    console.log(sk1 / sk2);
}
else if (sign == "*") {
    console.log(sk1 * sk2);
}
else if (sign == "+") {
    console.log(sk1 + sk2);
}
else if (sign == "-") {
    console.log(sk1 - sk2);
}
else {
    console.log('netinkamai ivesti duomenys');
}  
