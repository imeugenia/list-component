import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Renders numbers passed in props", () => {
  const selected = [1, 2, 3];
  render(<Header selected={selected} />);

  selected.forEach((number) => {
    expect(screen.getByText(number)).toBeVisible();
  });
});

test("Should display a correct element when no items are selected", async () => {
  render(<Header selected={[]} />);

  expect(screen.getByTestId("empty-select")).toBeVisible();
});
