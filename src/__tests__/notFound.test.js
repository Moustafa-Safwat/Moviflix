import React from "react";
import { render } from "@testing-library/react";
import NotFound from "../pages/notFound";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
  theme: { isDarkMode: false }
});

it("Go Home button exists in notfound page", () => {
    const { getByText } = render(
        <Provider store={store}>
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        </Provider>
    );
    const buttonElement = getByText(/Go Home/i);
    expect(buttonElement).toBeInTheDocument();
});



