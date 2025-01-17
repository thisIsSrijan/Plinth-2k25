const aws = import.meta.env.VITE_AWS;

const data = {
  Quizzinga: [
    {
      id: 1,
      name: "CRYPTEX",
      description: "Cryptex is an online quiz competition with a format similar to a treasure hunt. Each participant has to register individually and go through all the levels before being crowned as the winner. The questions will be diverse and will...",
      image: `${aws}/cryptex.png`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 2,
      name: "IPL Auction",
      description: "The IPL Auction simulates the pre-season player auction. Two rounds a cricket quiz and a subsequent auction determine team composition. Shortlisted teams, based on quiz scores, bid on players.",
      image: `${aws}/IPL_auction.png`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 3,
      name: "BRANDWAGON",
      description: "Brandwagon is Quizzinga's flagship business quiz which takes place every year during Plinth. It will be held in two rounds. First is the written round and six highest scoring teams will move on to the finals.",
      image: `${aws}/brandwagon.png`,
      registerLink: "#",
      readMoreLink: "#"
    }
  ],
  Cybros: [
    {
      id: 7,
      name: "Event A2",
      description: "Description A2",
      image: `${aws}/event-a2.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 8,
      name: "Event B2",
      description: "Description B2",
      image: `${aws}/event-b1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 9,
      name: "Event C2",
      description: "Description C2",
      image: `${aws}/event-c1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 10,
      name: "Event D2",
      description: "Description D2",
      image: `${aws}/event-a1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 11,
      name: "Event E2",
      description: "Description E2",
      image: `${aws}/event-b1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 12,
      name: "Event F2",
      description: "Description F2",
      image: `${aws}/event-c1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    }
  ],
  "E Cell": [
    {
      id: 7,
      name: "Pitch On The Rocks",
      description: "Welcome to 2025's Ideathon: The gateway to launching your idea! Pitch your startup ideas to industry experts and investors for a chance to secure seed funding, mentorship, and special awards. Our panel includes angel investors, PhDs, and...",
      image: `${aws}/event-a2.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    }
  ],
  DebSoc: [
    {
      id: 7,
      name: "THE LNMIIT MUN 25'",
      description: "Get Ready for LNMIIT MUN '25! Step into the world of diplomacy and debate at LNMIIT MUN 2025! Represent a country, tackle global issues, draft resolutions, and negotiate alliances. Meet students from diverse backgrounds, develop...",
      image: `${aws}/mun.png`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 8,
      name: "Change My Mind",
      description: "Flip Our Perspective at, Change My Mind! Think you can change our mind? Test your debating skills at Change My Mind—an interactive event with debate spots set up around campus! Challenge our members on controversial ...",
      image: `${aws}/change_my_mind.png`,
      registerLink: "#",
      readMoreLink: "#"
    }
  ],
  Astronomy: [
    {
      id: 7,
      name: "Brahmaand",
      description: "Brahmaand, a ideathon where participants solve cosmic riddles & build up earth-shattering ideas is here💫. The solution to the problem statement will be presented before the quick witted judges who decide upon the winners worthy...",
      image: `${aws}/brahmand.png`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 8,
      name: "Starpix",
      description: "Get ready for 'Starpix'—a night of capturing space with your lens! 🌌✨ Bring your camera, and let's capture the beauty of the night sky together. 📸✨Let your inner artist out with those amazing astrophotographs! From.....",
      image: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 9,
      name: "Astromemia",
      description: "Hear ye hear ye all self-proclaimed memelords🗿! ASTROMEMIA, presented by the Astronomy Club of LNMIIT, is calling all cosmic comedians to a meme duel the internet's never seen! Bombard @astronomylnmiit with...",
      image: `${aws}/astromemia.png`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 10,
      name: "Dhoomketu",
      description: "Jamming under the stars with @capriccio.lnmiit the music club of lnmiit! 🎶 Join us after pronite for a celestial experience in the library lawn. Feel the rhythm while gazing through telescopes at the mesmerizing night sky. Sing your..... ",
      image: `${aws}/dhoomketu.png`,
      registerLink: "#",
      readMoreLink: "#"
    }
  ],
  Cipher: [
    {
      id: 7,
      name: "Event A2",
      description: "Description A2",
      image: `${aws}/event-a2.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 8,
      name: "Event B2",
      description: "Description B2",
      image: `${aws}/event-b1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 9,
      name: "Event C2",
      description: "Description C2",
      image: `${aws}/event-c1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 10,
      name: "Event D2",
      description: "Description D2",
      image: `${aws}/event-a1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 11,
      name: "Event E2",
      description: "Description E2",
      image: `${aws}/event-b1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 12,
      name: "Event F2",
      description: "Description F2",
      image: `${aws}/event-c1.jpg`,
      registerLink: "#",
      readMoreLink: "#"
    }
  ],
};
export default data;
