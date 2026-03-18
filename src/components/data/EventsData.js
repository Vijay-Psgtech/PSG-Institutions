import psgcaslogo from "../../assets/images/logos/psgcas-logo.png";
import psgctlogo from "../../assets/images/logos/psgct-logo.png";
import psgimlogo from "../../assets/images/logos/psgim-logo.png";
import psgsjhsslogo from "../../assets/images/logos/psgsjhss-logo.png";
import psgitechlogo from "../../assets/images/logos/psgitech-logo.png";

export const events = [
  {
    id: 1,
    title: "3rd International Conference",
    date: "13-03-2026",
    description:
      "3rd International Conference on Materials, Design and Manufacturing for Sustainable Environment - (ICMDMSE 2026)",
    institute: "PSG Institute of Technology and Applied Research",
    logo: psgitechlogo,
    color: "from-[#003d82] to-[#0052ab]",
    spotlightColor: "bg-[#0052ab]/10",
  },
  {
    id: 2,
    title: "Technologies for Space Research",
    date: "26-12-2025",
    description:
      "A Science Academies’ Lecture Workshop on Technologies for Space Research was organized for the UG and PG students of the Science stream by the Department of Physics (SF), PSGCAS, sponsored by the National Science Academies – IASc, INSA, and NASI, on 22/12/2025 and 23/12/2025 at Kaveri Hall, PSGCAS.",
    institute: "PSG College of Arts & Science",
    logo: psgcaslogo,
    color: "from-[#003d82] to-[#0052ab]",
    spotlightColor: "bg-[#0052ab]/10",
  },
  {
    id: 3,
    title: "Research Conclave 2025",
    date: "16-05-2025",
    description:
      "This conclave series, a brainchild of our beloved Principal, was envisaged as a platform for academicians, researchers, and practicing engineers, to exchange ideas and share experiences in research and innovation",
    institute: "PSG College of Technology",
    logo: psgctlogo,
    color: "from-[#003d82] to-[#0052ab]",
    spotlightColor: "bg-[#003d82]/10",
  },

  {
    id: 4,
    title: "Rapport 2026",
    date: "24-01-2026",
    description:
      "Rapport 2026 sets the stage for an evening of expert talk, music, and networking at PSGIM.",
    institute: "PSG Institute of Management",
    logo: psgimlogo,
    color: "from-[#003d82] to-[#0052ab]",
    spotlightColor: "bg-[#003d82]/10",
  },
];

export const eventsData = [
  {
    institution: "PSG College of Technology",
    slug: "psg-tech",
    logo: psgctlogo,
    events: [
      {
        id: 1,
        title: "AI & Robotics Symposium 2026",
        date: "2026-03-05",
        location: "Main Auditorium",
        description:
          "A full-day event featuring workshops and talks on AI, Robotics, and Automation.",
        image: "/images/events/ai-robotics.jpg",
        link: "/events/psg-tech/ai-robotics-symposium",
      },
      {
        id: 2,
        title: "Innovation Expo",
        date: "2026-04-12",
        location: "Innovation Hall",
        description: "Student-led exhibition showcasing cutting-edge projects.",
        image: "/images/events/innovation-expo.jpg",
        link: "/events/psg-tech/innovation-expo",
      },
    ],
  },
  {
    institution: "PSG Institute of Management",
    slug: "psg-im",
    logo: "/images/psgim-logo.png",
    events: [
      {
        id: 1,
        title: "Entrepreneurship Summit 2026",
        date: "2026-05-10",
        location: "Seminar Hall A",
        description:
          "A summit for aspiring entrepreneurs with startup pitches and mentorship.",
        image: "/images/events/entrepreneurship-summit.jpg",
        link: "/events/psg-im/e-summit",
      },
    ],
  },
];
