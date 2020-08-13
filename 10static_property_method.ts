class Ayam {
    static kaki: number = 2;

    static jalan() {
        console.log(`ayam berjalan dengan ${this.kaki} kaki`);
    }

    getKaki() {
        // console.log(this.kaki)
        console.log(Ayam.kaki)
    }
}

console.log(Ayam.jalan());

const ayam2 = new Ayam();
ayam2.getKaki();

// ---------------------
const ayam3 = new Ayam();
const ayam4 = new Ayam()
const ayam5 = new Ayam()
const ayam6 = new Ayam()
const ayam7 = new Ayam()
const ayam8 = new Ayam()

console.log(ayam3.getKaki())
console.log(ayam4.getKaki())
console.log(ayam5.getKaki())
console.log(ayam6.getKaki())
console.log(ayam7.getKaki())
console.log(ayam8.getKaki())

Ayam.kaki = 4;


console.log(ayam3.getKaki())
console.log(ayam4.getKaki())
console.log(ayam5.getKaki())
console.log(ayam6.getKaki())
console.log(ayam7.getKaki())
console.log(ayam8.getKaki())