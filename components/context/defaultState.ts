export interface DefaultState {
  filters: {
    city: string;
    rent: {
        min: number,
        max: number,
    },
    rooms: {
        bedrooms: number,
        bathrooms: number,
        tenants: number,
        withUtilities: boolean,
        type: string,
    },
    roommates: {
        gender: string,
    },
  }
}

export const defaultState: DefaultState = {
  filters: {
    city: "",
    rent: {
      min: 10000,
      max: 50000,
    },
    rooms: {
      bedrooms: 1,
      bathrooms: 1,
      tenants: 1,
      withUtilities: false,
      type: "",
    },
    roommates: {
      gender: "",
    }
  }
}