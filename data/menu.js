export const menuItems = [
  {
    id: "popia-frozen",
    name: "Popia Beef Carbonara",
    type: "Frozen",
    price: 3.0,
    unit: "10pcs",
    badge: null,
    description:
      "Frozen spring rolls filled with our signature creamy beef carbonara and melted cheese. Ready to fry at home whenever the craving hits.",
    tags: ["Cheesy", "Creamy", "Beef", "Freezer-Friendly"],
  },
  {
    id: "popia-fried",
    name: "Popia Beef Carbonara",
    type: "Fried",
    price: 13.0,
    unit: "30pcs",
    badge: "BEST SELLER",
    description:
      "Golden-fried to perfection — crunchy outside, rich and gooey inside. Our most popular item, ready to eat.",
    tags: ["Cheesy", "Creamy", "Beef", "Ready to Eat"],
  },
  {
    id: "wrap-chicken",
    name: "Chicken Carbonara Wrap",
    type: "Wrap",
    price: 2.5,
    unit: "each",
    badge: null,
    description:
      "Hearty toasted tortilla wrap with juicy chicken, rich white carbonara sauce, and melted mozzarella.",
    tags: ["Toasted", "Chicken", "Mozzarella"],
  },
  {
    id: "wrap-beef",
    name: "Beef Carbonara Wrap",
    type: "Wrap",
    price: 2.5,
    unit: "each",
    badge: null,
    description:
      "Hearty toasted tortilla wrap with seasoned minced beef, rich white carbonara sauce, and melted mozzarella.",
    tags: ["Toasted", "Beef", "Mozzarella"],
  },
  {
    id: "wrap-tuna",
    name: "Tuna Spicy/Mayo Wrap",
    type: "Wrap",
    price: 2.0,
    unit: "each",
    badge: null,
    description:
      "Toasted wrap with your choice of spicy tuna or creamy Japanese mayo tuna, paired with fresh veg and Kewpie sauce.",
    tags: ["Toasted", "Tuna", "Kewpie Sauce"],
  },
  {
    id: "bakso-mama",
    name: "Original Bakso Mama",
    type: "Bulk",
    price: 0,
    unit: "min. 15 pax",
    badge: "TRADITIONAL",
    description:
      "Our family's heritage recipe — authentic, springy beef meatballs perfect for soups or stir-fry. Halal, no preservatives. Contact for pricing.",
    tags: ["Bulk Buy", "No Preservatives", "Authentic Recipe"],
    priceNote: "Contact for pricing",
  },
];

export function getMenuByType(type) {
  return menuItems.filter((item) => item.type === type);
}
