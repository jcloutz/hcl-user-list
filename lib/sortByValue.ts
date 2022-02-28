/**
 * Sort an array of objects using the value provided to the accessor
 * callback
 *
 * @param accessor
 * @param asc
 *
 * @returns
 */
export const sortByValue = <SortableObject>(
  accessor: (obj: SortableObject) => any,
  asc: boolean = true
) => {
  // return sort function to array.sort
  return (a: SortableObject, b: SortableObject) => {
    // capture values
    const aVal = accessor(a);
    const bVal = accessor(b);

    // Flip values based on sort direction
    if (aVal > bVal) return asc ? 1 : -1;
    if (aVal < bVal) return asc ? -1 : 1;

    return 0;
  };
};
