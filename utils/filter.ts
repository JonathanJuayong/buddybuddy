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