import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const editingHandler = () => {
        setIsEditing((prevValue) => (true ? prevValue === false : false));
    };
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    if (isEditing === false) {
        return (
            <div className="new-expense">
                <button type="submit" onClick={editingHandler}>
                    Add New Expense
                </button>
            </div>
        );
    }
    return (
        <div className="new-expense">
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCloseForm={editingHandler}
            />
        </div>
    );
};

export default NewExpense;
