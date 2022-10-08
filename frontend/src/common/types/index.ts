import { UpdateCharacterBody, CommonCharacterData } from "../../../../shared/common/types";

type CharacterId = {
  id: string;
}

interface UpdateCharacterRequest extends UpdateCharacterBody{
  id: string;
}

interface UpsertPageProps {
  isCreatePage: boolean;
  data?: CommonCharacterData;
}

interface InputTextState {
  nickname: string,
  real_name: string,
  origin_description: string,
  superpowers: string,
  catch_phrase: string,
}

interface FormState extends InputTextState{
  file: File | null,
}

interface PreviewState {
  name: string;
  url: string;
}

type NewCharacterQuery = InputTextState | FormData;

export type {
  CharacterId,
  UpdateCharacterRequest,
  UpsertPageProps,
  FormState,
  NewCharacterQuery,
  InputTextState,
  PreviewState,
}