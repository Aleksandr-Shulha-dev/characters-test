export const calcNumberOfPaginationList = ( count: number | undefined ): number => {
  return (typeof(count) === 'undefined') ? 0: Math.ceil(count/5);
}