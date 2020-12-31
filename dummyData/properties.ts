const randomHouse = () => Math.floor(Math.random()*4) + 1;
const randomPropertyType = () => {
  const types = [
    "apt",
    "condo",
    "dorm",
    "house"
  ]

  return types[randomHouse() - 1];
}

export const properties = [
  {
    id: 1,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 12000,
    city: "makati",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 1,
    bathrooms: 1,
    tenants: 2,
    withUtilities: false
  },
  {
    id: 2,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 15000,
    city: "ortigas",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 1,
    bathrooms: 1,
    tenants: 3,
    withUtilities: false
  },
  {
    id: 3,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 25000,
    city: "BGC",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 2,
    bathrooms: 1,
    tenants: 2,
    withUtilities: true
  },
  {
    id: 4,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 23000,
    city: "QC",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 2,
    bathrooms: 2,
    tenants: 3,
    withUtilities: false
  },
  {
    id: 5,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 40000,
    city: "makati",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 3,
    bathrooms: 2,
    tenants: 5,
    withUtilities: true
  },
  {
    id: 6,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 30000,
    city: "ortigas",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 3,
    bathrooms: 2,
    tenants: 4,
    withUtilities: false
  },
  {
    id: 7,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 29000,
    city: "BGC",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 2,
    bathrooms: 2,
    tenants: 2,
    withUtilities: false
  },
  {
    id: 8,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 12500,
    city: "QC",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 1,
    bathrooms: 1,
    tenants: 1,
    withUtilities: true
  },
  {
    id: 9,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 22000,
    city: "makati",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 1,
    bathrooms: 1,
    tenants: 1,
    withUtilities: false
  },
  {
    id: 10,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 21000,
    city: "ortigas",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 3,
    bathrooms: 1,
    tenants: 2,
    withUtilities: true
  },
  {
    id: 11,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 37000,
    city: "BGC",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 2,
    bathrooms: 1,
    tenants: 2,
    withUtilities: false
  },
  {
    id: 12,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 40000,
    city: "QC",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 3,
    bathrooms: 2,
    tenants: 4,
    withUtilities: true
  },
  {
    id: 13,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 34000,
    city: "makati",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 2,
    bathrooms: 2,
    tenants: 1,
    withUtilities: false
  },
  {
    id: 14,
    imageUrl: `/pic/houses/house${randomHouse()}.png`,
    type: randomPropertyType(),
    monthlyRent: 19000,
    city: "ortigas",
    address: "#4 kindness st multinational village paranaque city",
    bedrooms: 1,
    bathrooms: 1,
    tenants: 1,
    withUtilities: false
  },
]