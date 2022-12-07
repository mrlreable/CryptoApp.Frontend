export class Wallet
{
    constructor(
        public id: number,
        public cardNumber: string,
        public cardHolder: string,
        public expirationDate: string,
        public balance: number,
        public currency: string
    )
    { }
}