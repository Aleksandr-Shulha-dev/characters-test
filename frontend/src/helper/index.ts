import { FormState } from "../common/types";

const calcNumberOfPaginationList = ( count: number | undefined ): number => {
  return (typeof(count) === 'undefined') ? 0: Math.ceil(count/5);
};

const fillFormData = (state: FormState, data: FormData): FormData => {
  for (const[key, val] of Object.entries(state)) {
    data.append(key, val);
  }

  return data;
};

export { calcNumberOfPaginationList, fillFormData };