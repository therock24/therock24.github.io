/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello there 👋",
  title2: "Vitor Fernandes",
  logo_name: "v.fernandes()",
  nickname: "Vitor",
  full_name: "Vitor Fernandes",
  subTitle: "",
  resumeLink: "https://drive.google.com/file/d/1q3gK7LONQidSfiMGDXZHISUcKRD2499X/view?usp=sharing",
  mail: "mailto:vitorlamela@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/therock24",
  linkedin: "https://www.linkedin.com/in/vitorlfernandes/",
  gmail: "vitorlamela@gmail.com",
  gitlab: "https://gitlab.com/therock24",
  instagram: "https://www.instagram.com/vhlf24",
};

const skills = {
  data: [
    {
      title: "Mobile Development",
      fileName: "MobileDevImg",
      skills: [
        "⚡ Develop highly interactive User Interface for mobile applications",
        "⚡ Clean architecture and MVVM",
        "⚡ Background/Foreground service, multi-thread, kotlin coroutines ",
        "⚡ Working with several system network frameworks such as Bluetooth, Wifi, VPN..",
        "⚡ Integration of third party services such as Firebase/AWS/Google Services",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "simple-icons:ios",
          style: {
            color: "#447099",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "devicon:kotlin",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "logos:gradle",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "devicon:androidstudio",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        }
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS, Next.js, ",
        "⚡ Creating backend server with Nest.js and Node.js based environment ",
        "⚡ Experience with Django Framework and Python scripting",
        "⚡ Integration of third party services such as Firebase/AWS/Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience with Docker, Linux environment, shell scripts, automation",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Faculty of Engineering of the University of Porto",
      subtitle: "Master in Electrical and Computers Engineering",
      logo_path: "feup.png",
      alt_name: "FEUP",
      duration: "2013 - 2018",
      descriptions: [
        "⚡ Major of Telecommunication and Specialization in Networks and Services",
        "⚡ I have studied core subjects like Data Structures, DBMS, Computer Networks, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learn under my Computer Engineering course. ",
      ],
      website_link: "http://www.fe.up.pt/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
  ],
};


const experience =  {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Always working in the area of Mobile & Web development. Huge background in Computer Networks, Operating Systems (Linux/Windows/Mac OSX), Telecommunications field. Building automated scripts for build environments & cloud applications",
  header_image_path: "experience.svg",
  experiences: [
    {
      title: "Mobile Software Engineer",
      subtitle: "Uplink, Inc",
      logo_path: "uplink-logo.png",
      background_color: "blue",
      alt_name: "Uplink, Inc",
      duration: "2022 - Today",
      descriptions: [
        "⚡ Developing Uplink’s decentralized network sdk & app",
        "⚡ Tech Stack: CrossPlatform (React Native), MVVM, Clean Architecture, Dependency Injection, Wi-Fi and Bluetooth API, Web3 wallet, Encryption, Jetpack Compose",
        "⚡ Multi-threaded app with Background/Foreground service that uses Wi-fi, Bluetooth to implement new ways for connectivity between devices and internet",
        "⚡ Configured additional services like Firebase, CI/CD with Bitbucket Pipelines, setting up docker images and build environments",
      ],
      website_link: "http://www.uplink.xyz/",
    },
    {
      title: "Android Software Engineer",
      subtitle: "Fuze, Inc.",
      logo_path: "fuze-logo.png",
      background_color: "white",
      alt_name: "Fuze, Inc",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Maintaining Java legacy code and all new code written in Kotlin.",
        "⚡ Bug fixing and developing new features both for tablets and phones",
        "⚡ Development of Push To Talk audio feature in the Fuze App for Android",
        "⚡ Firebase services: crashlytics, push notifications, analytics ",
      ],
      website_link: "http://www.fe.up.pt/",
    },
    {
      title: "Android Developer & DevOps",
      subtitle: "Hypelabs, SA.",
      logo_path: "hypelabs-logo.png",
      background_color: "white",
      alt_name: "Hypelabs, SA",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Developing with Android Components - Android Jetpack, Material, MVVM, Java Native Interface, Bluetooth Protocol and API, REST APIs.",
        "⚡ App deployment to Play Store and Using Firebase services for Mobile Push Notification, Crashlytics and Analytics",
        "⚡ Web development with Django, Celery, Redis, PostgreSQL and Docker-compose",
        "⚡ some AWS DevOps - SNS, SQS, Beanstalk, EC2. ",
      ],
      website_link: "http://hypelabs.io/",
    }
  ],
}


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Mobile applications (mostly Android but also cross-platform) and Web applications",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vitor.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@vitorlamela",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Cryptocurrency prices app",
      url: "https://github.com/therock24/clean-compose-di-cryptoapp",
      description:
        "This is a personal project of a simple app that lists cryptocurrencies and provides more details about each one, using a public criptocurrencies API.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin-icon",
        }
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/therock24/clean-compose-di-cryptoapp",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url:
            "https://comingsoon",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "ChatGPT clone",
      url: "https://github.com/therock24/chatgpt-messenger-nextjs",
      description:
        "a ChatGPT clone, a powerful chatbot application built with a modern tech stack including Next.js, Tailwind CSS, Firebase, Vercel, and React.js.",
      languages: [
        {
          name: "Next.js",
          iconifyClass: "logos-nextjs-icon",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-react",
        },
        {
          name: "Tailwind",
          iconifyClass: "logos-tailwindcss-icon",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/therock24/chatgpt-messenger-nextjs",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://comingsoon",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "2",
      name: "Flickr Gallery App",
      url: "https://github.com/therock24/flickrgallery-android",
      description:
        "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin-icon",
        }
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/therock24/flickrgallery-android",
          iconifyClass: "ri:github-fill",
        }
      ],
    },
    {
      id: "3",
      name: "Spotify Trending Playlists",
      url: "https://github.com/therock24/spotifyPlaylist-android",
      description:
        "Application that allows users to view and explore the trending playlists on Spotify. The app provides a user-friendly interface and uses the Spotify Web API to retrieve data.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "Kotlin",
          iconifyClass: "logos-kotlin-icon",
        }
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/therock24/spotifyPlaylist-android",
          iconifyClass: "ri:github-fill",
        }
      ],
    },
    {
      id: "4",
      name: "Uplink SDK",
      url: "https://github.com/Hype-Labs/uplink",
      description:
        "An SDK that connects android devices to share internet connection in a mesh network, via Bluetooth, in order to send small transaction data.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Bluetooth",
          iconifyClass: "logos-bluetooth",
        },
        {
          name: "Wifi",
          iconifyClass: "logos-wifi",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Hype-Labs/uplink",
          iconifyClass: "ri:github-fill",
        }
      ],
    },
    {
      id: "6",
      name: "WorldConnect",
      url: "https://github.com/therock24/djangoBootstrap1",
      description:
        "WorldConnect is a sleek and modern web application that serves as a landing page for a company's website.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Django",
          iconifyClass: "logos-django-icon",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "HTML5",
          iconifyClass: "devicon:html5",
        },
        {
          name: "CSS3",
          iconifyClass: "devicon:css3",
        },
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/therock24/djangoBootstrap1",
          iconifyClass: "ri:github-fill",
        }
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
