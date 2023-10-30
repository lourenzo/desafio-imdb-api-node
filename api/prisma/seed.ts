import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Initial Data Charge
 */

const actors: Prisma.ActorUncheckedCreateInput[] = [
  {
    id: 1,
    name: "Keir Dullea",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTczODgxNDU1NV5BMl5BanBnXkFtZTYwMzQxOTI2._V1_QL75_UY140_CR2,0,140,140_.jpg",
  },
  {
    id: 2,
    name: "Gary Lockwood",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ0MDMzNjQ1Nl5BMl5BanBnXkFtZTYwNzMxOTI2._V1_QL75_UY140_CR1,0,140,140_.jpg",
  },
  {
    id: 3,
    name: "William Sylvester",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMzAzMDc5OTI1NV5BMl5BanBnXkFtZTcwNDQ1MzY2OQ@@._V1_QL75_UY140_CR24,0,140,140_.jpg",
  },
  {
    id: 4,
    name: "Daniel Richter",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BOWNlZjBiZmUtMjJlNC00MGEyLTgzY2MtMTA2N2I5ZDYzNTY3XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_QL75_UY140_CR31,0,140,140_.jpg",
  },
  {
    id: 5,
    name: "Leonard Rossiter",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM1ODMwMzQ5OV5BMl5BanBnXkFtZTcwNTgxOTgxOA@@._V1_QL75_UX140_CR0,6,140,140_.jpg",
  },
  {
    id: 6,
    name: "Margaret Tyzack",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMjI0NTAzMzkzOV5BMl5BanBnXkFtZTcwMDMwNjIyMw@@._V1_QL75_UY140_CR37,0,140,140_.jpg",
  },
  {
    id: 7,
    name: "Robert Beatty",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM0ODE0NzkwOF5BMl5BanBnXkFtZTcwMjkwODUxOA@@._V1_QL75_UX140_CR0,14,140,140_.jpg",
  },
  {
    id: 8,
    name: "Sean Sullivan",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BZjgzNGViNzYtODYxMC00NGUyLWI0NjQtMmZkNmFlNDkyZWY0XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_QL75_UY140_CR86,0,140,140_.jpg",
  },
  {
    id: 9,
    name: "Douglas Rain",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BZjBiMjBjMzctMWMzOS00ODc4LTgyNjEtMTMxMGQ4ZTRmZjRjXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_QL75_UX140_CR0,0,140,140_.jpg",
  },
  {
    id: 10,
    name: "Frank Miller"
  },
  {
    id: 11,
    name: "Bill Weston",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BNjM4MmQ2MWEtYmNiZi00MWU5LTkyYzItNzFjMzUxNTdlYTRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_QL75_UY140_CR95,0,140,140_.jpg",
  },
  {
    id: 12,
    name: "Ed Bishop",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BZTQyMThlNzUtNGRhZS00MmU4LTk2YTktYzcwZDA3ZjhlYjIzXkEyXkFqcGdeQXVyNDQ3NDM5OQ@@._V1_QL75_UX140_CR0,0,140,140_.jpg",
  },
  {
    id: 13,
    name: "Glenn Beck",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BYTM4ZGFmMWUtYTE1MC00NTlhLTgwODItY2YzOWE0Mjg3ZTY4XkEyXkFqcGdeQXVyNDU4NDMzNDY@._V1_QL75_UX140_CR0,12,140,140_.jpg",
  },
  {
    id: 14,
    name: "Alan Gifford",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMzcwNjAyYTMtZmNlMC00ZWVjLThiYmMtZGE0ZDA5MTZiODQyXkEyXkFqcGdeQXVyMTQxMjk0Mg@@._V1_QL75_UY140_CR18,0,140,140_.jpg",
  },
  {
    id: 15,
    name: "Ann Gillis",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BODQ2NzYwYjctZDlkNC00NmZhLTkyOGUtZDJkMTNjNzQ5MzE4XkEyXkFqcGdeQXVyMDMxMjQwMw@@._V1_QL75_UX140_CR0,26,140,140_.jpg",
  },
  {
    id: 16,
    name: "Edwina Carroll",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQyMjgzNjkyNl5BMl5BanBnXkFtZTYwNzYxOTI2._V1_QL75_UY140_CR4,0,140,140_.jpg",
  },
  {
    id: 17,
    name: "Penny Brahms",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BOTk0MTUyNDExN15BMl5BanBnXkFtZTcwMjMwMTgyMw@@._V1_QL75_UY140_CR80,0,140,140_.jpg",
  },
  {
    id: 18,
    name: "Heather Downham",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BYjRmOWFhMjMtMTVlZi00ODFmLThhYTktZTBkY2RiZjA4NWQwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_QL75_UY140_CR86,0,140,140_.jpg",
  },
  {
    id: 19,
    name: "Eddie Murphy",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_QL75_UX140_CR0,5,140,140_.jpg",
  },
  {
    id: 20,
    name: "Jada Pinkett Smith",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTE1MjQ0OF5BMl5BanBnXkFtZTgwMzczNTkwNjE@._V1_QL75_UX140_CR0,14,140,140_.jpg",
  },
  {
    id: 21,
    name: "James Coburn",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMyNTg3Njg4M15BMl5BanBnXkFtZTcwOTI1ODE1NA@@._V1_QL75_UX140_CR0,0,140,140_.jpg",
  },
  {
    id: 22,
    name: "Larry Miller",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg4NzQxOTMwOF5BMl5BanBnXkFtZTcwNDc3NDIzMQ@@._V1_QL75_UX140_CR0,4,140,140_.jpg",
  },
  {
    id: 23,
    name: "Dave Chappelle",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BOTIyMjgzMjczNV5BMl5BanBnXkFtZTYwNjM4NzUz._V1_QL75_UX140_CR0,6,140,140_.jpg",
  },
  {
    id: 24,
    name: "John Ales",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BM2YxYzRlZmYtN2ZmOS00NzVlLWFjNTEtNzZhYWQ3M2EyYmM3XkEyXkFqcGdeQXVyODQyNzY5NA@@._V1_QL75_UX140_CR0,1,140,140_.jpg",
  },
  {
    id: 25,
    name: "Patricia Wilson",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BOWY5NjBiZWEtZmI5ZC00NDgxLWIzODQtNzNkYmE2OWJmM2YwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_QL75_UY140_CR42,0,140,140_.jpg",
  },
  {
    id: 26,
    name: "Jamal Mixon",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMzMDQ5NTQ3NF5BMl5BanBnXkFtZTYwNTM5OTA1._V1_QL75_UX140_CR0,13,140,140_.jpg",
  },
  {
    id: 27,
    name: "Nichole McAuley",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMWNjZmVlNGEtMzVlNi00NzQ2LThiMjUtNThmOWM5ZmNiYTJlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL75_UX140_CR0,21,140,140_.jpg",
  },
  {
    id: 28,
    name: 'Hamilton von Watts'
  },
  {
    id: 29,
    name: 'Tony Carlin'
  },
  {
    id: 30,
    name: "Quinn Duffy",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BYmRmZmJkNjItNzU4Zi00MGIyLWJlOTMtMjM1Mjc1MDFjNTAzXkEyXkFqcGdeQXVyMTY5NjI0NDc@._V1_QL75_UX140_CR0,36,140,140_.jpg",
  },
  {
    id: 31,
    name: "Montell Jordan",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5NTk5MzAxMl5BMl5BanBnXkFtZTYwOTE5MjY0._V1_QL75_UX140_CR0,15,140,140_.jpg",
  },
  {
    id: 32,
    name: "Doug Williams",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTkzMjc0NjAwNV5BMl5BanBnXkFtZTgwNTg5NTc5MjE@._V1_QL75_UY140_CR24,0,140,140_.jpg",
  },
  {
    id: 33,
    name: "David Ramsey",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTUzNTQwMjk2NV5BMl5BanBnXkFtZTgwNjEzNTY5NTM@._V1_QL75_UX140_CR0,10,140,140_.jpg",
  },
  {
    id: 34,
    name: "Chaz Lamar Shepherd",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU4MjMzNjYyMV5BMl5BanBnXkFtZTYwMzU5NjQ0._V1_QL75_UX140_CR0,0,140,140_.jpg",
  },
  {
    id: 35,
    name: 'Lisa Halpern'
  },
  {
    id: 36,
    name: "Mark McPherson",
    pictureUrl:
      "https://m.media-amazon.com/images/M/MV5BNDYyODY0NzgtOTNhMC00NDAyLTkyYjMtM2Y2OWI2MzdmOWZjXkEyXkFqcGdeQXVyMjEyODM2ODY@._V1_QL75_UY140_CR35,0,140,140_.jpg",
  },
];

const titles: Prisma.TitleUncheckedCreateInput[] = [
  {
    id: 1,
    type: "movie",
    title: "2001: Uma Odisséia o Espaço",
    originalTitle: "2001: A Space Odyssey",
    year: 1968,
    runtimeMins: 149,
    genres: ["Adventure", "Sci-Fi"],
    directors: ["Stanley Kubrick"],
    writers: ["Stanley Kubrick", "Arthur C. Clarke"],
    stars: ["Keir Dullea", "Gary Lockwood", "William Sylvester"],
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=UgGCScAV7qU",
  },
  {
    id: 2,
    type: "movie",
    title: "O Professor Aloprado",
    originalTitle: "The Nutty Professor",
    year: 1996,
    runtimeMins: 95,
    genres: ["Comedy", "Romance", "Sci-Fi"],
    directors: ["Tom Shadyac"],
    writers: ["Jerry Lewis", "Bill Richmond", "David Sheffield"],
    stars: ["Eddie Murphy", "Jada Pinkett Smith", "James Coburn"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTcwODlmZDktNWRkOC00NTFlLTkyMjQtYWUxMzZkNDE4MGVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=o3wJ-jzZqBw"
  }
];

const castings : Prisma.CastingUncheckedCreateInput[] = [
  {
    titleId: 1,
    actorId: 1,
    roles: ['Dr. Dave Bowman']
  },
  {
    titleId: 1,
    actorId: 2,
    roles: ['Dr. Frank Poole']
  },
  {
    titleId: 1,
    actorId: 3,
    roles: ['Dr. Heywood R. Floyd']
  },
  {
    titleId: 1,
    actorId: 4,
    roles: ['Moon-Watcher']
  },
  {
    titleId: 1,
    actorId: 5,
    roles: ['Dr. Andrei Smyslov']
  },
  {
    titleId: 1,
    actorId: 6,
    roles: ['Elena']
  },
  {
    titleId: 1,
    actorId: 7,
    roles: ['Dr. Ralph Halvorsen']
  },
  {
    titleId: 1,
    actorId: 8,
    roles: ['Dr. Bill Michaels']
  },
  {
    titleId: 1,
    actorId: 9,
    roles: ['HAL 9000 (narração)']
  },
  {
    titleId: 1,
    actorId: 10,
    roles: ['Mission Controller (narração)']
  },
  {
    titleId: 1,
    actorId: 11,
    roles: ['Astronaut']
  },
  {
    titleId: 1,
    actorId: 12,
    roles: ['Aries-1B Lunar Shuttle Captain']
  },
  {
    titleId: 1,
    actorId: 13,
    roles: ['Astronaut']
  },
  {
    titleId: 1,
    actorId: 14,
    roles: ["Poole's Father"]
  },
  {
    titleId: 1,
    actorId: 15,
    roles: ["Poole's Mother"]
  },
  {
    titleId: 1,
    actorId: 16,
    roles: ['Aries-1B Stewardess']
  },
  {
    titleId: 1,
    actorId: 17,
    roles: ['Stewardess']
  },
  {
    titleId: 1,
    actorId: 18,
    roles: ['Stewardess']
  },
  {
    titleId: 2,
    actorId: 19,
    roles: ["Sherman Klump", "Buddy Love", "Lance Perkins", "Papa Klump", "Mama Klump", "Granma Klump", "Ernie Klump"]
  },
  {
    titleId: 2,
    actorId: 20,
    roles: ['Carla Purty']
  },
  {
    titleId: 2,
    actorId: 21,
    roles: ['Harlan Hartley']
  },
  {
    titleId: 2,
    actorId: 22,
    roles: ['Dean Richmond']
  },
  {
    titleId: 2,
    actorId: 23,
    roles: ['Reggie Warrington']
  },
  {
    titleId: 2,
    actorId: 24,
    roles: ['Jason']
  },
  {
    titleId: 2,
    actorId: 25,
    roles: ["Dean's Secretary"]
  },
  {
    titleId: 2,
    actorId: 26,
    roles: ['Ernie Klump Jr.']
  },
  {
    titleId: 2,
    actorId: 27,
    roles: ['Fit Woman']
  },
  {
    titleId: 2,
    actorId: 28,
    roles: ['Health Instructor']
  },
  {
    titleId: 2,
    actorId: 29,
    roles: ['Host']
  },
  {
    titleId: 2,
    actorId: 30,
    roles: ['Bartender']
  },
  {
    titleId: 2,
    actorId: 31,
    roles: ['Montell Jordan']
  },
  {
    titleId: 2,
    actorId: 32,
    roles: ['Band Leader']
  },
  {
    titleId: 2,
    actorId: 33,
    roles: ['Student']
  },
  {
    titleId: 2,
    actorId: 34,
    roles: ['Student']
  },
  {
    titleId: 2,
    actorId: 35,
    roles: ['Sad Fat Girl']
  },
  {
    titleId: 2,
    actorId: 36,
    roles: ['Doctor']
  }
];

(async () => {
  await prisma.actor.createMany({ data: actors });
  await prisma.title.createMany({ data: titles });
  await prisma.casting.createMany({ data: castings });
})();
