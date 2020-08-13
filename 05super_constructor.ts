class Hewan5 {
    nama: string;
    kaki: number;

    constructor(nama: string, kaki: number) {
        this.nama = nama;
        this.kaki = kaki;
    }
}

class Katak5 extends Hewan5 {
    beracun: boolean;

    constructor(nama: string, kaki: number, beracun: boolean) {
        super(nama, kaki);
        this.beracun = beracun;
    }
}

const katak5 = new Katak5('katak', 4, false);
console.log(katak5);