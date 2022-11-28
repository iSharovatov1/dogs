export interface IGetImagesParams {
  breed: string,
  subBreed: string,
  count: number,
}

export interface IStore {
  Dogs: any,
  breeds: string[] | [],
  subBreeds: [string] | [],
  currentBreed: number,
  currentSubBreed: number,
  imagesCount: number,
  images: [string] | [],
  requests: [any] | []
  isLoading: boolean,
  error: string | null,
}

export interface IAddFetcher {
  payload: IGetImagesParams,
}

export interface IFetchImagesReject {
  payload: {
    data: string,
  },
}
