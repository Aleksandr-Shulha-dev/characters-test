import { CommonCharacterData } from "../../../shared/common/types"
import { API, ENV } from "../common/enums";

export const createImgUrl = (data: CommonCharacterData[]) => {
  return data.map(char => {
    let localImg = char.images.filter(url => !url.startsWith('http'));
    const foreignImg = char.images.filter(url => url.startsWith('http'));
    localImg = localImg.map(url => {
      return `${ENV.URL}${ENV.PORT}${API.BASE}${API.IMAGES}/${url}`
    });
    return ({
      ...char,
      images: [...localImg, ...foreignImg], 
    })
  })
}