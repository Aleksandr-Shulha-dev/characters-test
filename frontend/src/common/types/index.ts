import { UpdateCharacterBody } from "../../../../shared/common/types";

type CharacterId = {
  id: string;
}

interface UpdateCharacterRequest extends UpdateCharacterBody{
  id: string;
}

export type {
  CharacterId,
  UpdateCharacterRequest,
}