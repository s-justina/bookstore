import cartReducer from "../../reducers/cart.reducer";
import {
  addToCart,
  decrementInCart,
  incrementInCart,
  removeFromCart,
} from "../../actions/cart.actions";

jest.mock("redux-persist/es/constants", () => ({
  REHYDRATE: "REHYDRATE",
}));

const book = {
  author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
  cover_url: "http://localhost:3001/static/cover/book/457.jpg",
  currency: "PLN",
  id: 457,
  pages: 280,
  price: 3200,
  title: "Matematyka 1. Podręcznik. Zakres podstawowy",
};

describe("cartReducer tests", () => {
  it("should return correct initial state", () => {
    expect(
      cartReducer(undefined, {
        payload: null,
        type: "",
      })
    ).toEqual([]);
  });

  it("should return correct state on ADD_TO_CART action", () => {
    expect(cartReducer(undefined, addToCart(book))).toStrictEqual([
      {
        ...book,
        quantity: 1,
      },
    ]);
  });

  it("should return correct state on ADD_TO_CART action - if book already exist", () => {
    expect(
      cartReducer(
        [
          {
            ...book,
            quantity: 1,
          },
        ],
        addToCart(book)
      )
    ).toStrictEqual([
      {
        ...book,
        quantity: 2,
      },
    ]);
  });

  it("should return correct state on INCREMENT_IN_CART action", () => {
    expect(
      cartReducer(
        [
          {
            ...book,
            quantity: 1,
          },
        ],
        incrementInCart(book.id)
      )
    ).toStrictEqual([
      {
        ...book,
        quantity: 2,
      },
    ]);
  });

  it("should return correct state on DECREMENT_IN_CART action", () => {
    expect(
      cartReducer(
        [
          {
            ...book,
            quantity: 2,
          },
        ],
        decrementInCart(book.id)
      )
    ).toStrictEqual([
      {
        ...book,
        quantity: 1,
      },
    ]);
  });

  it("should return correct state on REMOVE_FROM_CART action", () => {
    expect(
      cartReducer(
        [
          {
            ...book,
            quantity: 2,
          },
        ],
        removeFromCart(book.id)
      )
    ).toStrictEqual([]);
  });

  it("should return correct state on REHYDRATE action - initial call", () => {
    expect(
      cartReducer(undefined, {
        type: "persist/REHYDRATE",
        payload: undefined,
      })
    ).toStrictEqual([]);
  });

  it("should return correct state on REHYDRATE action - with payload", () => {
    expect(
      cartReducer(undefined, {
        type: "persist/REHYDRATE",
        payload: {
          cart: [
            {
              ...book,
              quantity: 2,
            },
          ],
        },
      })
    ).toStrictEqual([]);
  });
});
