import ExpenseItem from "./components/ExpenseItem";

function App() {
    return (
        <div className="mt-2">
            <h2 className="w-100 text-center">React Expense Tracker</h2>

            <div className="container text-bg-light rounded">
            <ExpenseItem></ExpenseItem>
            </div>
        </div>
    );
}

export default App;
