const posts = [
  {
    userhandle: "@PeterPoster",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "beach.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@PeterPoster",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "beach.mp4",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@TinaTraveller",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "mountains.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@TinaTraveller",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "canyon.mp4",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@LarsLocal",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "abstract-circles.jpg",
    likeCount: 123456,
    createdAt: new Date(),
  },
  {
    userhandle: "@LarsLocal",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "easter-bunnies.mp4",
    likeCount: 123456,
    createdAt: new Date(),
  },
  {
    userhandle: "@BerndBart",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "asian-house.jpg",
    likeCount: 2,
    createdAt: new Date(),
  },
  {
    userhandle: "@DonnaDrama",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "backpack.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@DonnaDrama",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "reading.mp4",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@DonnaDrama",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "busy-street.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@ElsaErdbeere",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "couple-kitchen.jpg",
    likeCount: 4567,
    createdAt: new Date(),
  },
  {
    userhandle: "@ElsaErdbeere",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "skaters.mp4",
    likeCount: 4567,
    createdAt: new Date(),
  },
  {
    userhandle: "@FilippaFeurig",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "dramatic-portrait.jpg",
    likeCount: 78945,
    createdAt: new Date(),
  },
  {
    userhandle: "@GabrielaGut",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "field-wheat.jpg",
    likeCount: 567,
    createdAt: new Date(),
  },
  {
    userhandle: "@JosephJoker",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "flower-art.jpg",
    likeCount: 784,
    createdAt: new Date(),
  },
  {
    userhandle: "@RosaRot",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "garden-art.jpg",
    likeCount: 45678,
    createdAt: new Date(),
  },
  {
    userhandle: "@SteffiSanft",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "moon.jpg",
    likeCount: 49789,
    createdAt: new Date(),
  },
  {
    userhandle: "@SteffiSauer",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaSource: "snow-mountains.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
]

class PostService {
  async getAll() {
    return posts
  }
  async getByUserHandle(handle) {
    return posts.filter(p => p.userhandle == handle)
  }
}

export default new PostService()