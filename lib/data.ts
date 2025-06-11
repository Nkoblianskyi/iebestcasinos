import type { Casino } from "./types"

export function getCasinos(): Casino[] {
  return [
    {
      name: "Midnite",
      url: "https://www.midnite.com/",
      bonus: "Bet €20 Get 100 Free Spins",
      logo: "/mid.svg",
      rating: 5,
      votes: 723,
      usersCount: 2847,
      trending: true,
    },
    {
      name: "BoyleSports Games",
      url: "https://www.boylesports.com/",
      bonus: "Bet €10 Get €50 Casino Bonus",
      logo: "/boylesports.png",
      rating: 4.9,
      votes: 651,
      usersCount: 1923,
      trending: true,
    },
    {
      name: "BetFred",
      url: "https://www.betfred.com/",
      bonus: "Bet €10 Get 200 Free Spins",
      logo: "/betfred.png",
      rating: 4.8,
      votes: 598,
      usersCount: 1654,
      trending: false,
    },
    {
      name: "BetVictor",
      url: "https://www.betvictor.com/en-ie",
      bonus: "Bet €10 Get €30 + 30 Free Spins",
      logo: "/betvictor.png",
      rating: 4.7,
      votes: 511,
      usersCount: 1287,
      trending: true,
    },
    {
      name: "Mr.Play",
      url: "https://ie.mrplay.com/",
      bonus: "Get a 100% bonus up to €200 + 20 EXTRA SPINS",
      logo: "/mrplay.png",
      rating: 4.6,
      votes: 489,
      usersCount: 1156,
      trending: false,
    },
  ]
}
