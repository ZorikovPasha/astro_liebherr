import { atom } from 'nanostores';
import { MachineryType } from '../types/dataTypes';

const productsStore = atom({ 
  items: [] as MachineryType[],
  total: 0,
  currentChunk: 1,
  isLoading: false,
  isError: false,
})

export default productsStore
