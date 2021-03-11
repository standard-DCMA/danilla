/**
 * add function
 * @param args
 */
export default function add(...args: number[]) {
  return args.reduce((total, cur) => {
    return total + cur;
  }, 0);
}