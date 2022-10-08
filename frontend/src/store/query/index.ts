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
} from '../../../../shared/common/types'

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API.BASE,
  }),
  tagTypes: ['Character'],
  endpoints: (builder) => ({
    getCharacterById: builder.query<CommonCharacterData, CharacterId>({
      query: ({ id }) => `${API.GETBYID}/${id}`,
      providesTags: ['Character'],
    }),
    getCharacterList: builder.query<GetCharacterListResponse, PaginationOptions>({
      query: ({ take, skip }) => `${API.GETLIST}?take=${take}&skip=${skip}`,
      providesTags: ['Character'],
    }),
    createCharacter: builder.mutation<CharacterId, FormData>({
      query: (data) => ({
        url: `${API.CREATE}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Character'],
    }),
    updateCharacter: builder.mutation<CharacterId, FormData>({
      query: (data) => ({
        url: `${API.UPDATE}/${data.get('id')}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Character'],
    }),
    deleteCharacter: builder.mutation<void, CharacterId>({
      query: ({ id }) => ({
        url: `${API.DELETE}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Character'], 
    }),
    addPhoto: builder.mutation<void, FormData>({
      query: (data) => ({
        url: "/test",
        method: 'POST',
        body: data
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
  useAddPhotoMutation,
} = characterApi;