import { FormState } from "../common/types";
import { CommonCharacterData } from "../../../shared/common/types";

const calcNumberOfPaginationList = ( count: number | undefined ): number => {
  return (typeof(count) === 'undefined') ? 0: Math.ceil(count/5);
};

const fillFormData = (state: FormState, data: FormData): FormData => {
  for (const[key, val] of Object.entries(state)) {
    data.append(key, val);
  }

  return data;
};

const getInitialState = (
  isCreatePage: boolean,
  data: CommonCharacterData,
  createInitialState: FormState,
): FormState => {
  if (isCreatePage) {
    return createInitialState;
  } else {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
    } = data
    return ({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      file: null
    })
  }
}

export { calcNumberOfPaginationList, fillFormData, getInitialState };