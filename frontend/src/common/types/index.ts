import { UpdateCharacterBody } from "../../../../shared/common/types";

interface CharacterId {
  id: string;
}

interface UpdateCharacterRequest extends UpdateCharacterBody{
  id: string;
}

export type {
  CharacterId,
  UpdateCharacterRequest,
}