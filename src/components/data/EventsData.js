{
  /* School logo's*/
}
import psgsjhsslogo from "../../assets/images/logos/psgsjhss-logo.png";
import psgpsvlogo from "../../assets/images/logos/psgpsv-logo.png";
import psgpsplogo from "../../assets/images/logos/psgpsp-logo.png";
import psghsvlogo from "../../assets/images/logos/psghsv-logo.png";
import psgpslogo from "../../assets/images/logos/psgps-logo.png";
import psgmsplogo from "../../assets/images/logos/psgmsp-logo.png";
import psgwslogo from "../../assets/images/logos/psgws-logo.png";

{
  /* College & Institute logo's*/
}
import psgcaslogo from "../../assets/images/logos/psgcas-logo.png";
import psgctlogo from "../../assets/images/logos/psgct-logo.png";
import psgimlogo from "../../assets/images/logos/psgim-logo.png";
import psgiaslogo from "../../assets/images/logos/psgias-logo.png";
import psgitechlogo from "../../assets/images/logos/psgitech-logo.png";
import psgiaplogo from "../../assets/images/logos/psgiap-logo.webp";
import psgpolylogo from "../../assets/images/logos/psgpoly-logo.png";

{
  /* Medical & Healthcare logo's */
}
import psgimsrlogo from "../../assets/images/logos/psgimsr-logo.png";
import psgnursinglogo from "../../assets/images/logos/psgnursing-logo.png";
import psgphysiologo from "../../assets/images/logos/psgphysio-logo.png";
import psgpharmalogo from "../../assets/images/logos/psgpharma-logo.png";

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
  //====== PSG College of technology ========= //
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

  //====== PSG Institute of Management ========= //
  {
    institution: "PSG Institute of Management",
    slug: "psg-im",
    logo: psgimlogo,
    events: [
      {
        id: 1,
        title: "Rapport 2026",
        date: "2026-01-24",
        location: "Seminar Hall A",
        description:
          "Rapport 2026 sets the stage for an evening of expert talk, music, and networking at PSGIM.",
        image: "/images/events/entrepreneurship-summit.jpg",
        link: "/events/psg-im/e-summit",
      },
    ],
  },

  //====== PSG College of Arts & Science ========= //
  {
    institution: "PSG College of Arts & Science",
    slug: "psg-cas",
    logo: psgcaslogo,
    events: [
      {
        id: 1,
        title: "Technologies for Space Research",
        date: "2025-12-25",
        description:
          "A Science Academies’ Lecture Workshop on Technologies for Space Research was organized for the UG and PG students of the Science stream by the Department of Physics (SF), PSGCAS, sponsored by the National Science Academies – IASc, INSA, and NASI, on 22/12/2025 and 23/12/2025 at Kaveri Hall, PSGCAS.",
        image: "/images/events/entrepreneurship-summit.jpg",
        link: "/events/psg-cas/tech-sapce-research",
      },
    ],
  },

  //====== PSG Institute of Technology and Applied Research ========= //
  {
    institution: "PSG Institute of Technology and Applied Research",
    slug: "psg-itech",
    logo: psgitechlogo,
    events: [
      {
        id: 1,
        title: "3rd International Conference",
        date: "2026-03-13",
        description:
          "3rd International Conference on Materials, Design and Manufacturing for Sustainable Environment - (ICMDMSE 2026)",
        image: "/images/events/entrepreneurship-summit.jpg",
        link: "/events/psg-itech/3rd-international-conference",
      },
    ],
  },

  //====== PSG Institute of Advanced Studies ========= //
  {
    institution: "PSG Institute of Advanced Studies",
    slug: "psg-ias",
    logo: psgiaslogo,
    events: [
      {
        id: 1,
        title:
          "International Conference on Sustainable Technologies for Energy and Environment",
        date: "2025-11-27",
        description:
          "PSG Institute of Advanced Studies and ECS-IITM Students Chapter, IIT Madras, are jointly organizing an International Conference on “Sustainable Technologies for Energy and Environment (ICSTEE 2025)”during November 27–29, 2025.",
        image: "/images/events/inte-conference.jpg",
        link: "/events/psg-ias/International-Conference",
        location: "PSG Tech Campus",
      },
    ],
  },
];
