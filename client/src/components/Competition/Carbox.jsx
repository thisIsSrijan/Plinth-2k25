import { useEventContext } from "./EventContext";
import NeonCard from "./NeonCard";

const Carbox = () => {
  const { selectedEvent } = useEventContext();

  const eventsData = {
    Quizzinga: [
      {
        id: 1,
        name: "Event A1",
        description: "Description A1",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 2,
        name: "Event B1",
        description: "Description B1",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 3,
        name: "Event C1",
        description: "Description C1",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 4,
        name: "Event D1",
        description: "Description D1",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 5,
        name: "Event E1",
        description: "Description E1",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 6,
        name: "Event F1",
        description: "Description F1",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Cybros: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    "E Cell": [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    DebSoc: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Astronomy: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Cipher: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Phoenix: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    ASME: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    SAE: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Coding: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
  };
  {
    /*dummy data array  */
  }

  const eventsData2 = {
    Quizzinga: [
      {
        id: 1,
        name: "CRYPTEX",
        description:
          "Cryptex is an online quiz competition with a format similar to a treasure hunt. Each participant has to register individually and go through all the levels before being crowned as the winner. The questions will be diverse and will include all forms of genres.",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 2,
        name: "IPL Auction",
        description:
          "IPL Auction is a real life simulation of the auction which we witness before every IPL season. It will be held in two rounds. First will be a cricket quiz and second round will be an auction between the shortlisted teams based on their first round scores. The aim will be maximizing rating given a fixed purse.",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 3,
        name: "BRANDWAGON ",
        description:
          "Brandwagon is Quizzinga's flagship business quiz which takes place every year during Plinth. It will be held in two rounds. First is the written round and six highest scoring teams will move on to the finals.",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Cybros: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],

    "E Cell": [
      {
        id: 7,
        name: "Pitch On The Rocks",
        description:
          "Welcome to the Ideathon at Plinth 2025, LNMIIT's annual techfest! This competition offers participants the opportunity to pitch their startup ideas across various industries to industry-specific experts and potential investors. With a diverse panel of angel investors, PhDs, and MBA executives, this event is your gateway to securing seed funding, mentorship, and special awards to bring your idea to life.",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    DebSoc: [
      {
        id: 7,
        name: "THE LNMIIT MUN 25’",
        description:
          "Get Ready for LNMIIT MUN '25! Step into the world of diplomacy and debate at LNMIIT MUN 2025! Represent a country, tackle global issues, draft resolutions, and negotiate alliances. Meet students from diverse backgrounds, develop public speaking and negotiation skills, and experience diplomacy in action. Join us at LNMIIT MUN 2025, where ideas meet action!",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Change My Mind",
        description:
          "Flip Our Perspective at, Change My Mind! Think you can change our mind? Test your debating skills at Change My Mind—an interactive event with debate spots set up around campus! Challenge our members on controversial (and some downright hilarious) topics, and see if you’ve got the wit and arguments to sway opinions. Don’t just talk—convince! Ready to take on the challenge?",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Astronomy: [
      {
        id: 7,
        name: "Brahmaand: The Space Ideathon",
        description:
          "Brahmaand, a ideathon where participants solve cosmic riddles & build up earth-shattering ideas is here💫. The solution to the problem statement will be presented before the quick witted judges who decide upon the winners worthy of the celestial crown and much-deserved bragging rights.",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Starpix: The Astrophotography Competition",
        description:
          "Get ready for 'Starpix'—a night of capturing space with your lens! 🌌✨ Bring your camera, and let's capture the beauty of the night sky together. 📸✨Let your inner artist out with those amazing astrophotographs! From twinkling stars and planets to cool constellations, Turn the night sky into a masterpiece. Join us at 'Starpix' in Plinth 2025! 🌠📷",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Astromemia: Astronomy themed meme making competition",
        description:
          "Hear ye hear ye all self-proclaimed memelords🗿! ASTROMEMIA, presented by the Astronomy Club of LNMIIT, is calling all cosmic comedians to a meme duel the internet's never seen! Bombard @astronomylnmiit with the galactic meme you're proud of having conjured.💫What do the winners get? A chance to forever be immortalised in the ‘meme hall of fame’ and maybe even get their hands on a cool prize 🤩",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Dhoomketu: Jamming and Stargazing session",
        description:
          "Jamming under the stars with @capriccio.lnmiit the music club of lnmiit! 🎶 Join us after pronite for a celestial experience in the library lawn. Feel the rhythm while gazing through telescopes at the mesmerizing night sky. Sing your heart out! 🎙🎵 Feel the beat! under the starry night sky! 🌌 Gaze the night sky through telescopes!🔭 ",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Cipher: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],

    Phoenix: [
      {
        id: 7,
        name: "Robowars",
        description:
          "Get ready for an epic clash of machines! Watch as robots go head-to-head in an arena of chaos. Will your creation dominate the battlefield, or will it crumble under pressure?",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "ROBOCUP",
        description:
          "To bring the raw energy of football and the marvel of mechanical engineering together, Plinth is excited to announce Robocup, a football tournament where the participating players are none other than robots. Build and program your own robots to take on the competition in a game that combines strategy, technology, and pure athleticism. Register now and join us for this exciting event where you will have the chance to be a part of a unique and cutting-edge competition!",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "ROBORACE",
        description:
          "Get ready for the ultimate test of speed, precision, and cutting-edge technology in Velocity Vanguards - Robo Race. This thrilling event challenges participants to design and unleash their high-speed robotic vehicles on the track, competing for supremacy in a race that merges engineering prowess and artificial intelligence.",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "MOTOBOAT",
        description:
          "Dive into the world of innovation and speed with &quot;Moto Boat&quot;, the Motor Boat Challenge that invites participants to design, build, and race their motorized boats. This electrifying event combines engineering process, aquatic finesse, and adrenaline-pumping speed in a competition that celebrates the spirit of marine technology.",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "LNM TECH EXPO",
        description:
          "The future is now! Come and experience the latest in robotics technology at our upcoming EXPO. You'll see robots of all shapes and sizes, performing tasks that were once thought to be the exclusive domain of humans. From delicate surgery to heavy-duty manufacturing, robots are changing the way we live and work.",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "ROBO TRANSPORTER",
        description:
          "Welcome to &quot;Transporter&quot;, an exhilarating robotics competition that challenges participants to design and build autonomous transport systems. In this cutting-edge event, teams will showcase their engineering process by creating robots capable of navigating complex terrains, overcoming obstacles, and efficiently transporting objects from one point to another..",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 13,
        name: "Maze Solver",
        description:
          "In this electrifying competition, teams of tech wizards will pit their robots against a mind-boggling maze. The robots will have to navigate their way through a series of obstacles and challenges, using sensors, algorithms, and sheer robotic prowess to reach the finish line first.",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 14,
        name: "RC Plane",
        description:
          "'The engine is the heart of the airplane , but the pilot is its soul.' - Walter Releigh Ever dreamt of being a pilot? If yes , the time has come to live up to your dreams as 'Phoenix'- The Robotics Club of LNMIIT brings to you a chance to build your own plane and make it rip through the air. Enter the airfield and emerge as the best at the end of three rounds.",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 15,
        name: "DRONE RACING",
        description:
          "Greetings Airmasters !!! Does your winged friend have the ability to emerge out as the best amongst all? The time has now arrived to showcase the speed of your drone. Use all your skills to design a racing drone and make it fly through the crossline without crashing. Make your way to the airfield and let your drone do the talking",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 16,
        name: "MICRO MOUSE",
        description:
          "'The engine is the heart of the airplane , but the pilot is its soul.' - Walter Releigh Ever dreamt of being a pilot? If yes , the time has come to live up to your dreams as 'Phoenix'- The Robotics Club of LNMIIT brings to you a chance to build your own plane and make it rip through the air. Enter the airfield and emerge as the best at the end of three rounds.",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    ASME: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    SAE: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
    Coding: [
      {
        id: 7,
        name: "Event A2",
        description: "Description A2",
        image: "/assets/event-a2.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 8,
        name: "Event B2",
        description: "Description B2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 9,
        name: "Event C2",
        description: "Description C2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 10,
        name: "Event D2",
        description: "Description D2",
        image: "/assets/event-a1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 11,
        name: "Event E2",
        description: "Description E2",
        image: "/assets/event-b1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
      {
        id: 12,
        name: "Event F2",
        description: "Description F2",
        image: "/assets/event-c1.jpg",
        registerLink: "#",
        readMoreLink: "#",
      },
    ],
  };
  {
    /* real to be used in production later */
  }

  return (
    <>
      <div className="mt-[8vh] flex-col">
        {/* Desktop/Tablet Layout (3 cards per row) - For screens ≥ 768px */}
        <div className="hidden items-center md:flex  overflow-hidden flex-col gap-[2vh]">
          {Array.from({
            length: Math.ceil(eventsData[selectedEvent].length / 3),
          }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center  gap-[4vw] flex-row"
            >
              {eventsData[selectedEvent]
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((event) => (
                  <NeonCard key={event.id} event={event} />
                ))}
            </div>
          ))}
        </div>

        {/* Mobile Layout (2 cards per row) - For screens < 768px */}
        <div className="flex items-center md:hidden flex-col gap-[2vh]">
          {Array.from({
            length: Math.ceil(eventsData[selectedEvent].length / 2),
          }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex  gap-[4vw] flex-row">
              {eventsData2[selectedEvent]
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((event) => (
                  <NeonCard key={event.id} event={event} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carbox;
