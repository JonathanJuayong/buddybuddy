import { number } from "yup/lib/locale";

export interface DefaultState {
  filters: {
    rooms: {
      city: string;
      rent: {
        min: number,
        max: number,
      },
      bedrooms: number,
      bathrooms: number,
      tenants: number,
      withUtilities: boolean,
      type: string,
    },
    roommates: {
      preferredLocation: string,
      budget: {
        min: number,
        max: number,
      }
      gender: string,
    },
  }
}

export const defaultState: DefaultState = {
  filters: {
    rooms: {
      city: "",
      rent: {
        min: 10000,
        max: 50000,
      },
      bedrooms: 1,
      bathrooms: 1,
      tenants: 1,
      withUtilities: false,
      type: "",
    },
    roommates: {
      preferredLocation: "",
      budget: {
        min: 10000,
        max: 50000
      },
      gender: "",
    }
  }
}