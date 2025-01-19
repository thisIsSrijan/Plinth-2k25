const aws = import.meta.env.VITE_AWS;
import pitch from "../../assets/competition/pitch.jpg";
import bizminds from "../../assets/competition/bizminds.jpg";
import ideathon from "../../assets/competition/ideathon.jpg";
import casecraft from "../../assets/competition/casecraft.jpg";
import trading from "../../assets/competition/trading.jpg";
import sustainathon from "../../assets/competition/sustainathon.jpg";
import starpix from "../../assets/competition/starpix.jpg";
import lnmhacks from "../../assets/competition/lnmhacks.jpg";
import bgmi from "../../assets/competition/bgmi.jpg";
import codm from "../../assets/competition/codm.jpg";
import clashroyale from "../../assets/competition/clashroyale.jpg";
import valorant from "../../assets/competition/valorant.jpg";
import freefire from "../../assets/competition/freefire.jpg";
import beatlab from "../../assets/competition/beatlab.jpg";
import gamesmith from "../../assets/competition/gamesmith.jpg";
import creatifrenzy from "../../assets/competition/creatifrenzy.jpg";
import djbattle from "../../assets/competition/djbattle.jpg";
import odinseye from "../../assets/competition/odinseye.jpg";
import motoboat from "../../assets/competition/motoboat.jpg";
import cubeopen from "../../assets/competition/cubeopen.jpg";
import cyberolympiad from "../../assets/competition/cyberolympiad.jpg";
import telescope from "../../assets/competition/telescope.jpg";
const data = {
  Quizzing: [
    {
      id: 1,
      name: "CRYPTEX",
      description:
        "Cryptex is an online quiz competition with a format similar to a treasure hunt. Each participant has to register individually and go through all the levels before being crowned as the winner. The questions will be diverse and will...",
      image: `${aws}/cryptex.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/cryptex-plinth-2025-lnm-institute-of-information-technology-lnmiit-1227139",
    },
    {
      id: 2,
      name: "IPL Auction",
      description:
        "The IPL Auction simulates the pre-season player auction. Two rounds a cricket quiz and a subsequent auction determine team composition. Shortlisted teams, based on quiz scores, bid on players.",
      image: `${aws}/IPL_auction.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/quiz/ipl-auction-lnm-institute-of-information-technology-lnmiit-1228699",
    },
    {
      id: 3,
      name: "BRANDWAGON",
      description:
        "Brandwagon is Quizzinga's flagship business quiz which takes place every year during Plinth. It will be held in two rounds. First is the written round and six highest scoring teams will move on to the finals.",
      image: `${aws}/brandwagon.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/brandwagon-plinth-2025-lnm-institute-of-information-technology-lnmiit-1231099",
    },
    {
      id: 4,
      name: "Biz Minds",
      description:
        "Dive into a thrilling blend of startup pitches and brain-teasing quizzes. Showcase your ideas, challenge your knowledge, and impress our elite panel of investors and experts. Win funding, mentorship, and glory—are you ready to ignite your business brain?",
      image: bizminds,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
  ],
  Startup: [
    {
      id: 7,
      name: "Pitch On The Rocks",
      description:
        "Welcome to the Ideathon at Plinth 2025, LNMIIT's annual techfest! This competition offers participants the opportunity to pitch their startup ideas across various industries to industry-specific experts and potential investors. With a diverse panel of .....",
      image: pitch,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 8,
      name: "Ideathon",
      description:
        "Welcome to 2025's Ideathon: The gateway to launching your idea! Pitch your startup ideas to industry experts and investors for a chance to secure seed funding, mentorship, and special awards. Our panel includes angel investors, PhDs, and...",
      image: ideathon,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 9,
      name: "CASECRAFT",
      description:
        "CaseCraft: Hack & Hustle—where brilliant minds tackle real-world business challenges! This national-level event invites students from across India to dive into dynamic case studies, crafting innovative solutions and showcasing strategic thinking.....",
      image: casecraft,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 10,
      name: "Virtual Trading Titans",
      description:
        "Welcome to Virtual Trading Titans: The ultimate online entrepreneurship challenge! Compete with top entrepreneurs in a virtual trading environment where strategy, innovation, and market instincts define your success.",
      image: trading,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 11,
      name: "Sustainathon",
      description:
        "Unleash your creativity and entrepreneurial spirit at Sustainathon, the ultimate platform for tech enthusiasts, innovators, and changemakers. Collaborate, code, and craft solutions to tackle real-world sustainability challenges.",
      image: sustainathon,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 12,
      name: "Biz Minds",
      description:
        "Dive into a thrilling blend of startup pitches and brain-teasing quizzes. Showcase your ideas, challenge your knowledge, and impress our elite panel of investors and experts. Win funding, mentorship, and glory—are you ready to ignite your business brain?",
      image: bizminds,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
  ],
  MUN: [
    {
      id: 7,
      name: "THE LNMIIT MUN 25'",
      description:
        "Get Ready for LNMIIT MUN '25! Step into the world of diplomacy and debate at LNMIIT MUN 2025! Represent a country, tackle global issues, draft resolutions, and negotiate alliances. Meet students from diverse backgrounds, develop...",
      image: `${aws}/mun.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/modern-united-nation-plinth-2025-lnmiit-1217495",
    },
    {
      id: 8,
      name: "Change My Mind",
      description:
        "Flip Our Perspective at, Change My Mind! Think you can change our mind? Test your debating skills at Change My Mind—an interactive event with debate spots set up around campus! Challenge our members on controversial ...",
      image: `${aws}/change_my_mind.png`,
      registerLink: "#",
      readMoreLink: "#",
    },
  ],
  Astronomy: [
    {
      id: 7,
      name: "Brahmaand",
      description:
        "Brahmaand, a ideathon where participants solve cosmic riddles & build up earth-shattering ideas is here💫. The solution to the problem statement will be presented before the quick witted judges who decide upon the winners worthy...",
      image: `${aws}/brahmand.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/brahmaand-the-space-ideathon-plinth-2025-lnm-institute-of-information-technology-lnmiit-1232305",
    },
    {
      id: 8,
      name: "Starpix",
      description:
        "Get ready for 'Starpix'—a night of capturing space with your lens! 🌌✨ Bring your camera, and let's capture the beauty of the night sky together. 📸✨Let your inner artist out with those amazing astrophotographs! From.....",
      image:
        starpix,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/starpix-the-astrophotography-competition-plinth-2025-lnmiit-1234645",
    },
    {
      id: 9,
      name: "Astromemia",
      description:
        "Hear ye hear ye all self-proclaimed memelords🗿! ASTROMEMIA, presented by the Astronomy Club of LNMIIT, is calling all cosmic comedians to a meme duel the internet's never seen! Bombard @astronomylnmiit with...",
      image: `${aws}/astromemia.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/astromemia-astronomy-themed-meme-making-competition-plinth-2025-lnm-institute-of-information-technology-lnm-1235807",
    },
    {
      id: 10,
      name: "Dhoomketu",
      description:
        "Jamming under the stars with @capriccio.lnmiit the music club of lnmiit! 🎶 Join us after pronite for a celestial experience in the library lawn. Feel the rhythm while gazing through telescopes at the mesmerizing night sky. Sing your..... ",
      image: `${aws}/dhoomketu.png`,
      registerLink: "#",
      readMoreLink: "#",
    },
    {
      id: 11,
      name: "Telescope Pointing",
      description:
        "Welcome to Telescope Pointing 2025: Where the stars guide your journey! Join astronomy enthusiasts and experts to explore the cosmos, uncover celestial wonders, and compete for exciting prizes. Let's aim for the stars—together!",
      image: telescope,
      registerLink: "#",
      readMoreLink: "#",
    },
    {
      id: 12,
      name: "Odin's Eye",
      description:
        "Welcome to Odin's Eye: A Celestial Exploration of Ideas! Dive into the mysteries of the universe and showcase your innovative projects in the field of astronomy.",
      image: odinseye,
      registerLink: "#",
      readMoreLink: "#",
    },
  ],
  Robotics: [
    {
      id: 7,
      name: "Robowars",
      description:
        "Get ready for an epic clash of machines! Watch as robots go head-to-head in an arena of chaos. Will your creation dominate the battlefield, or will it crumble under pressure?",
      image: `${aws}/robowars.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/robowars-plinth-2025-lnm-institute-of-information-technology-lnmiit-1319733",
    },
    {
      id: 8,
      name: "ROBOCUP",
      description:
        "To bring the raw energy of football and the marvel of mechanical engineering together, Plinth is excited to announce Robocup, a football tournament where the participating players are none other than robots. Build and progr....",
      image: `${aws}/robocup.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/robocup-plinth-2025-lnm-institute-of-information-technology-lnmiit-1247701",
    },
    {
      id: 9,
      name: "ROBORACE",
      description:
        "Get ready for the ultimate test of speed, precision, and cutting-edge technology in Velocity Vanguards - Robo Race. This thrilling event challenges participants to design and unleash their high-speed robotic vehicles on the trac....",
      image: `${aws}/roborace.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/roborace-plinth-2025-lnm-institute-of-information-technology-lnmiit-1247704",
    },
    {
      id: 11,
      name: "ROBO TRANSPORTER",
      description:
        'Welcome to "Transporter", an exhilarating robotics competition that challenges participants to design and build autonomous transport systems. In this cutting-edge event, teams will showcase their engineering process by creating robot...',
      image: `${aws}/robo_transporter.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/robo-transporter-plinth-2025-lnm-institute-of-information-technology-lnmiit-1247741",
    },
    {
      id: 12,
      name: "Maze Solver",
      description:
        "In this electrifying competition, teams of tech wizards will pit their robots against a mind-boggling maze. The robots will have to navigate their way through a series of obstacles and challenges, using sensors, algorithms, and sheer robotic prow....",
      image: `${aws}/maze_solver.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/maze-solver-plinth-2025-lnm-institute-of-information-technology-lnmiit-1245943",
    },
    {
      id: 13,
      name: "RC Plane",
      description:
        "'The engine is the heart of the airplane , but the pilot is its soul.' - Walter Releigh Ever dreamt of being a pilot? If yes , the time has come to live up to your dreams as 'Phoenix'- The Robotics Club of LNMIIT brings to you a chance to build ...",
      image: `${aws}/rc_plane.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/rc-plane-plinth-2025-lnm-institute-of-information-technology-lnmiit-1340790",
    },
    {
      id: 14,
      name: "DRONE RACING",
      description:
        "Greetings Airmasters !!! Does your winged friend have the ability to emerge out as the best amongst all? The time has now arrived to showcase the speed of your drone. Use all your skills to design a racing drone and make it fly through....",
      image: `${aws}/drone_racing.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/drone-racing-plinth-2025-lnm-institute-of-information-technology-lnmiit-1328424",
    },
    {
      id: 15,
      name: "MICRO MOUSE",
      description:
        "'The engine is the heart of the airplane , but the pilot is its soul.' - Walter Releigh Ever dreamt of being a pilot? If yes , the time has come to live up to your dreams as 'Phoenix'- The Robotics Club of LNMIIT brings to you a chance to ...",
      image: `${aws}/micro_mouse.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/micro-mouse-plinth-2025-lnm-institute-of-information-technology-lnmiit-1338181",
    },
    {
      id: 16,
      name: "Moto Boat",
      description:
        "Dive into the world of innovation and speed with Moto Boat, the Motor Boat Challenge that invites participants to design, build, and race their motorized boats. This electrifying event combines engineering process, aq....",
      image: motoboat,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/micro-mouse-plinth-2025-lnm-institute-of-information-technology-lnmiit-1338181",
    },
  ],
  Coding: [
    {
      id: 7,
      name: "IUPC",
      description:
        "Gear up for Cybros' thrilling ICPC-style contest—a high-energy competition featuring teams of three! With a rigorous five-hour format, you'll tackle a set of challenging problems, putting your coding skills, teamwork, and problem-s...",
      image: `${aws}/iupc.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 8,
      name: "ENIGMA",
      description:
        "Get ready for Cybros' flagship event—a Division 2-style individual coding contest designed to challenge and inspire. This two-hour competition brings together the best coders, all competing solo for a chance to claim ....",
      image: `${aws}/enigma.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/enigma-plinth-2025-lnm-institute-of-information-technology-lnmiit-1241628",
    },
    {
      id: 9,
      name: "CP Duels",
      description:
        "Challenge your friends to a coding problem duel and see who can outsmart and outcode the other! Dive into a thrilling race against the clock, where each second counts as you tackle complex problems and push you .....",
      image: `${aws}/cp_duels.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/cp-duels-plinth-2025-lnm-institute-of-information-technology-lnmiit-1249749",
    },
    {
      id: 10,
      name: "Coding Cascade",
      description:
        "Get ready for Coding Cascade, a high-stakes team coding event like no other! In this unique challenge, three questions are designed for three team members, where each question's output becomes the next question's input. The .....",
      image: `${aws}/coding_cascade.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/coding-cascade-plinth-2025-lnm-institute-of-information-technology-lnmiit-1316759",
    },
    {
      id: 11,
      name: "Alice, Bob, GO!",
      description:
        "After tackling countless Alice and Bob game theory problems, have you ever wondered what it would be like to play them in real life? Now's your chance! We've crafted an experience that brings these classic logic battles to life. Dive into our...",
      image: `${aws}/alice_bob_go.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/alice-bob-go-plinth-2025-lnm-institute-of-information-technology-lnmiit-1249756",
    },
  ],
  Others: [
    {
      id: 7,
      name: "BeatLab",
      description:
        "Where tech meets rhythm! Explore the art of sound mixing and create a symphony of beats that will make heads nod. Get ready to drop the bass in the ultimate sound studio showdown.",
      image: beatlab,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 8,
      name: "Game Smith",
      description:
        "Get ready for the ultimate test of adaptability and skill with Game Switch! In this high-energy challenge, the games keep changing, and so do the rules. Stay sharp, think fast, and embrace the unexpected as you navigate a whirlwind of surprises.",
      image: gamesmith,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 9,
      name: "CreatiFrenzy",
      description:
        "Where imagination meets innovation! Join the battle of ideas, where your creativity is the only limit. Let your artistic genius shine in this out-of-the-box challenge!",
      image: creatifrenzy,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 10,
      name: "DJ Battle",
      description:
        "Step into the spotlight at Plinth with DJ Battle, where creativity meets rhythm! This is your chance to craft your own beats, mix mesmerizing tracks, and showcase your DJ skills",
      image: djbattle,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
  ],
  "E-Sports": [
    {
      id: 7,
      name: "BGMI",
      description:
        "BGMI Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate BGMI showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: bgmi,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 8,
      name: "COD-M",
      description:
        "COD-M Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate COD-M showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: codm,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 9,
      name: "Clash Royal",
      description:
        "Clash Royal Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate Clash-Royal showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: clashroyale,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 10,
      name: "Free-Fire",
      description:
        "Free-fire Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate free-fire showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: freefire,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 11,
      name: "Valorant",
      description:
        "Valorant Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate Valorant showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: valorant,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
  ],
  Online: [
    {
      id: 7,
      name: "BGMI",
      description:
        "BGMI Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate BGMI showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: bgmi,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 8,
      name: "Starpix",
      description:
        "Get ready for 'Starpix'—a night of capturing space with your lens! 🌌✨ Bring your camera, and let's capture the beauty of the night sky together. 📸✨Let your inner artist out with those amazing astrophotographs! From.....",
      image:
       starpix,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/starpix-the-astrophotography-competition-plinth-2025-lnmiit-1234645",
    },
    {
      id: 9,
      name: "CRYPTEX",
      description:
        "Cryptex is an online quiz competition with a format similar to a treasure hunt. Each participant has to register individually and go through all the levels before being crowned as the winner. The questions will be diverse and will...",
      image: `${aws}/cryptex.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/cryptex-plinth-2025-lnm-institute-of-information-technology-lnmiit-1227139",
    },
    {
      id: 8,
      name: "COD-M",
      description:
        "COD-M Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate COD-M showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: codm,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 9,
      name: "Clash Royal",
      description:
        "Clash Royal Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate Clash-Royal showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: clashroyale,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 10,
      name: "Free-Fire",
      description:
        "Free-fire Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate free-fire showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: freefire,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 11,
      name: "Valorant",
      description:
        "Valorant Championship 2025: Dominate the Arena! Unleash your gaming skills at our college tech fest's ultimate Valorant showdown. Squad up, strategize, and prove you've got what it takes to rise to the top!",
      image: valorant,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 12,
      name: "Astromemia",
      description:
        "Hear ye hear ye all self-proclaimed memelords🗿! ASTROMEMIA, presented by the Astronomy Club of LNMIIT, is calling all cosmic comedians to a meme duel the internet's never seen! Bombard @astronomylnmiit with...",
      image: `${aws}/astromemia.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/astromemia-astronomy-themed-meme-making-competition-plinth-2025-lnm-institute-of-information-technology-lnm-1235807",
    },
    {
      id: 13,
      name: "Virtual Trading Titans",
      description:
        "Welcome to Virtual Trading Titans: The ultimate online entrepreneurship challenge! Compete with top entrepreneurs in a virtual trading environment where strategy, innovation, and market instincts define your success.",
      image: trading,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
  ],
  Hackathon: [
    {
      id: 7,
      name: "Ideathon",
      description:
        "Welcome to 2025's Ideathon: The gateway to launching your idea! Pitch your startup ideas to industry experts and investors for a chance to secure seed funding, mentorship, and special awards. Our panel includes angel investors, PhDs, and...",
      image: ideathon,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 8,
      name: "LNMHacks 7.0",
      description:
        "LNMHacks is LNMIIT's annual hackathon, welcoming developers from all backgrounds—students, freelancers, and professionals—to build, learn, and connect. With an open innovation theme, hands-on mentorship, industry speakers, and vibrant activities, LNMHacks...",
      image: lnmhacks,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 9,
      name: "CASECRAFT",
      description:
        "CaseCraft: Hack & Hustle—where brilliant minds tackle real-world business challenges! This national-level event invites students from across India to dive into dynamic case studies, crafting innovative solutions and showcasing strategic thinking...",
      image: casecraft,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 10,
      name: "Sustainathon",
      description:
        "Unleash your creativity and entrepreneurial spirit at Sustainathon, the ultimate platform for tech enthusiasts, innovators, and changemakers. Collaborate, code, and craft solutions to tackle real-world sustainability challenges.",
      image: sustainathon,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
    {
      id: 11,
      name: "Brahmaand",
      description:
        "Brahmaand, a ideathon where participants solve cosmic riddles & build up earth-shattering ideas is here💫. The solution to the problem statement will be presented before the quick witted judges who decide upon the winners worthy...",
      image: `${aws}/brahmand.png`,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/brahmaand-the-space-ideathon-plinth-2025-lnm-institute-of-information-technology-lnmiit-1232305",
    },
  ],
  highschool: [
    {
      id: 7,
      name: "Cyber Olympiad",
      description:
        "Gear up for the ultimate online tech challenge! The Cyber Olympiad, part of Plinth 2025, is an electrifying event for school students to showcase their skills in coding, cybersecurity, and digital problem-solving. Compete with young minds nationwide, unlock exciti...",
      image: cyberolympiad,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 8,
      name: "Cube Open",
      description:
        "Step into the world of speed and precision with the Cube Open at Plinth 2025! This thrilling offline event invites cube enthusiasts to showcase their talent in solving Rubik’s Cubes against the clock. Test your skills..",
      image: cubeopen,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
    {
      id: 9,
      name: "Biz Minds",
      description:
        "Dive into a thrilling blend of startup pitches and brain-teasing quizzes. Showcase your ideas, challenge your knowledge, and impress our elite panel of investors and experts. Win funding, mentorship, and glory—are you ready to ignite your business brain?",
      image: bizminds,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/pitch-on-the-rocks-plinth-2025-plinth-organising-committee-1241493",
    },
  ],
  Olympiad: [
    {
      id: 7,
      name: "Cyber Olympiad",
      description:
        "Gear up for the ultimate online tech challenge! The Cyber Olympiad, part of Plinth 2025, is an electrifying event for school students to showcase their skills in coding, cybersecurity, and digital problem-solving. Compete with young minds nationwide...",
      image: cyberolympiad,
      registerLink: "#",
      readMoreLink:
        "https://unstop.com/competitions/iupc-plinth-2025-lnm-institute-of-information-technology-lnmiit-1238170",
    },
  ],
};
export default data;
