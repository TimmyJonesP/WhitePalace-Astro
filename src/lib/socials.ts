export interface Socials {
  name: string;
  link: string;
  alt: string;
  image: string;
  type?: string;
  color?: string;
}

export const socials: Socials[] = [
  {
    name: "Tik Tok",
    link: "https://www.tiktok.com/@whitepalaceok",
    alt: "Tik Tok logo",
    image: "/tiktok.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/whitepalaceok/",
    alt: "Instagram logo",
    image: "/instagram.svg",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@whitepalaceofficial",
    alt: "Youtube logo",
    image: "/youtube.svg",
    type: "music",
    color: "bg-red-400",
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/intl-es/artist/1HXeMcQJ7RZsIGtqVGe0fZ?si=LYsOycQQR16KdrSK7xYFJA",
    alt: "Spotify logo",
    image: "/spotify.svg",
    type: "music",
    color: "bg-green-400",
  },
  {
    name: "Apple Music",
    link: "https://music.apple.com/us/artist/white-palace/1601124568",
    alt: "Apple Music logo",
    image: "/applemusic.svg",
    type: "music",
    color: "bg-gray-300",
  },
  {
    name: "Tidal",
    link: "https://tidal.com/browse/artist/29845962",
    alt: "Tidal logo",
    image: "/tidal.svg",
    type: "music",
    color: "bg-gray-300",
  },
];
