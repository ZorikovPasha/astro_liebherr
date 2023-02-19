type MachineryTypesType = {
  mobile: boolean
  tracked: boolean
  lowBed: boolean
  modular: boolean
}

export const makeQueryFromParams = (
  sort: string,
  weights: number[],
  types: MachineryTypesType,
  liftingCapacityFrom: number,
  liftingCapacityTo: number,
  heightFrom: number,
  heightTo: number,
  arrowLengthFrom: number,
  arrowLengthTo: number,
  chunk: number,
) => {
  const weightsQuery = weights ? weights.reduce((accum, num) => (accum ? accum + '&weight=' + num : accum + 'weight=' + num), '') : ''

  let typesQuery = ''
  let key: keyof typeof types
  for (key in types) {
    if (types[key]) {
      typesQuery += `&type=${key}`
    }
  }

  return `?${weightsQuery}${typesQuery}&liftingCapacity_from=${liftingCapacityFrom}&liftingCapacity_to=${liftingCapacityTo}&maxHeight_from=${heightFrom}&maxHeight_to=${heightTo}&arrowLength_from=${arrowLengthFrom}&arrowLength_to=${arrowLengthTo}&sort=${sort}&chunk=${chunk}`
}
