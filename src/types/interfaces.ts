export interface Favorite {
  id: string;
  favoritedAt?: Date;
  userId: string;
  mangaName: string;
}

export interface Genre {
  id: string;
  name: string;
}

export interface Manga {
  id: string;
  name: string;
  description: string;
  chapters: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  genreId: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
