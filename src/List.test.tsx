import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";

const data = [{ name: "Name 1" }, { name: "Name 2" }, { name: "Name 3" }];

const onChange = jest.fn();

test("Renders checkboxes for every list item", () => {
  render(
    <List onChange={onChange}>
      {data.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </List>
  );

  const checkboxes = screen.getAllByTestId("checkbox");
  expect(checkboxes.length).toEqual(data.length);
});

test("Triggers `onChange` on item select", async () => {
  render(
    <List onChange={onChange}>
      {data.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </List>
  );

  data.forEach(async ({ name }) => {
    await userEvent.click(screen.getByLabelText(name));
  });

  expect(onChange.mock.calls.length).toBe(data.length);
});
