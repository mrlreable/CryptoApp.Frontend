export class Stock
{
    constructor(
        public id: number,
        public name: string,
        public shortName: string,
        public price: number,
        public spread: number,
        public change: number,
        public totalPurchased: number,
        public description: string
    )
    { }

}