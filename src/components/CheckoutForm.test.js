import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstNameInputField = screen.getByLabelText('First Name:');
    userEvent.type(firstNameInputField, 'Daniel');
    const lastNameInputField = screen.getByLabelText('Last Name:');
    userEvent.type(lastNameInputField, 'Brannon');
    const addressInputField = screen.getByLabelText('Address:');
    userEvent.type(addressInputField, '123 Real Street');
    const cityInputField = screen.getByLabelText('City:');
    userEvent.type(cityInputField, 'RealCity');
    const stateInputField = screen.getByLabelText('State:');
    userEvent.type(stateInputField, 'RealState');
    const zipInputField = screen.getByLabelText('Zip:');
    userEvent.type(zipInputField, '12345');
    const button = screen.getByRole('button');
    userEvent.click(button);

    const successMessage = screen.getByText('You have ordered some plants! Woo-hoo!');
    expect(successMessage).toBeInTheDocument();
});
