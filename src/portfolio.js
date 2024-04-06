/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nipun's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Nipun Dixit Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Nipun Dixit",
  logo_name: "NipunDixit",
  nickname: "Web Developer",
  subTitle:
    "A passionate Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Angular and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1WPA_Mpm1X0V0FRsRMt13_93ohC3ANcMC/view?usp=drivesdk",
  portfolio_repository: "https://github.com/itznipundixit",
  githubProfile: "https://github.com/itznipundixit",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/itznipundixit",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nipun-dixit/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nipundixit7317@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/itsNipunDixit",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/nipundixit.official",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "AI & ML",
      fileName: "DataScienceImg",
      skills: [
  
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Interacting and learning Python for AI",
      ],
      softwareSkills: [
        
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",  
        "⚡ Creating application backend in Node, Express & Flask",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
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
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
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
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platforms",
        "⚡ Learning to Host and maintain websites on virtual machine instances along with integration of databases",
        
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
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
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      //profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      //profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      //profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      //profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Allenhouse Institute of Technology",
      subtitle: "B.Tech. in Artificial Intelligence and Machine learning",
      logo_path: "all.png",
      alt_name: "Allenhouse",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Advance python,Ds using c++ and frontend development.",
        "⚡ My article about Github was published in college magazine.",
      ],
      website_link: "https://allenhouse.ac.in/",
    },
    {
      title: "Air Force School",
      subtitle: "Science",
      logo_path: "Afs.png",
      alt_name: "AFS",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ I have taken courses related to Artificial Intelligence and python",
        "⚡ Sports -Enthusiast,Coding club Member",
        "⚡ Silver Medalist in Chess competition",
      ],
      website_link: "https://afschoolchakeriknp.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Build 20 JS project In 20 days",
      subtitle: "Udemy",
      logo_path: "U.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c29e3c6c-f018-4b44-89a3-1256bb10ffc4/",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "Css3",
      subtitle: "Infosys Springboard",
      logo_path: "infy.png",
      certificate_link:
        "https://drive.google.com/file/d/1i7CxcmZHU46LVGq3s5WjNrsWe5r12xF1/view",
      alt_name: "Css3",
      color_code: "#00000099",
    },
    {
      title: "Data Structures using c++",
      subtitle: "Li-Mat Soft Solutions",
      logo_path: "li.png",
      certificate_link:
        "https://drive.google.com/file/d/1KsaoDFMKjQOnk3xE7xePlMBy63CC9Av8/view?usp=drivesdk",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Advance Python",
      subtitle: "Li-Mat Soft Solutions",
      logo_path: "li.png",
      certificate_link:
        "https://drive.google.com/file/d/1Kx1B6fLsaIdH9TNRuaS22OihaXlef3HJ/view",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "HTML5",
      subtitle: "Infosys",
      logo_path: "inf.png",
      certificate_link:
        "https://drive.google.com/file/d/1Knw6hwKHHhg-K8owS0UoD5H92Hlx1C_5/view",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "OOP's with Java",
      subtitle: "Lakshya IT soln",
      logo_path: "lakshya.png",
      certificate_link:
        "https://drive.google.com/file/d/1Kq6dt_dO38Ah-SfKDWyWR0TbtYnBbrEP/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "During my journey as a budding professional, I've had the privilege of engaging in transformative experiences through internships and volunteer work. These opportunities have not only equipped me with practical skills but have also instilled in me a profound sense of purpose and commitment towards my career aspirations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Front End developer Intern",
          company: "Zidio Pvt Ltd.",
          company_url: "https://zidio.in/",
          logo_path: "zidio.png",
          duration: "March 2023 - Present",
          location: "Remote",
          description:
            "Collaborated with a team of developers to build responsive and user-friendly web applications.Gained hands-on experience with HTML, CSS, and JavaScript to create engaging user interfaces",
          color: "#000000",
        },
        {
          title: "Web Development",
          company: " Techno Hack EduTech",
          company_url: "https://technohacks.co.in/",
          logo_path: "TH.png",
          duration: "January 2023 - march 2023",
          location: "Remote",
          description:
            "Contributed to the development of website features and enhancements to improve user experience.Worked closely with the design team to translate wireframes and prototypes into code.",
          color: "#0879bf",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Front End developer Intern",
          company: "Zidio Pvt Ltd.",
          company_url: "https://zidio.in/",
          logo_path: "zidio.png",
          duration: "June 2023 - Present",
          location: "Remote",
          description:
            "Collaborated with a team of developers to build responsive and user-friendly web applications.Gained hands-on experience with HTML, CSS, and JavaScript to create engaging user interfaces",
          color: "#000000",
        },
        {
          title: "Web Development",
          company: " Techno Hack EduTech",
          company_url: "https://technohacks.co.in/",
          logo_path: "TH.png",
          duration: "January 2023 - march 2023",
          location: "Remote",
          description:
            "Contributed to the development of website features and enhancements to improve user experience.Worked closely with the design team to translate wireframes and prototypes into code.",
          color: "#0879bf",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Digital Garage",
          company: "Google",
          company_url: "https://grow.google/intl/uk/courses-and-tools/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Virtual",
          description:
            "Explored about Digital Marketing Google SEO marketing ,coding and beyond",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2022 - Sept 2023",
          location: "Remote",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kanpur, Uttar Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "Allenhouse",
          company_url:
            "https://www.linkedin.com/in/allenhousecolleges?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kanpur, Uttar Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Web Development ",
          color: "#0C9D58",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create front end projects and deploy them to web applications using github pages.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Unleashing Creativity: Exploring the World of Generative AI",
      createdAt: "2023-07-02T00:00:00Z",
      description: "In today’s rapidly evolving technological landscape, one phenomenon stands out as a testament to the limitless potential of artificial intelligence: generative AI. This revolutionary technology is not just reshaping industries; it’s redefining the very essence of creativity itself.",
      url: "https://nipundixit.medium.com/unleashing-creativity-exploring-the-world-of-generative-ai-c48e7ce5c458",
    },
    {
      id: "mdp-diffusion",
      name: "Frontend Dev Roadmap",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Welcome to the exciting world of front-end development — a dynamic landscape where creativity meets technology, and every line of code has the power to shape the digital experience. Whether you’re a seasoned developer looking to brush up on your skills or a newcomer eager to dive into the world of web development, this guide will equip you with the roadmap and essential tools you need to embark on your journey with confidence and clarity.",
      url: "https://nipundixit.medium.com/navigating-the-front-end-frontier-your-essential-roadmap-and-toolkit-6d5cf7b7b974",
    },
    {
      id: "consistency-models",
      name: "CSS Vlogs",
      createdAt: "2023-10-12T00:00:00Z",
      description: "New CSS experiment",
      url: "https://twitter.com/itsNipunDixit/status/1771580869062332692?t=jwqS_i1ifkxfRKp_nU-e6w&s=19",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nipoo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://nipundixit.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Delhi,India",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.bing.com/maps?osid=d824190f-b4a2-4160-a61a-6796bd9a23bf&cp=28.645329~76.829532&lvl=10.458629&pi=0&imgid=be52f7cc-5fa1-4009-ae34-15fd66335be7&v=2&sV=2&form=S00027",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
