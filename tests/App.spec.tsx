import { ProductsList } from "@/components/ProductsList";
import { Providers } from "@/provider";
import { cleanup, render as rtlRender, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { productList_1, productList_2 } from "./mocks";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/Header";
import { Cart } from "@/components/Cart";
import { format } from "@/components/ProductCard";
import { ChakraProvider } from "@chakra-ui/react";

const render = (component: ReactNode) =>
  rtlRender(
    <Providers>
      <ChakraProvider>{component}</ChakraProvider>
    </Providers>
  );

describe("Home Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  afterEach(() => {
    cleanup();
  });
  it("should render list of products", () => {
    const { getByText, rerender } = render(
      <ProductsList loading={false} products={productList_1} />
    );

    expect(getByText("Iphone 11 128 GB")).toBeInTheDocument();
    expect(getByText("AirPods")).toBeInTheDocument();
    expect(getByText("Macbook Air")).toBeInTheDocument();
    expect(getByText("iPhone 12 64 GB")).toBeInTheDocument();
    expect(getByText("Apple Watch Series 7")).toBeInTheDocument();
    expect(getByText("iPad")).toBeInTheDocument();
    expect(getByText("Headset Cloud Revolver")).toBeInTheDocument();
    expect(getByText("Headset Cloud Stinger")).toBeInTheDocument();

    rerender(
      <Providers>
        <ChakraProvider>
          <ProductsList loading={false} products={productList_2} />
        </ChakraProvider>
      </Providers>
    );
    expect(getByText("Mouse gamer")).toBeInTheDocument();
    expect(getByText("Monitor")).toBeInTheDocument();
  });
  it("should be able to add a product to cart", async () => {
    const { findByText } = render(<Header />);
    const { getAllByText } = render(
      <ProductsList loading={false} products={productList_1} />
    );

    expect(await findByText("0")).toBeInTheDocument();

    const buyButtons = getAllByText("COMPRAR");
    expect(buyButtons).toHaveLength(8);

    userEvent.click(buyButtons[0]);

    expect(await findByText("1")).toBeInTheDocument();
  });

  it("should update the total value of the cart when a new product is added", async () => {
    const { getAllByText } = render(
      <ProductsList loading={false} products={productList_1} />
    );

    const buyButtons = getAllByText("COMPRAR");
    expect(buyButtons).toHaveLength(8);

    userEvent.click(buyButtons[0]);

    cleanup();

    const { getByText: getByTextCart, debug } = render(
      <Cart isOpen={true} onClose={() => null} />
    );

    expect(getByTextCart(`Total:`).children[0].textContent).toBe(
      format(`R$${productList_1[0].price}`)
    );
  });

  it("should be able to increase and decrease the amount of a product on cart", async () => {
    const { getByText, findByText } = render(
      <Cart isOpen={true} onClose={() => null} />
    );

    const increaseButton = getByText("+");
    let amount = getByText("-").nextSibling?.textContent;
    const decreaseButton = getByText("-");

    expect(amount).toBe("1");
    userEvent.click(increaseButton);
    expect(await findByText("2")).toBeInTheDocument();
    userEvent.click(decreaseButton);
    expect(await findByText("1")).toBeInTheDocument();
  });
  it("should update the price when the product amount is updated", async () => {
    const { getByText, findAllByText } = render(
      <Cart isOpen={true} onClose={() => null} />
    );

    const increaseButton = getByText("+");
    const decreaseButton = getByText("-");

    expect(
      await findAllByText(`R$${format(productList_1[0].price)}`)
    ).toHaveLength(2);
    userEvent.click(increaseButton);
    expect(
      await findAllByText(
        `R$${format((parseFloat(productList_1[0].price) * 2).toFixed(2))}`
      )
    ).toHaveLength(2);
    userEvent.click(decreaseButton);
    expect(
      await findAllByText(
        `R$${format(parseFloat(productList_1[0].price).toFixed(2))}`
      )
    ).toHaveLength(2);
  });
  it("should remove the product from cart when the amount reaches 0", async () => {
    const { getByText, debug, queryByText } = render(
      <Cart isOpen={true} onClose={() => null} />
    );

    const decreaseButton = getByText("-");

    expect(getByText(productList_1[0].name)).toBeInTheDocument();
    userEvent.click(decreaseButton);

    await waitFor(() => {
      expect(queryByText(productList_1[0].name)).not.toBeInTheDocument();
    });
  });
});
