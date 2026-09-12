interface Transaction {
    id: number;
    type: "income" | "expense";
    description: string;
    amount: number;
}

class FinanceTracker {
    private transactions: Transaction[] = [];

    addTransaction(
        id: number,
        type: "income" | "expense",
        description: string,
        amount: number
    ): void {
        this.transactions.push({
            id,
            type,
            description,
            amount
        });
    }

    getIncome(): number {
        return this.transactions
            .filter(transaction => transaction.type === "income")
            .reduce((total, transaction) => total + transaction.amount, 0);
    }

    getExpenses(): number {
        return this.transactions
            .filter(transaction => transaction.type === "expense")
            .reduce((total, transaction) => total + transaction.amount, 0);
    }

    getBalance(): number {
        return this.getIncome() - this.getExpenses();
    }

    printReport(): void {
        console.log("Finance Report");
        console.log("==============");

        for (const transaction of this.transactions) {
            console.log(
                `${transaction.id} | ${transaction.type} | ` +
                `${transaction.description} | $${transaction.amount.toFixed(2)}`
            );
        }

        console.log("==============");
        console.log(`Income: $${this.getIncome().toFixed(2)}`);
        console.log(`Expenses: $${this.getExpenses().toFixed(2)}`);
        console.log(`Balance: $${this.getBalance().toFixed(2)}`);
    }
}

const tracker = new FinanceTracker();

tracker.addTransaction(1, "income", "Monthly Salary", 3200);
tracker.addTransaction(2, "expense", "Rent", 950);
tracker.addTransaction(3, "expense", "Groceries", 280.50);
tracker.addTransaction(4, "income", "Freelance Payment", 650);
tracker.addTransaction(5, "expense", "Transport", 120);

tracker.printReport();