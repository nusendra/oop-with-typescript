class Burung {
    private kaki: number = 2;

    getKaki(): number {
        return this.kaki;
    }

    terbang(): void {
        console.log('terbang');
    }

    async makan(): Promise<number> {
        return 321;
    }
}