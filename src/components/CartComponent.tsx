//
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  deleteHandler: (id: number) => void;
}

const CartComponent = ({ expenses, deleteHandler }: Props) => {
  if (expenses.length === 0) {
    return null;
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expenses) => (
            <tr key={expenses.id}>
              <td>{expenses.description}</td>
              <td>{expenses.amount}</td>
              <td>{expenses.category}</td>
              <td>
                <button
                  onClick={() => deleteHandler(expenses.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ${expenses.reduce((acc, expense) => expense.amount + acc, 0)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartComponent;
