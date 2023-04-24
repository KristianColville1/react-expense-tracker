import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";


const DUMMY_EXPENSES = [
    {
        id: "1a",
        title: "Car Insurance",
        amount: 300,
        date: new Date(2023, 2, 12),
    },
    {
        id: "2a",
        title: "Hair Cuts",
        amount: 150,
        date: new Date(2022, 11, 9),
    },
    {
        id: "3a",
        title: "Home Insurance",
        amount: 300,
        date: new Date(2021, 7, 30),
    },
    {
        id: "4a",
        title: "Health Insurance",
        amount: 900,
        date: new Date(2023, 5, 29),
    },
];
function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
