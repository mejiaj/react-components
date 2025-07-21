import { Dropdown } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    label: "Fruits",
    options: [
      {
        id: 0,
        label: "Apple",
        value: "apple",
      },
      {
        id: 1,
        label: "Apricot",
        value: "apricot",
      },
      {
        id: 2,
        label: "Avocado",
        value: "avocado",
      },
    ],
  },
};

export const Default = {};
