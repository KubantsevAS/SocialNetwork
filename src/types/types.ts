export interface PostsDataType {
  id: number;
  message: string;
  number: number;
}

export interface ContactsType {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
}

export interface PhotosType {
  small: string | null;
  large: string | null;
}

export interface ProfileType {
  userId: number;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
}

export interface UserType {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
}
