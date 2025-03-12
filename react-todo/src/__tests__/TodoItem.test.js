import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

test("renders a todo item", () => {
  const todo = { id: 1, text: "Sample Todo", completed: false };
  render(<TodoItem todo={todo} toggleTodo={() => {}} deleteTodo={() => {}} />);

  expect(screen.getByText("Sample Todo")).toBeInTheDocument();
});

test("calls toggleTodo when clicked", () => {
  const mockToggleTodo = jest.fn();
  const todo = { id: 1, text: "Sample Todo", completed: false };

  render(<TodoItem todo={todo} toggleTodo={mockToggleTodo} deleteTodo={() => {}} />);
  const todoItem = screen.getByText("Sample Todo");

  fireEvent.click(todoItem);
  expect(mockToggleTodo).toHaveBeenCalledWith(1);
});

test("calls deleteTodo when delete button is clicked", () => {
  const mockDeleteTodo = jest.fn();
  const todo = { id: 1, text: "Sample Todo", completed: false };

  render(<TodoItem todo={todo} toggleTodo={() => {}} deleteTodo={mockDeleteTodo} />);
  const deleteButton = screen.getByText("Delete");

  fireEvent.click(deleteButton);
  expect(mockDeleteTodo).toHaveBeenCalledWith(1);
});
