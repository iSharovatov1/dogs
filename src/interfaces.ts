export interface IGetImagesParams {
  breed: String,
  subBreed: String,
  count: number,
}

export interface IStore {
  Dogs: {},
  breeds: String[] | [],
  subBreeds: [String] | [],
  currentBreed: number,
  currentSubBreed: number,
  imagesCount: number,
  images: [String] | [],
  isLoading: boolean,
  error: String | null,
}
