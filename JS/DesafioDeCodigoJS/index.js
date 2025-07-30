let nome = "Taina";
let xp = 2000;
let experiencia = "";
if (xp < 1000) {
    experiencia = "Ferro";
} else if (xp >= 1000 && xp < 2000) {
    experiencia = "Bronze";
} else if (xp >= 2000 && xp < 5000) {
    experiencia = "Prata";
} else if (xp >= 5000 && xp < 7000) {
    experiencia = "Ouro";
} else if (xp >= 7000 && xp < 8000) {
    experiencia = "Platina";
} else if (xp >= 8000 && xp < 9000) {
    experiencia = "Ascendente";
} else if (xp >= 9000 && xp < 10000) {
    experiencia = "Imortal";
} else if (xp >= 10000) {
    experiencia = "Radiante";
}
console.log("O herói de nome " + nome + " está no nível de " + experiencia);