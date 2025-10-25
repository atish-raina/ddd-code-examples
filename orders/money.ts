export class Money {
	private amount: number;
	private currency: string;
	constructor(amount: number, currency: string) {
		if(amount < 0) {
			throw new Error('Please enter a valid amount');
		}

		if(currency.length !== 3) {
			throw new Error('Please enter a valid ISO currency');
		} 

		this.amount = amount;
		this.currency = currency;
	}

	private isSameCurrency(other: Money) {
		if(this.currency !== other.currency) {
			throw new Error('currency mismatch');
		}
	}

	isEquals(other: Money): boolean {
		return this.amount === other.amount && this.currency === other.currency;
	}

	add(other: Money): Money {
		this.isSameCurrency(other);
		return new Money(this.amount + other.amount, this.currency);
	};

	subtract(other: Money): Money {
		this.isSameCurrency(other);
		if(this.amount < other.amount) {
			throw new Error(`Pleae maintain a minimum balance of ${other.amount}`);
		}
		return new Money(this.amount - other.amount, this.currency);
	}

	toString(): string {
		return `${this.currency} ${this.amount}`;
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

console.log(a.isEquals(b));
console.log(a.add(b));
console.log(a.subtract(b));
