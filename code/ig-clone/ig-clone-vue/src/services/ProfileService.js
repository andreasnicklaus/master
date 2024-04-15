const profiles = [
  {
    username: 'Your Profile',
    handle: '@you',
    profileImageSource: 'your-profile.jpg',
  },
  {
    username: "Peter Poster",
    handle: "@PeterPoster",
    profileImageSource: "peter-poster.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Tina Traveller",
    handle: "@TinaTraveller",
    profileImageSource: "tina-traveller.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Lars Local",
    handle: "@LarsLocal",
    profileImageSource: "lars-local.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Bernd Bart",
    handle: "@BerndBart",
    profileImageSource: "bernd-bart.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Donna Drama",
    handle: "@DonnaDrama",
    profileImageSource: "donna-drama.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Elsa Erdbeere",
    handle: "@ElsaErdbeere",
    profileImageSource: "elsa-erdbeere.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Filippa Feurig",
    handle: "@FilippaFeurig",
    profileImageSource: "filippa-feurig.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Gabriela Gut",
    handle: "@GabrielaGut",
    profileImageSource: "gabriela-gut.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Joseph Joker",
    handle: "@JosephJoker",
    profileImageSource: "joseph-joker.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Rosa Rot",
    handle: "@RosaRot",
    profileImageSource: "rosa-rot.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Steffi Sanft",
    handle: "@SteffiSanft",
    profileImageSource: "steffi-sanft.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    username: "Steffi Sauer",
    handle: "@SteffiSauer",
    profileImageSource: "steffi-sauer.jpg",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
]

class ProfileService {
  async getAll() {
    return profiles
  }

  async getByHandle(handle) {
    return profiles.find(p => p.handle == handle)
  }
}

export default new ProfileService();