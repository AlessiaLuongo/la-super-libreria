import App from "../App";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

describe("General mounting", () => {
  it("correctly mounts the main Alert", () => {
    render(<App />);
    const mainAlert = screen.getByText(/Welcome to/i);
    expect(mainAlert).toBeInTheDocument();
  });

  it("correctly mounts the commentArea by clicking th card", () => {
    render(<App />);
    const card = screen.queryAllByAltText(/cover/i)[0];
    fireEvent.click(card);
    const commentArea = screen.queryByRole("list-group");
    expect(commentArea).toBeInTheDocument();
  });
});

describe("Fetch behavior", () => {
  it("Renders cards as many books after fetch", async () => {
    render(<App />);
    await waitFor(() => {
      const allTheBook = screen.queryAllByText(/horror/i);
      const allTheCards = screen.queryAllByAltText(/cover/i);

      expect(allTheBook.length).toBe(allTheCards.length);
    });
  });
});

describe("Customize cards", () => {
  it("change the color of the border to red by clicking the card", () => {
    render(<App />);
    const allTheCards = screen.queryAllByAltText(/cover/i);

    allTheCards.forEach((card) => {
      fireEvent.click(card);
      expect(card.border).toHaveStyle({ border: `3px solid red` });
    });
  });
});
