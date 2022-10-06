import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../../common/enums';
import {
  CharacterId,
  UpdateCharacterRequest,
} from '../../common/types';
import {
  CommonCharacterData,
  GetCharacterListResponse,
  PaginationOptions,
  CreateNewCharacterBody,
} from '../../../../shared/common/types'

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API.BASE,
  }),
  endpoints: (builder) => ({
    getCharacterById: builder.query<CommonCharacterData, CharacterId>({
      query: ({ id }) => `${API.GETBYID}/${id}`,
    }),
    getCharacterList: builder.query<GetCharacterListResponse, PaginationOptions>({
      query: ({ take, skip }) => `${API.GETLIST}?take=${take}&skip=${skip}`,
    }),
    createCharacter: builder.mutation<void, CreateNewCharacterBody>({
      query: ({ ...body }) => ({
        url: `${API.CREATE}`,
        method: 'POST',
        body,
      })
    }),
    updateCharacter: builder.mutation<void, UpdateCharacterRequest>({
      query: ({ id, ...body }) => ({
        url: `${API.UPDATE}/${id}`,
        method: 'PATCH',
        body,
      })
    }),
    deleteCharacter: builder.mutation<void, CharacterId>({
      query: ({ id }) => ({
        url: `${API.DELETE}/${id}`,
        method: 'DELETE',
      }) 
    })
  }),
});

export const {
  useGetCharacterByIdQuery,
  useGetCharacterListQuery,
  useCreateCharacterMutation,
  useUpdateCharacterMutation,
  useDeleteCharacterMutation,
} = characterApi;