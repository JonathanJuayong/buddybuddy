export const filterProperties = (properties, filters) => {
  return properties
    .filter(prop => prop.city.includes(filters.rooms.city))
    .filter(prop => prop.monthlyRent >= filters.rooms.rent.min && prop.monthlyRent <= filters.rooms.rent.max)
    .filter(prop => prop.type.includes(filters.rooms.type))
    .filter(prop => prop.bedrooms >= filters.rooms.bedrooms)
    .filter(prop => prop.bathrooms >= filters.rooms.bathrooms)
    .filter(prop => prop.tenants >= filters.rooms.tenants)
    .filter(prop => prop.withUtilities === filters.rooms.withUtilities)
}

export const filterRoommates = (roommates, filters) => {
  if (roommates) return roommates
  .filter(prop => prop.gender === filters.roommates.gender)
  .filter(prop => prop.preferredLocation.includes(filters.roommates.preferredLocation))
  .filter(prop => prop.monthlyRent >= filters.roommates.budget.min && prop.monthlyRent <= filters.roommates.budget.max)

}