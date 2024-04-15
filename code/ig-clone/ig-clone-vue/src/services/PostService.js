const posts = [
  {
    userhandle: "@PeterPoster",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "beach.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@PeterPoster",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "VIDEO",
    mediaSource: "beach.mp4",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@TinaTraveller",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "mountains.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@TinaTraveller",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "VIDEO",
    mediaSource: "canyon.mp4",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@LarsLocal",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "abstract-circles.jpg",
    likeCount: 123456,
    createdAt: new Date(),
  },
  {
    userhandle: "@LarsLocal",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "VIDEO",
    mediaSource: "easter-bunnies.mp4",
    likeCount: 123456,
    createdAt: new Date(),
  },
  {
    userhandle: "@BerndBart",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "asian-house.jpg",
    likeCount: 2,
    createdAt: new Date(),
  },
  {
    userhandle: "@DonnaDrama",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "backpack.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@DonnaDrama",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "VIDEO",
    mediaSource: "reading.mp4",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@DonnaDrama",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "busy-street.jpg",
    likeCount: 196,
    createdAt: new Date(),
  },
  {
    userhandle: "@ElsaErdbeere",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "couple-kitchen.jpg",
    likeCount: 4567,
    createdAt: new Date(),
  },
  {
    userhandle: "@ElsaErdbeere",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "VIDEO",
    mediaSource: "skaters.mp4",
    likeCount: 4567,
    createdAt: new Date(),
  },
  {
    userhandle: "@FilippaFeurig",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "dramatic-portrait.jpg",
    likeCount: 78945,
    createdAt: new Date(),
  },
  {
    userhandle: "@GabrielaGut",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "field-wheat.jpg",
    likeCount: 567,
    createdAt: new Date(),
  },
  {
    userhandle: "@JosephJoker",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "flower-art.jpg",
    likeCount: 784,
    createdAt: new Date(),
  },
  {
    userhandle: "@RosaRot",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "garden-art.jpg",
    likeCount: 45678,
    createdAt: new Date(),
  },
  {
    userhandle: "@SteffiSanft",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
    mediaSource: "moon.jpg",
    likeCount: 49789,
    createdAt: new Date(),
  },
  {
    userhandle: "@SteffiSauer",
    caption:
      "If you read this, you are great! Have a fantastic time doing whatever it is that comes to your mind! #ootd #foodie #Ineverthoughthisdaywouldcome",
    mediaType: "IMAGE",
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