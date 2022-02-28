/**
 * Pause for the specified amount of time.
 *
 * @param delay delay time in seconds
 */
export const sleep = async (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay * 1000);
  });
};
