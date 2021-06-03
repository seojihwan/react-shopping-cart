import React from "react";
import { MemoryRouter } from "react-router-dom";

import Order from ".";
import { Story, Meta } from "@storybook/react";

const order = [
  {
    id: "1",
    name: "브랜브랜 철봉",
    price: 1000000,
    quantity: 5,
    imageUrl: "http://via.placeholder.com/400x400",
  },
  {
    id: "1",
    name: "브랜브랜 철봉",
    price: 1000000,
    quantity: 5,
    imageUrl: "http://via.placeholder.com/400x400",
  },
];

export default {
  title: "Pages/Order",
  component: Order,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[{ pathname: "/order", state: { order, totalPrice: 2000000 } }]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story = () => <Order />;

export const Basic = Template.bind({});
