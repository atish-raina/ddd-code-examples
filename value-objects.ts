// Value Object: 
// Has no identity (eg: 500 doll is 500 doll for every business house)  
// Is immutable (not to be modified) 500 dollar can't be mofified, it can be added or deleted but that would be a new instance
// Concept or measurement: Has value like money


export class Money {
	private readonly amount: number;
	private readonly currency: string;

	constructor(amount: number, currency: string) {
		if(!amount || amount < 0) {
			throw new Error("Please enter a valid amount > or = 0");
		}

		if(!currency || currency.length !== 3) {
			throw new Error("Please enter a valid 3 letter ISO approved currency")
		}

		this.amount = amount;
		this.currency = currency;
	}

	private ensureSameCurrency(other: Money) {
		if (this.currency !== other.currency) {
			throw new Error("currency mismatch");
		}
	}


	equals(other): boolean {
		return this.amount === other.amount && this.currency === other.currency;
	}

	add(other): Money {
		this.ensureSameCurrency(other);
		return new Money(this.amount + other.amount, this.currency);
	}

	subtract(other): Money {
		this.ensureSameCurrency(other);
		if(this.amount < other.amount) {
			throw new Error('Insufficient Balance')
		}
		return new Money(this.amount - other.amount, this.currency)
	}

	toString(): string {
		return `${this.currency} ${this.amount}`
	}

	getAmount(): number {
		return this.amount;
	}

	getCurrency(): string {
		return this.currency;
	}
}

const a = new Money(100, 'USD');
const b = new Money(10, 'USD');

console.log(a.equals(b));
