export interface registerDTO {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  gender: string;
  color: string;
  profileImage: FormData;
}

export interface registerInterface {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  gender: string;
  color: string;
  profileImage: FileList;
}
