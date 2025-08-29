// data/courses.js
export const courses = [
  {
    id: 1,
    title: "ITGC, IT Audit & Cyber Assessment",
    desc: "Understand IT General Controls, plan IT audits, assess cyber risks, and report findings with practical checklists.",
    duration: "2 Weeks",
    students: "156 Students",
    img: "/TrainingImg.png",
    syllabus: [
      "Introduction to ITGC",
      "Audit Planning & Strategy",
      "Cyber Risk Assessment",
      "Control Testing",
      "Audit Reporting",
    ],
  },
  {
    id: 2,
    title: "IT Asset Management (SAM)",
    desc: "Master software & hardware lifecycle, license compliance, audits, and optimization using SAM best practices.",
    duration: "2 Weeks",
    students: "156 Students",
    img: "/TrainingImg.png",
    syllabus: [
      "Overview of Asset Lifecycle",
      "Software License Compliance",
      "Hardware Management",
      "Audit & Optimization",
    ],
  },
  {
    id: 3,
    title: "ESG & Sustainability",
    desc: "Learn ESG frameworks, materiality, disclosures, and data tracking to drive sustainable business outcomes.",
    duration: "3 Weeks",
    students: "220 Students",
    img: "/TrainingImg.png",
    syllabus: [
      "Introduction to ESG",
      "Materiality Assessment",
      "Reporting Frameworks",
      "Sustainability Disclosures",
    ],
  },
  {
    id: 4,
    title: "Digital Risk & Compliance",
    desc: "Manage digital risks across cloud, data, and apps; align with policies, controls, and regulatory requirements.",
    duration: "2 Weeks",
    students: "190 Students",
    img: "/TrainingImg.png",
    syllabus: [
      "Digital Risk Landscape",
      "Cloud & Data Risks",
      "Compliance Frameworks",
      "Risk Mitigation",
    ],
  },
  {
    id: 5,
    title: "Entrepreneurship & Startup Innovation",
    desc: "Validate ideas, build MVPs, craft GTM, and pitch to stakeholders with lean startup and innovation tools.",
    duration: "4 Weeks",
    students: "320 Students",
    img: "/TrainingImg.png",
    syllabus: [
      "Idea Validation",
      "Building MVP",
      "Go-To-Market Strategy",
      "Pitching to Investors",
    ],
  },
  {
    id: 6,
    title: "Data Privacy & DPDP/GDPR Basics",
    desc: "Grasp core privacy principles, consent, data rights, and compliance workflows under DPDP (India) & GDPR.",
    duration: "6 Weeks",
    students: "410 Students",
    img: "/TrainingImg.png",
    syllabus: [
      "Introduction to Data Privacy",
      "DPDP & GDPR Basics",
      "User Consent & Rights",
      "Compliance Workflows",
    ],
  },
];


// courses.js

// courses.js

const coursesDetails = [
  {
    id: 1,
    title: "Create An LMS Website With LearnPress",
    desc: "LearnPress is a comprehensive WordPress LMS Plugin for creating and selling courses online.",
    duration: "2 Weeks",
    students: "156 Students",
    image: "/trainingimg/course1.png",
    overview: {
      about:
        "This course teaches you how to build a full LMS website using LearnPress plugin with WordPress.",
      objectives: [
        "Understand LearnPress plugin basics",
        "Build a complete LMS website",
        "Manage courses, lessons, and quizzes",
        "Enable student enrollments and payments",
      ],
    },
    curriculum: [
      "Introduction to LearnPress",
      "Installing and configuring LearnPress",
      "Creating Courses and Lessons",
      "Managing Quizzes and Assignments",
      "Student Enrollment & Payment Integration",
      "Final Project: Build an LMS Website",
    ],
    faqs: [
      {
        question: "Do I need coding skills?",
        answer: "No, basic WordPress knowledge is enough.",
      },
      {
        question: "Is LearnPress free?",
        answer: "Yes, the base plugin is free with optional paid add-ons.",
      },
    ],
    reviews: [
      {
        name: "Rohit Sharma",
        comment: "Very helpful course! I built my own LMS in 2 weeks.",
        rating: 5,
      },
      {
        name: "Sneha Patel",
        comment: "Easy to follow and very practical.",
        rating: 4,
      },
    ],
  },
  {
    id: 2,
    title: "React Fundamentals",
    desc: "Master the basics of React and build interactive user interfaces.",
    duration: "3 Weeks",
    students: "210 Students",
    image: "/trainingimg/course2.png",
    overview: {
      about:
        "Learn React from scratch, covering components, props, state, and hooks.",
      objectives: [
        "Understand React components and props",
        "Learn state management",
        "Use hooks effectively",
        "Build reusable UI components",
      ],
    },
    curriculum: [
      "Introduction to React",
      "JSX and Components",
      "Props & State",
      "Handling Events",
      "Hooks (useState, useEffect)",
      "Project: Build a Todo App",
    ],
    faqs: [
      {
        question: "Do I need JavaScript knowledge?",
        answer: "Yes, basic JavaScript ES6 knowledge is required.",
      },
      {
        question: "Is this course project-based?",
        answer: "Yes, you’ll build small projects step by step.",
      },
    ],
    reviews: [
      {
        name: "Amit Verma",
        comment: "Best React basics course I’ve taken.",
        rating: 5,
      },
      {
        name: "Priya Singh",
        comment: "Concepts are clear and examples are great.",
        rating: 4,
      },
    ],
  },
  {
    id: 3,
    title: "Advanced React & Redux",
    desc: "Take your React skills to the next level with Redux and advanced hooks.",
    duration: "4 Weeks",
    students: "189 Students",
    image: "/trainingimg/course3.png",
    overview: {
      about:
        "This course covers advanced topics like Redux, Context API, and performance optimization.",
      objectives: [
        "Understand Redux for state management",
        "Use Context API effectively",
        "Handle API calls with Redux Toolkit",
        "Optimize React apps for performance",
      ],
    },
    curriculum: [
      "Introduction to Redux",
      "Reducers & Actions",
      "Redux Toolkit",
      "React Context API",
      "Middleware & Async Actions",
      "Project: E-commerce app with Redux",
    ],
    faqs: [
      {
        question: "Do I need React basics before this?",
        answer: "Yes, React fundamentals are required.",
      },
      {
        question: "Will I build a real project?",
        answer: "Yes, an e-commerce project with Redux.",
      },
    ],
    reviews: [
      {
        name: "Karan Mehta",
        comment: "Redux was confusing before, now it’s crystal clear!",
        rating: 5,
      },
      {
        name: "Neha Gupta",
        comment: "Loved the e-commerce project example.",
        rating: 4,
      },
    ],
  },
  {
    id: 4,
    title: "JavaScript Mastery",
    desc: "Deep dive into modern JavaScript from ES6+ features to async programming.",
    duration: "3 Weeks",
    students: "240 Students",
    image: "/trainingimg/course4.png",
    overview: {
      about: "A complete guide to JavaScript including ES6+, async, and OOP.",
      objectives: [
        "Master ES6+ syntax",
        "Understand asynchronous JS",
        "Learn OOP in JavaScript",
        "Work with APIs effectively",
      ],
    },
    curriculum: [
      "ES6+ Features",
      "Arrow Functions & Template Strings",
      "Objects & Classes",
      "Promises & Async/Await",
      "APIs with Fetch & Axios",
      "Project: Weather App with API",
    ],
    faqs: [
      {
        question: "Is this beginner-friendly?",
        answer: "Yes, but some basic programming knowledge helps.",
      },
      {
        question: "Will we build projects?",
        answer: "Yes, multiple mini projects are included.",
      },
    ],
    reviews: [
      {
        name: "Anjali Kumari",
        comment: "Best JavaScript course I’ve taken!",
        rating: 5,
      },
      {
        name: "Rahul Yadav",
        comment: "Projects were very practical.",
        rating: 4,
      },
    ],
  },
  {
    id: 5,
    title: "Full Stack Development",
    desc: "Become a full stack developer with MERN (MongoDB, Express, React, Node).",
    duration: "6 Weeks",
    students: "180 Students",
    image: "/trainingimg/course5.png",
    overview: {
      about:
        "Learn complete MERN stack development from frontend to backend integration.",
      objectives: [
        "Master React for frontend",
        "Build REST APIs with Node.js",
        "Use MongoDB for database",
        "Integrate frontend and backend",
      ],
    },
    curriculum: [
      "Introduction to MERN",
      "React Frontend Development",
      "Node.js Basics",
      "Express.js APIs",
      "MongoDB Database",
      "Project: Full Stack Blog App",
    ],
    faqs: [
      {
        question: "Do I need prior experience?",
        answer: "Basic JS and React knowledge is helpful.",
      },
      {
        question: "Is this project-based?",
        answer: "Yes, you’ll build a full-stack blog app.",
      },
    ],
    reviews: [
      {
        name: "Saurabh Jain",
        comment: "Loved learning full stack step by step!",
        rating: 5,
      },
      {
        name: "Meena Rani",
        comment: "Projects made concepts very clear.",
        rating: 4,
      },
    ],
  },
  {
    id: 6,
    title: "Node.js & Express.js",
    desc: "Build backend applications with Node.js and Express.js framework.",
    duration: "3 Weeks",
    students: "140 Students",
    image: "/trainingimg/course6.png",
    overview: {
      about: "Learn how to build scalable backend apps with Node.js & Express.",
      objectives: [
        "Understand Node.js fundamentals",
        "Learn Express.js for APIs",
        "Work with databases",
        "Secure APIs with authentication",
      ],
    },
    curriculum: [
      "Node.js Basics",
      "Express.js Setup",
      "RESTful APIs",
      "Authentication & JWT",
      "Database Integration",
      "Project: Task Manager API",
    ],
    faqs: [
      {
        question: "Do I need frontend knowledge?",
        answer: "No, backend knowledge is enough.",
      },
      {
        question: "Will I learn API security?",
        answer: "Yes, JWT authentication is included.",
      },
    ],
    reviews: [
      {
        name: "Pooja Sharma",
        comment: "Clear and practical explanation of APIs.",
        rating: 5,
      },
      {
        name: "Vikas Kumar",
        comment: "Task manager project was useful.",
        rating: 4,
      },
    ],
  },
  {
    id: 7,
    title: "MongoDB Database",
    desc: "Learn MongoDB database design and queries for modern applications.",
    duration: "2 Weeks",
    students: "120 Students",
    image: "/trainingimg/course7.png",
    overview: {
      about: "Learn MongoDB for data storage in modern applications.",
      objectives: [
        "Understand NoSQL concepts",
        "Work with MongoDB collections",
        "Perform CRUD operations",
        "Integrate MongoDB with Node.js",
      ],
    },
    curriculum: [
      "Introduction to NoSQL",
      "MongoDB Setup",
      "CRUD Operations",
      "Aggregation Framework",
      "Mongoose ODM",
      "Project: Inventory Management System",
    ],
    faqs: [
      {
        question: "Is MongoDB free?",
        answer: "Yes, MongoDB community version is free.",
      },
      {
        question: "Will I learn Mongoose?",
        answer: "Yes, Mongoose ODM is included.",
      },
    ],
    reviews: [
      {
        name: "Manish Kumar",
        comment: "Great intro to databases.",
        rating: 5,
      },
      {
        name: "Divya Thakur",
        comment: "Good for beginners in NoSQL.",
        rating: 4,
      },
    ],
  },
  {
    id: 8,
    title: "HTML, CSS & Bootstrap",
    desc: "Learn web design basics with HTML, CSS, and Bootstrap framework.",
    duration: "2 Weeks",
    students: "300 Students",
    image: "/trainingimg/course8.png",
    overview: {
      about:
        "Start your web development journey with HTML, CSS, and Bootstrap.",
      objectives: [
        "Learn HTML for structure",
        "Style with CSS",
        "Use Bootstrap for responsive design",
        "Build static websites",
      ],
    },
    curriculum: [
      "HTML Basics",
      "CSS Styling",
      "Flexbox & Grid",
      "Bootstrap Components",
      "Responsive Design",
      "Project: Portfolio Website",
    ],
    faqs: [
      {
        question: "Do I need coding knowledge?",
        answer: "No, this is beginner-friendly.",
      },
      {
        question: "Will I build websites?",
        answer: "Yes, you’ll build multiple small websites.",
      },
    ],
    reviews: [
      {
        name: "Riya Kapoor",
        comment: "Loved the portfolio project.",
        rating: 5,
      },
      {
        name: "Deepak Singh",
        comment: "Perfect for beginners.",
        rating: 4,
      },
    ],
  },
  {
    id: 9,
    title: "UI/UX Design Fundamentals",
    desc: "Learn the basics of UI/UX design for creating user-friendly applications.",
    duration: "2 Weeks",
    students: "95 Students",
    image: "/trainingimg/course9.png",
    overview: {
      about: "Understand design principles and user experience basics.",
      objectives: [
        "Learn UI principles",
        "Understand UX process",
        "Design wireframes and prototypes",
        "Use tools like Figma",
      ],
    },
    curriculum: [
      "UI/UX Introduction",
      "Color & Typography",
      "Wireframes",
      "Prototypes",
      "Design Tools (Figma, XD)",
      "Project: App Wireframe Design",
    ],
    faqs: [
      {
        question: "Do I need coding skills?",
        answer: "No, this focuses on design concepts.",
      },
      {
        question: "Will I use tools?",
        answer: "Yes, Figma and Adobe XD are covered.",
      },
    ],
    reviews: [
      {
        name: "Sakshi Mishra",
        comment: "Helped me start my design journey.",
        rating: 5,
      },
      {
        name: "Arjun Rana",
        comment: "Clear UI/UX basics.",
        rating: 4,
      },
    ],
  },
];

export default coursesDetails;

