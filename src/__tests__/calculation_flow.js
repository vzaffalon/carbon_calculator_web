import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainRouter from "../routers/MainRouter";

describe("CalculationFlow", () => {
  beforeAll(() => {
    delete window.matchMedia;
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });

  test("should render screen", async () => {
    render(<MainRouter></MainRouter>);

    await waitFor(() => {
      expect(
        screen.getByText(/Carbon Footprint Calculator/i)
      ).toBeInTheDocument();
    });
  });

  test("should render category items", async () => {
    render(<MainRouter></MainRouter>);

    await waitFor(() => {
      expect(screen.getByText(/Housing/i)).toBeInTheDocument();
    });
  });

  test("should render category emissions card", async () => {
    render(<MainRouter></MainRouter>);

    await waitFor(() => {
      expect(screen.getByText(/Total Housing Emissions/i)).toBeInTheDocument();
    });
  });
});
