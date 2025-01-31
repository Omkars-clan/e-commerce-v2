export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "input",
    type: "text",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "sofas", label: "Sofa & Recliners" },
      { id: "tables", label: "Tables" },
      { id: "wallpapers", label: "Wallpapers" },
      { id: "curtains", label: "Curtains & Blinds" },
      { id: "lights", label: "Interior Lights" },
      { id: "decoration", label: "Home Decoration" },
      { id: "essentials", label: "Home Essentials" },
      { id: "ceiling", label: "Ceiling Decoration" },
      { id: "outdoor", label: "Outdoor Items" },
      { id: "custom", label: "Customization" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "All Products",
    path: "/shop/listing",
  },
  // {
  //   id: "men",
  //   label: "Men",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "women",
  //   label: "Women",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "kids",
  //   label: "Kids",
  //   path: "/shop/listing",
  // },
  {
    id: "about",
    label: "About Us",
    path: "/shop/about",
  },
  {
    id: "contact",
    label: "Contact Us",
    path: "/shop/contact",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  sofas: "Sofa & Recliners",
  tables: "Tables", 
  wallpapers: "Wallpapers",
  curtains: "Curtains & Blinds",
  lights: "Interior Lights",
  decoration: "Home Decoration",
  essentials: "Home Essentials",
  ceiling: "Ceiling Decoration",
  outdoor: "Outdoor Items",
  custom: "Customization"
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  category: [
    { id: "sofas", label: "Sofa & Recliners" },
    { id: "tables", label: "Tables" },
    { id: "wallpapers", label: "Wallpapers" },
    { id: "curtains", label: "Curtains & Blinds" },
    { id: "lights", label: "Interior Lights" },
    { id: "decoration", label: "Home Decoration" },
    { id: "essentials", label: "Home Essentials" },
    { id: "ceiling", label: "Ceiling Decoration" },
    { id: "outdoor", label: "Outdoor Items" },
    { id: "custom", label: "Customization" },
  ],
  // brand: [
  //   { id: "nike", label: "Nike" },
  //   { id: "adidas", label: "Adidas" },//perm
  //   { id: "puma", label: "Puma" },
  //   { id: "levi", label: "Levi's" },
  //   { id: "zara", label: "Zara" },
  //   { id: "h&m", label: "H&M" },
  // ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
