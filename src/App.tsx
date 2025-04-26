import { useState } from "react";
import CartComponent from "./components/CartComponent";
import InputComponent from "./components/InputComponent";
import CartFilter from "./components/CartFilter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenseList, setExpense] = useState<
    { id: number; description: string; amount: number; category: string }[]
  >([
    {
      id: 1,
      description: "Groceries",
      amount: 50,
      category: "groceries",
    },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 100,
      category: "utility",
    },
    {
      id: 3,
      description: "Movie Tickets",
      amount: 30,
      category: "entertainment",
    },
  ]);

  const onDelete = (id: number) => {
    setExpense(expenseList.filter((e) => e.id !== id));
  };

  const visibleCategory =
    selectedCategory && selectedCategory !== "all"
      ? expenseList.filter((e) => e.category === selectedCategory)
      : expenseList;

  return (
    <div>
      <InputComponent
        onSubmit={(data) =>
          setExpense([...expenseList, { ...data, id: expenseList.length + 1 }])
        }
      />

      <div className="mb-3">
        {expenseList.length !== 0 && (
          <CartFilter
            onFilterChange={(category) => setSelectedCategory(category)}
          />
        )}
      </div>
      <div>
        <CartComponent expenses={visibleCategory} deleteHandler={onDelete} />
      </div>
    </div>
  );
}

export default App;
