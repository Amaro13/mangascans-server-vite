import * as T from "../types/interfaces";
import Solo_Leveling from "../assets/imgs/mangas/Solo_Leveling.webp";
import Mount_Hua from "../assets/imgs/mangas/MountHuaSect.webp";
import Disaster_Hero from "../assets/imgs/mangas/Disasterhero.webp";
import SoloMaxLevelNewbie from "../assets/imgs/mangas/solomaxlevelnewbie.webp";

export const mockedManga: T.Manga[] = [
  {
    id: "e5ce260d-7f53-4123-8497-1d8e28786703",
    name: "Solo Leveling",
    description:
      "Some super weak guy gets fucked over and then gets super powers and now is in route to become the strongest guy ever.",
    chapters: 257,
    image: Solo_Leveling,
    genreId: "b7df5bb8-d5dc-4174-8a30-1df4549a04fe",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    name: "Solo Max Level Newbie",
    description:
      "Some super weak guy gets fucked over and then gets super powers and now is in route to become the strongest guy ever.",
    chapters: 60,
    image: SoloMaxLevelNewbie,
    genreId: "b7df5bb8-d5dc-4174-8a30-1df4549a04fe",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10c6c5d1-24eb-436d-a21a-0c9b8516f9fa",
    name: "Mount Hua Sect",
    description:
      "Some super weak guy gets fucked over and then gets super powers and now is in route to become the strongest guy ever.",
    chapters: 57,
    image: Mount_Hua,
    genreId: "c30caa62-1b9a-4028-a538-593455b60fee",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "b201ee19-c00d-4e2a-bdf0-f4101348f1b5",
    name: "Disaster Hero",
    description:
      "Some super weak guy gets fucked over and then gets super powers and now is in route to become the strongest guy ever.",
    chapters: 80,
    image: Disaster_Hero,
    genreId: "c30caa62-1b9a-4028-a538-593455b60fee",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
