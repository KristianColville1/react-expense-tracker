import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {
            id: "1",
            title: "Car Insurance",
            amount: 300,
            date: new Date(2023, 2, 12),
        },
        {
            id: "2",
            title: "Hair Cuts",
            amount: 150,
            date: new Date(2023, 11, 9),
        },
        {
            id: "3",
            title: "Home Insurance",
            amount: 300,
            date: new Date(2023, 7, 30),
        },
        {
            id: "4",
            title: "Health Insurance",
            amount: 900,
            date: new Date(2023, 5, 29),
        },
    ];
    return (
        <div>
            <NewExpense></NewExpense>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
