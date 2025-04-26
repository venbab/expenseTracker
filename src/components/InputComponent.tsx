import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  description: z
    .string()
    .min(3, "Description should be atleast max 3 characters")
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount must be a number" })
    .positive("Amount must be a positive number")
    .min(0.01)
    .max(10000),
  category: z.enum(["groceries", "utility", "entertainment"]),
});

type expenseData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: expenseData) => void;
}

const InputComponent = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<expenseData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <input
            {...register("description")}
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount">Amount</label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category">Category</label>
          <select
            {...register("category")}
            id="category"
            name="category"
            className="form-control"
          >
            <option value="groceries">Groceries</option>
            <option value="utility">Utility</option>
            <option value="entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
