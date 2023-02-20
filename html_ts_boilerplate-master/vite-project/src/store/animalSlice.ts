import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

export type Animal = {
    id: number,
    name: string,
    species: string,
    image: string
}

interface AnimalType {
    animals: any[],
    loading: boolean
}
  
const initialState: AnimalType = {
    animals: [],
    loading: false
}

const animalSlice = createSlice( {
    name: "animals",
    initialState,
    reducers: {
        setAllAnimals: (state, action: PayloadAction<Animal[]>) => {
            state.animals = action.payload

        },
        setloading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload

        },
        addAnimal: (state, action: PayloadAction<Animal>) => {
            state.animals.push(action.payload)

        },
        deleteAnimal: (state, action) => {
            state.animals = state.animals.filter((animal) => animal.id !== action.payload.id)
        },
        sortAnimals: (state, action) => {
            state.animals = state.animals.filter((animal) => animal.species === action.payload.species)
        },

    }
})

export const { addAnimal, deleteAnimal, sortAnimals, setAllAnimals, setloading } = animalSlice.actions
export default animalSlice.reducer