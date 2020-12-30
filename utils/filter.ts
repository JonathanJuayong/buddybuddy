// city
// monthlyRent
// type
// bedrooms
// bathrooms
// tenants
// withUtilities

// "filters": {
//   "city": "makati",
//   "rent": {
//     "min": 10000,
//     "max": 50000
//   },
//   "rooms": {
//     "bedrooms": 1,
//     "bathrooms": 1,
//     "tenants": 1,
//     "withUtilities": false,
//     "type": "apt"
//   },
//   "roommates": {
//     "gender": "male"
//   }
// }

export const filterProperties = (properties , filters) => {
  return properties
    .filter(prop => prop.city.includes(filters.city))
    .filter(prop => prop.monthlyRent >= filters.rent.min && prop.monthlyRent <= filters.rent.max)
    .filter(prop => prop.type.includes(filters.rooms.type))
    .filter(prop => prop.bedrooms >= filters.rooms.bedrooms)
    .filter(prop => prop.bathrooms >= filters.rooms.bathrooms)
    .filter(prop => prop.tenants >= filters.rooms.tenants)
    .filter(prop => prop.withUtilities === filters.rooms.withUtilities)
}