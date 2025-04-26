interface Props {
  onFilterChange: (category: string) => void;
}

const CartFilter = ({ onFilterChange }: Props) => {
  return (
    <div>
      <select
        name="Categories"
        id=""
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="groceries">Groceries</option>
        <option value="utility">Utility</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default CartFilter;
