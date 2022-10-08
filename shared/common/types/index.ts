interface CreateNewCharacterBody {
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: string[];
}

interface UpdateCharacterBody {
  nickname?: string;
  real_name?: string;
  origin_description?: string;
  superpowers?: string;
  catch_phrase?: string;
  images?: string[];
  file: File | null;
}

interface CommonCharacterData extends CreateNewCharacterBody {
  id: string;
}

type PaginationOptions = {
  skip?: string;
  take: string;
}

interface GetCharacterListResponse {
  list: CommonCharacterData[];
  count: number;
}

export type {
  CreateNewCharacterBody,
  CommonCharacterData,
  PaginationOptions,
  GetCharacterListResponse,
  UpdateCharacterBody,
};