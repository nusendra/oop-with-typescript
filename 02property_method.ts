class Hewan3 {
    nama: string = '';
    kaki: number = 0;
    mamalia: boolean = false;

    bernafas() {
        console.log(`${this.nama} sedang bernafas`);
    }
}

const hewan3 = new Hewan3();
console.log(hewan3);

hewan3.nama = 'katak';
hewan3.kaki = 4;
console.log(hewan3);

hewan3.bernafas();