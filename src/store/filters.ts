import { atom } from 'nanostores';

const filtersStore = atom({ sort: "height_to", weights: [] as number[] })

export default filtersStore