const aws = import.meta.env.VITE_AWS;

const data = {
  Quizzinga: [
    {
      id: 1,
      name: "CRYPTEX",
      description: "Cryptex is an online quiz competition with a format similar to a treasure hunt. Each participant has to register individually and go through all the levels before being crowned as the winner. The questions will be diverse and will...",
      image: `${aws}/cryptex.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/cryptex-plinth-2025-lnm-institute-of-information-technology-lnmiit-1227139"
    },
    {
      id: 2,
      name: "IPL Auction",
      description: "The IPL Auction simulates the pre-season player auction. Two rounds a cricket quiz and a subsequent auction determine team composition. Shortlisted teams, based on quiz scores, bid on players.",
      image: `${aws}/IPL_auction.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/quiz/ipl-auction-lnm-institute-of-information-technology-lnmiit-1228699"
    },
    {
      id: 3,
      name: "BRANDWAGON",
      description: "Brandwagon is Quizzinga's flagship business quiz which takes place every year during Plinth. It will be held in two rounds. First is the written round and six highest scoring teams will move on to the finals.",
      image: `${aws}/brandwagon.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/brandwagon-plinth-2025-lnm-institute-of-information-technology-lnmiit-1231099"
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
      readMoreLink: "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493"
    }
  ],
  DebSoc: [
    {
      id: 7,
      name: "THE LNMIIT MUN 25'",
      description: "Get Ready for LNMIIT MUN '25! Step into the world of diplomacy and debate at LNMIIT MUN 2025! Represent a country, tackle global issues, draft resolutions, and negotiate alliances. Meet students from diverse backgrounds, develop...",
      image: `${aws}/mun.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/modern-united-nation-plinth-2025-lnmiit-1217495"
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
      readMoreLink: "https://unstop.com/competitions/brahmaand-the-space-ideathon-plinth-2025-lnm-institute-of-information-technology-lnmiit-1232305"
    },
    {
      id: 8,
      name: "Starpix",
      description: "Get ready for 'Starpix'—a night of capturing space with your lens! 🌌✨ Bring your camera, and let's capture the beauty of the night sky together. 📸✨Let your inner artist out with those amazing astrophotographs! From.....",
      image: "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/starpix-the-astrophotography-competition-plinth-2025-lnmiit-1234645"
    },
    {
      id: 9,
      name: "Astromemia",
      description: "Hear ye hear ye all self-proclaimed memelords🗿! ASTROMEMIA, presented by the Astronomy Club of LNMIIT, is calling all cosmic comedians to a meme duel the internet's never seen! Bombard @astronomylnmiit with...",
      image: `${aws}/astromemia.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/astromemia-astronomy-themed-meme-making-competition-plinth-2025-lnm-institute-of-information-technology-lnm-1235807"
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
  Phoenix: [
    {
      id: 7,
      name: "Robowars",
      description: "Get ready for an epic clash of machines! Watch as robots go head-to-head in an arena of chaos. Will your creation dominate the battlefield, or will it crumble under pressure?",
      image: `${aws}/robowars.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/robowars-plinth-2025-lnm-institute-of-information-technology-lnmiit-1319733"
    },
    {
      id: 8,
      name: "ROBOCUP",
      description: "To bring the raw energy of football and the marvel of mechanical engineering together, Plinth is excited to announce Robocup, a football tournament where the participating players are none other than robots. Build and progr....",
      image: `${aws}/robocup.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/robocup-plinth-2025-lnm-institute-of-information-technology-lnmiit-1247701"
    },
    {
      id: 9,
      name: "ROBORACE",
      description: "Get ready for the ultimate test of speed, precision, and cutting-edge technology in Velocity Vanguards - Robo Race. This thrilling event challenges participants to design and unleash their high-speed robotic vehicles on the trac....",
      image: `${aws}/roborace.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/roborace-plinth-2025-lnm-institute-of-information-technology-lnmiit-1247704"
    },
    {
      id: 10,
      name: "LNM TECH EXPO",
      description: "The future is now! Come and experience the latest in robotics technology at our upcoming EXPO. You'll see robots of all shapes and sizes, performing tasks that were once thought to be the exclusive domain of humans. From delicate surgery to...",
      image: `${aws}/lnm_tech_expo.png`,
      registerLink: "#",
      readMoreLink: "#"
    },
    {
      id: 11,
      name: "ROBO TRANSPORTER",
      description: "Welcome to \"Transporter\", an exhilarating robotics competition that challenges participants to design and build autonomous transport systems. In this cutting-edge event, teams will showcase their engineering process by creating robot...",
      image: `${aws}/robo_transporter.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/robo-transporter-plinth-2025-lnm-institute-of-information-technology-lnmiit-1247741"
    },
    {
      id: 12,
      name: "Maze Solver",
      description: "In this electrifying competition, teams of tech wizards will pit their robots against a mind-boggling maze. The robots will have to navigate their way through a series of obstacles and challenges, using sensors, algorithms, and sheer robotic prow....",
      image: `${aws}/maze_solver.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/maze-solver-plinth-2025-lnm-institute-of-information-technology-lnmiit-1245943"
    },
    {
      id: 13,
      name: "RC Plane",
      description: "'The engine is the heart of the airplane , but the pilot is its soul.' - Walter Releigh Ever dreamt of being a pilot? If yes , the time has come to live up to your dreams as 'Phoenix'- The Robotics Club of LNMIIT brings to you a chance to build ...",
      image: `${aws}/rc_plane.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/rc-plane-plinth-2025-lnm-institute-of-information-technology-lnmiit-1340790"
    },
    {
      id: 14,
      name: "DRONE RACING",
      description: "Greetings Airmasters !!! Does your winged friend have the ability to emerge out as the best amongst all? The time has now arrived to showcase the speed of your drone. Use all your skills to design a racing drone and make it fly through....",
      image: `${aws}/drone_racing.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/drone-racing-plinth-2025-lnm-institute-of-information-technology-lnmiit-1328424"
    },
    {
      id: 15,
      name: "MICRO MOUSE",
      description: "'The engine is the heart of the airplane , but the pilot is its soul.' - Walter Releigh Ever dreamt of being a pilot? If yes , the time has come to live up to your dreams as 'Phoenix'- The Robotics Club of LNMIIT brings to you a chance to ...",
      image: `${aws}/micro_mouse.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/micro-mouse-plinth-2025-lnm-institute-of-information-technology-lnmiit-1338181"
    }
  ],
  ASME: [
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
  SAE: [
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
  Coding: [
    {
      id: 7,
      name: "IUPC",
      description: "Gear up for Cybros' thrilling ICPC-style contest—a high-energy competition featuring teams of three! With a rigorous five-hour format, you'll tackle a set of challenging problems, putting your coding skills, teamwork, and problem-s...",
      image: `${aws}/iupc.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170"
    },
    {
      id: 8,
      name: "ENIGMA",
      description: "Get ready for Cybros' flagship event—a Division 2-style individual coding contest designed to challenge and inspire. This two-hour competition brings together the best coders, all competing solo for a chance to claim ....",
      image: `${aws}/enigma.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/enigma-plinth-2025-lnm-institute-of-information-technology-lnmiit-1241628"
    },
    {
      id: 9,
      name: "CP Duels",
      description: "Challenge your friends to a coding problem duel and see who can outsmart and outcode the other! Dive into a thrilling race against the clock, where each second counts as you tackle complex problems and push you .....",
      image: `${aws}/cp_duels.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/cp-duels-plinth-2025-lnm-institute-of-information-technology-lnmiit-1249749"
    },
    {
      id: 10,
      name: "Coding Cascade",
      description: "Get ready for Coding Cascade, a high-stakes team coding event like no other! In this unique challenge, three questions are designed for three team members, where each question's output becomes the next question's input. The .....",
      image: `${aws}/coding_cascade.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/coding-cascade-plinth-2025-lnm-institute-of-information-technology-lnmiit-1316759"
    },
    {
      id: 11,
      name: "Alice, Bob, GO!",
      description: "After tackling countless Alice and Bob game theory problems, have you ever wondered what it would be like to play them in real life? Now's your chance! We've crafted an experience that brings these classic logic battles to life. Dive into our...",
      image: `${aws}/alice_bob_go.png`,
      registerLink: "#",
      readMoreLink: "https://unstop.com/competitions/alice-bob-go-plinth-2025-lnm-institute-of-information-technology-lnmiit-1249756"
    }]
};
export default data;
