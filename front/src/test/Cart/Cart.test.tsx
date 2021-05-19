import React from "react";
import * as reactRedux from "react-redux";
import configureStore from "redux-mock-store";
import { configure, mount, ReactWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { CartActionsNames } from "../../actions/cart.actions";
import Cart from "../../containers/Cart";
import { OrderActionsNames } from "../../actions/order.actions";
import { countCartTotalPrice } from "../../containers/Cart/utils";

configure({ adapter: new Adapter() });
const mockStore = configureStore();

const initialReduxState = {
  cart: [
    {
      author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
      cover_url: "http://localhost:3001/static/cover/book/458.jpg",
      currency: "PLN",
      id: 458,
      pages: 300,
      price: 3300,
      quantity: 2,
      title: "Matematyka 1. Podręcznik. Zakres rozszerzony",
    },
    {
      author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
      cover_url: "http://localhost:3001/static/cover/book/457.jpg",
      currency: "PLN",
      id: 457,
      pages: 280,
      price: 3200,
      quantity: 3,
      title: "Matematyka 1. Podręcznik. Zakres podstawowy",
    },
  ],
};

const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockPush,
  }),
}));

describe("<Cart>", () => {
  let wrapper: ReactWrapper<{}, {}, {}>;

  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatchMock.mockReturnValue(mockDispatch); // useDispatch()

    wrapper = mount(
      <reactRedux.Provider store={mockStore(initialReduxState)}>
        <Cart />
      </reactRedux.Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it("it should call onDecrementClick on decrement button press", () => {
    wrapper.find(".decrement-icon").first().simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: initialReduxState.cart[0].id,
      type: CartActionsNames.DECREMENT_IN_CART,
    });
  });

  it("it should call onIncrementClick on increment button press", () => {
    wrapper.find(".increment-icon").first().simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: initialReduxState.cart[0].id,
      type: CartActionsNames.INCREMENT_IN_CART,
    });
  });

  it("it should call onRemoveFromCartClick on remove button press", () => {
    wrapper.find(".remove-book-icon").first().simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: initialReduxState.cart[0].id,
      type: CartActionsNames.REMOVE_FROM_CART,
    });
  });

  it("it should call onNextButtonPress on next button press", () => {
    wrapper.find(".next-button").first().simulate("click");
    expect(mockPush).toHaveBeenCalledWith("/summary");
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: {
        books: initialReduxState.cart.map((book) => ({
          id: book.id,
          quantity: book.quantity,
        })),
        totalPrice: countCartTotalPrice(initialReduxState.cart),
      },
      type: OrderActionsNames.SET_ORDER_SUMMARY,
    });
  });
});
