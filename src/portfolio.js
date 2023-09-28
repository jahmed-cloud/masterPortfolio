/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: false, // Change this to false if you don't want Splash screen.
  };
  
  //SEO Related settings
  const seo = {
    title: "Junaid Ahmed",
    description:
      "Results-driven IT professional with a strong focus on cloud computing, infrastructure management, and system architecture. Proficient in PowerShell scripting and Terraform, I excel in crafting efficient and automated solutions.",
    og: {
      title: "Junaid Ahmed",
      type: "website",
      url: "https://jahmed.cloud",
    },
  };
  
  //Home Page
  const greeting = {
    title: "Junaid Ahmed",
    logo_name: "Junaid Ahmed",
    nickname: "jahmed.cloud",
    subTitle:
      "Results-driven IT professional with a strong focus on cloud computing, infrastructure management, and system architecture. Proficient in PowerShell scripting and Terraform, I excel in crafting efficient and automated solutions.",
    resumeLink:
      "https://drive.google.com/",
    portfolio_repository: "https://github.com/jahmed-cloud",
    githubProfile: "https://github.com/jahmed-cloud",
  };
  
  const socialMediaLinks = [  
    {
      name: "Github",
      link: "https://github.com/jahmed-cloud",
      fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
      backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/iamjahmed/",
      fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
      backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCNqraccxvtAQoYGJLmVMROg",
      fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
      backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
    },
    {
      name: "Gmail",
      link: "mailto:jahmed.cloud@gmail.com",
      fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
      backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },
    {
      name: "Twitter",
      link: "https://twitter.com/iam_jahmed",
      fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
      backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
    },
  ];
  
  const skills = {
    data: [
        {
            title: "Cloud Infra-Architecture",
            fileName: "CloudInfraImg",
            skills: [
              "⚡I've showcases a diverse skill set in cloud infrastructure architecture, with a focus on Microsoft Azure services.",
              "⚡I've successfully deployed and managed Azure Active Directory, Azure Virtual Desktop, Windows 365, and Microsoft Endpoint Manager to empower organizations with secure, efficient, and scalable solutions",
              "⚡My expertise in implementing Microsoft 365 BCDR strategies, integration, automation, and proactive monitoring reflects a commitment to delivering resilient and high-performing cloud environments for clients.",
              "⚡I spearheaded the implementation of Azure AD, fortifying identity and access management with seamless single sign-on (SSO) capabilities. Enhanced security was ensured through the enforcement of multi-factor authentication (MFA). Additionally, I orchestrated a seamless integration of Azure AD with on-premises Active Directory to support hybrid environments.",
              "⚡I meticulously designed and deployed Azure Virtual Desktop solutions, enabling efficient remote work. I optimized virtual machine configurations for performance and cost-efficiency, while also implementing auto-scaling mechanisms to adapt to fluctuating user demands. Security was a priority, addressed through Azure Disk Encryption and Network Security Groups.",
              "⚡My expertise enabled seamless integration between Azure services and Microsoft 365, automating routine tasks through Azure Logic Apps and Power Automate. I orchestrated workflows for resource provisioning and deprovisioning, ultimately improving operational efficiency and reducing manual intervention.",     
            ],
            softwareSkills: [
               {
                    skillName: "Azure",
                    fontAwesomeClassname: "simple-icons:microsoftazure",
                    style: {
                      color: "#0089D6",
                    },
              },
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
            title: "Reporting and Alerting",
            fileName: "DataScienceImg",
            skills: [
              "⚡ I've leveraged Microsoft Power BI and Power Automate to transform data into actionable insights and automate business processes.",
              "⚡ I've built an Azure Workbook utilizing Kusto Query Language (KQL) to effectively manage over 1000 virtual machines, ensuring their timely updates and compliance.",
              "⚡ Created alerts based on collected data, enhancing operational efficiency, and proactively addressing potential issues.",
              "⚡ My holistic approach to data analytics and infrastructure management contributes to robust, data-driven decision-making and operational excellence.",
              "⚡ To proactively monitor and secure the environment, I implemented Azure Monitor and Azure Security Center. This encompassed setting up custom alerts and dashboards to track resource performance and security. Additionally, I generated insightful reports on usage, compliance, and security incidents, ensuring ongoing enhancements through data-driven insights.",
            ],
            softwareSkills: [
              {
                skillName: "PowerBI",
                fontAwesomeClassname: "simple-icons:powerbi",
                style: {
                  backgroundColor: "transparent",
                },
              },
              {
                skillName: "PowerAutomate",
                fontAwesomeClassname: "simple-icons:powerautomate",
                style: {
                  backgroundColor: "transparent",
                  color: "#D00000",
                },
              },
              {
                skillName: "KQL",
                fontAwesomeClassname: "vscode-icons:file-type-kusto",
                style: {
                  backgroundColor: "transparent",
                  color: "#3776AB",
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
        profileLink: "https://leetcode.com/layman_brother/",
      },
      {
        siteName: "HackerRank",
        iconifyClassname: "simple-icons:hackerrank",
        style: {
          color: "#2EC866",
        },
        profileLink: "https://www.hackerrank.com/layman_brother",
      },
      {
        siteName: "Codechef",
        iconifyClassname: "simple-icons:codechef",
        style: {
          color: "#5B4638",
        },
        profileLink: "https://www.codechef.com/users/ashutosh_1919",
      },
      {
        siteName: "Codeforces",
        iconifyClassname: "simple-icons:codeforces",
        style: {
          color: "#1F8ACB",
        },
        profileLink: "http://codeforces.com/profile/layman_brother",
      },
      {
        siteName: "Hackerearth",
        iconifyClassname: "simple-icons:hackerearth",
        style: {
          color: "#323754",
        },
        profileLink: "https://www.hackerearth.com/@ashutosh391",
      },
      {
        siteName: "Kaggle",
        iconifyClassname: "simple-icons:kaggle",
        style: {
          color: "#20BEFF",
        },
        profileLink: "https://www.kaggle.com/laymanbrother",
      },
    ],
  };
  
  const degrees = {
    degrees: [
      {
        title: "Indian Institute of Information Technology Kurnool",
        subtitle: "B.Tech. in Computer Engineering",
        logo_path: "iiitk_logo.png",
        alt_name: "IIITDM Kurnool",
        duration: "2016 - 2020",
        descriptions: [
          "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
          "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
          "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
        ],
        website_link: "http://iiitk.ac.in",
      },
      {
        title: "Indiana University Bloomington",
        subtitle: "M.S. in Computer Science",
        logo_path: "iu_logo.png",
        alt_name: "Indiana University Bloomington",
        duration: "2021 - 2023",
        descriptions: [
          "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
          "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
          "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
        ],
        website_link: "https://www.indiana.edu/",
      },
    ],
  };
  
  const certifications = {
    certifications: [
      {
        title: "Machine Learning",
        subtitle: "- Andrew Ng",
        logo_path: "stanford_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
        alt_name: "Stanford University",
        color_code: "#8C151599",
      },
      {
        title: "Deep Learning",
        subtitle: "- Andrew Ng",
        logo_path: "deeplearning_ai_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
        alt_name: "deeplearning.ai",
        color_code: "#00000099",
      },
      {
        title: "ML on GCP",
        subtitle: "- GCP Training",
        logo_path: "google_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
        alt_name: "Google",
        color_code: "#0C9D5899",
      },
      {
        title: "Data Science",
        subtitle: "- Alex Aklson",
        logo_path: "ibm_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
        alt_name: "IBM",
        color_code: "#1F70C199",
      },
      {
        title: "Big Data",
        subtitle: "- Kim Akers",
        logo_path: "microsoft_logo.png",
        certificate_link:
          "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
        alt_name: "Microsoft",
        color_code: "#D83B0199",
      },
      {
        title: "Advanced Data Science",
        subtitle: "- Romeo Kienzler",
        logo_path: "ibm_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
        alt_name: "IBM",
        color_code: "#1F70C199",
      },
      {
        title: "Advanced ML on GCP",
        subtitle: "- GCP Training",
        logo_path: "google_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
        alt_name: "Google",
        color_code: "#0C9D5899",
      },
      {
        title: "DL on Tensorflow",
        subtitle: "- Laurence Moroney",
        logo_path: "deeplearning_ai_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
        alt_name: "deeplearning.ai",
        color_code: "#00000099",
      },
      {
        title: "Fullstack Development",
        subtitle: "- Jogesh Muppala",
        logo_path: "coursera_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
        alt_name: "Coursera",
        color_code: "#2A73CC",
      },
      {
        title: "Kuberenetes on GCP",
        subtitle: "- Qwiklabs",
        logo_path: "gcp_logo.png",
        certificate_link:
          "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
        alt_name: "GCP",
        color_code: "#4285F499",
      },
      {
        title: "Cryptography",
        subtitle: "- Saurabh Mukhopadhyay",
        logo_path: "nptel_logo.png",
        certificate_link:
          "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
        alt_name: "NPTEL",
        color_code: "#FFBB0099",
      },
      {
        title: "Cloud Architecture",
        subtitle: "- Qwiklabs",
        logo_path: "gcp_logo.png",
        certificate_link:
          "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
        alt_name: "GCP",
        color_code: "#4285F499",
      },
    ],
  };
  
  // Experience Page
  const experience = {
    title: "Experience",
    subtitle: "Work",
    description:
      "I bring a wealth of experience in IT leadership and project management, with a strong focus on Microsoft technologies. As a Technical Lead, I've led agile initiatives encompassing Azure Virtual Desktop, Windows 365, PowerBI, and related services. My role involves meticulous planning, cost analysis, and effective coordination with global teams, ensuring the successful migration and optimization of critical infrastructure.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work",
        work: true,
        experiences: [
            {
                title: "Technical Lead",
                company: "TECH M (ALLYIS) - MICROSOFT AMPLIFY",
                company_url: "",
                logo_path: "",
                duration: "June 2021 to Aug 2023",
                location: "Hyderabad, Telangana",
                description:
                  "As a Technical Lead, I have been actively engaged in end-to-end agile processes for Azure Virtual Desktop, Windows 365, PowerBI, and related services. I've played a key role in effort estimation, cost analysis, and requirements analysis, ensuring seamless project flows. My responsibilities also include coordinating with both onshore and offshore teams, providing guidance, optimizing infrastructure performance, and managing migrations to Microsoft Azure’s WVD and W365. Additionally, I've led a team in creating impactful PowerBI dashboards and Azure workbooks using KQL, contributing to robust data-driven decision-making.",
                color: "#0879bf",
              },
              {
                title: "Quality Assurance Lead",
                company: "CONCENTRIX - MICROSOFT ENTERPRISE SKILL INITIATIVE (ESI)",
                company_url: "https://www.linkedin.com/company/muffito-inc/about/",
                logo_path: "",
                duration: "Jan 2017 to June 2021",
                location: "Bangalore, Karnataka",
                description:
                  "During my tenure as Quality Assurance Lead, I meticulously analyzed critical business aspects and conveyed insights through concise presentations. My responsibilities encompassed task assignment, project staffing, and fostering effective communication to enhance business processes. I conducted comprehensive reviews of files, records, and documents to gather vital business information, ensuring the responsiveness to development requests. Additionally, I played a pivotal role in improving agent quality, identifying and addressing ongoing issues, and optimizing system and platform performance. I actively managed escalated support calls, swiftly resolving issues, and summarizing key insights gained from agent interactions.",
                color: "#9b1578",
              },
              {
                title: "Technical Support Specialist",
                company: "LENOVO ",
                company_url: "",
                logo_path: "",
                duration: "May 2015 to Aug 2016",
                location: "Bangalore, Karnataka",
                description:
                  "As a Technical Support Specialist at Lenovo, I demonstrated expertise in diagnosing and resolving hardware and software issues, ensuring uninterrupted operations. I actively assisted with server installation, configuration, and maintenance tasks, responding promptly to user inquiries and efficiently resolving technical problems. My role also involved collaborative efforts with cross-functional teams to address complex technical issues and implement effective solutions, ensuring optimal system performance and customer satisfaction.",
                color: "#fc1f20",
              },
        ],
      },
      {
        title: "Internships",
        experiences: [
          {
            title: "Machine Learning Intern",
            company: "TikTok Inc.",
            company_url: "https://www.tiktok.com/en/",
            logo_path: "tiktok_logo.png",
            duration: "May 2022 - Aug 2022",
            location: "San Francisco, USA",
            description:
              "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
            color: "#000000",
          },
          {
            title: "Data Science Research Intern",
            company: "Delhivery Pvt. Ltd.",
            company_url: "https://www.delhivery.com/",
            logo_path: "delhivery_logo.png",
            duration: "May 2019 - Sept 2019",
            location: "Gurgaon, Haryana",
            description:
              "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
            color: "#ee3c26",
          },
          {
            title: "Data Science Intern",
            company: "Intel Indexer LLC",
            company_url:
              "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
            logo_path: "intel_logo.jpg",
            duration: "Nov 2018 - Dec 2018",
            location: "Work From Home",
            description:
              "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
            color: "#0071C5",
          },
        ],
      },
      {
        title: "Volunteerships",
        experiences: [
          {
            title: "Google Explore ML Facilitator",
            company: "Google",
            company_url: "https://about.google/",
            logo_path: "google_logo.png",
            duration: "June 2019 - April 2020",
            location: "Hyderabad, Telangana",
            description:
              "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
            color: "#4285F4",
          },
          {
            title: "Microsoft Student Partner",
            company: "Microsoft",
            company_url: "https://www.microsoft.com/",
            logo_path: "microsoft_logo.png",
            duration: "Aug 2019 - May 2020",
            location: "Hyderabad, Telangana",
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
            location: "Kurnool, Andhra Pradesh",
            description:
              "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
            color: "#000000",
          },
          {
            title: "Developer Students Club Member",
            company: "DSC IIITDM Kurnool",
            company_url:
              "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
            logo_path: "dsc_logo.png",
            duration: "Jan 2018 - May 2020",
            location: "Kurnool, Andhra Pradesh",
            description:
              "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
            color: "#0C9D58",
          },
          {
            title: "Developer Program Member",
            company: "Github",
            company_url: "https://github.com/",
            logo_path: "github_logo.png",
            duration: "July 2019 - PRESENT",
            location: "Work From Home",
            description:
              "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
            color: "#181717",
          },
        ],
      },
    ],
  };
  
  // Projects Page
  const projectsHeader = {
    title: "Projects",
    description:
      "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
    avatar_image_path: "projects_image.svg",
  };
  
  const publicationsHeader = {
    title: "Publications",
    description:
      "I have worked on and published a few research papers and publications of my own.",
    avatar_image_path: "projects_image.svg",
  };
  
  const publications = {
    data: [
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
    ],
  };
  
  // Contact Page
  const contactPageData = {
    contactSection: {
      title: "Contact Me",
      profile_image_path: "animated_ashutosh.png",
      description:
        "Connect with me online to discuss cloud solutions, infrastructure, PowerBI, and Azure Virtual Desktop strategies. Let's explore how I can contribute to your success.",
    },
    blogSection: {
      title: "Blogs",
      subtitle:
        "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
      link: "https://learncloud.guru/",
      avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
      title: "Address",
      subtitle:
        "09 1st floor, L R Bande road, Shampura, Bangalore 560032",
      locality: "Bangalore",
      country: "IN",
      region: "Karnataka",
      postalCode: "560032",
      streetAddress: "L R Bande road",
      avatar_image_path: "address_image.svg",
      location_map_link: "",
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
