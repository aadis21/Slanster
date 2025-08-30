// data/courses.js
export const courses = [
  {
    id: 1,
    title: "ITGC, IT Audit & Cyber Assessment",
    desc: "Understand IT General Controls, plan IT audits, assess cyber risks, and report findings with practical checklists.",
    duration: "2 Weeks",
    students: "156 Students",
    img: "/trainingimg/course1.jpg",
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
    img: "/trainingimg/course2.jpg",
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
    img: "/trainingimg/course3.jpg",
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
    img: "/trainingimg/course4.jpg",
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
    img: "/trainingimg/course5.jpg",
    syllabus: [
      "Idea Validation",
      "Building MVP",
      "Go-To-Market Strategy",
      "Pitching to Investors",
    ],
  },
    {
    id: 6,
    title: "Python with AI & Machine Learning",
    desc: "Python foundations to deep learning: NumPy, Pandas, ML algorithms, TensorFlow/Keras, and real AI mini-projects.",
    duration: "6 Weeks",
    students: "280 Students",
    img: "/trainingimg/course6.jpg", // your uploaded image (course6)
    syllabus: [
      "Core Python (syntax, OOPs, files)",
      "Data Science Basics (NumPy, Pandas, Matplotlib/Seaborn)",
      "Machine Learning (Regression, Classification, Trees, Clustering)",
      "Deep Learning Intro (TensorFlow/Keras, CNN basics)",
      "AI Use-Cases (Chatbots/NLP, CV mini-projects)"
    ],
  },
  {
    id: 7,
    title: "Node.js & Backend Development",
    desc: "Modern backend engineering with Node.js, Express, REST APIs, databases, auth, and deployment.",
    duration: "5 Weeks",
    students: "265 Students",
    img: "/trainingimg/course5.jpg", // your uploaded image (course5)
    syllabus: [
      "JavaScript ES6+ refresher",
      "Node.js Core (event loop, async, modules)",
      "Express.js (routing, middleware, REST APIs)",
      "DB Integration (MongoDB/MySQL basics)",
      "Auth & Security (JWT, OAuth, bcrypt) & Deploy"
    ],
  },

  
];



// courses.js

const coursesDetails = [
  {
    id: 1,
    title: "ITGC, IT Audit & Cyber Assessment",
    desc:
      "Master IT General Controls, risk-based auditing, and cyber assessments aligned to SOX, ISO 27001, and GDPR.",
    duration: "4 Weeks",
    students: "220 Students",
    image: "/trainingimg/course1.jpg",
    overview: {
      about:
        "In today’s digital-first business environment, IT controls and cyber assessments have become the backbone of corporate governance. This course offers a comprehensive understanding of IT General Controls (ITGC), risk-based audits, and cyber assessments, focusing on how organizations safeguard information systems and maintain compliance with global standards such as SOX, ISO 27001, and GDPR. Learners explore the critical role of audits in identifying gaps, preventing fraud, and strengthening enterprise resilience. With the help of real-world case studies, forensic analysis, and simulations, participants gain practical skills to assess risk exposure, evaluate IT infrastructure, and implement effective internal controls. The program ensures you are equipped to carry out professional IT audits across on-premise and cloud environments, preparing you for leadership roles in governance, risk, and compliance.",
      objectives: [
        "Explain ITGC domains (access, change, operations, backup) and control testing approaches",
        "Plan and execute risk-based IT audits in hybrid/cloud environments",
        "Map controls to SOX, ISO 27001 Annex A, and GDPR requirements",
        "Perform evidence collection, sampling, and walkthroughs",
        "Use audit tools to build defensible working papers",
        "Report findings with remediation plans and exec dashboards",
      ],
    },
    curriculum: [
      "Foundations of ITGC & Risk-Based Auditing",
      "Control Mapping: SOX, ISO 27001, GDPR",
      "Cloud Controls (AWS/Azure/GCP) & Shared Responsibility",
      "Evidence, Sampling, ToD vs. ToE",
      "Forensic Techniques & Incident Review Simulations",
      "Capstone: End-to-End ITGC Audit & Executive Report",
    ],
    faqs: [
      {
        question: "What is ITGC and why is it important?",
        answer:
          "ITGC (IT General Controls) ensures the security, reliability, and compliance of IT systems. Strong ITGC is critical for global audit standards like SOX and ISO 27001.",
      },
      {
        question: "What practical skills will I gain from this course?",
        answer:
          "You’ll learn to conduct IT audits, assess cyber risks, test IT controls, and perform forensic investigations in real corporate environments.",
      },
      {
        question: "Who should join this program?",
        answer:
          "Final-year B.Tech students, MBA graduates, and early-career professionals who want to build careers in cybersecurity, IT audit, or compliance.",
      },
      {
        question: "What career opportunities open up after this course?",
        answer:
          "Roles include IT Auditor, Cybersecurity Consultant, Risk Analyst, and Forensic Technology Specialist.",
      },
    ],
    reviews: [
      {
        name: "Rohit Sharma",
        comment:
          "The IT audit simulations were excellent and close to real scenarios. A couple of labs ran long but worth it. – Oct 03, 2023",
        rating: 4.5,
      },
      {
        name: "Nikita Verma",
        comment:
          "Explained ITGC, SOX, and ISO 27001 practically; a bit dense in parts but very useful for MBA case work. – Oct 07, 2023",
        rating: 4.1,
      },
      {
        name: "Aditya Nair",
        comment:
          "Real cloud examples kept it engaging. Pace felt rushed in the last session. – Sep 25, 2023",
        rating: 3.7,
      },
      {
        name: "Sanya Gupta",
        comment:
          "Forensic investigation module was detailed; would like more hands-on datasets. – Oct 01, 2023",
        rating: 4.2,
      },
      {
        name: "Vikas Patel",
        comment:
          "Good entry to IT audit/risk consulting; Big 4 perspectives added value. – Sep 18, 2023",
        rating: 4.3,
      },
    ],
  },

  {
    id: 2,
    title: "IT Asset Management (SAM)",
    desc:
      "Master Software Asset Management and ITAM to optimize software spend, pass vendor audits, and ensure compliance.",
    duration: "3 Weeks",
    students: "200 Students",
    image: "/trainingimg/course2.jpg",
    overview: {
      about:
        "Managing IT assets efficiently is a vital skill for modern enterprises seeking to optimize resources and reduce costs. This course dives into Software Asset Management (SAM) and IT Asset Management practices, providing insights into license management, vendor audits, and compliance strategies. Participants develop a strong foundation in managing multi-million-dollar IT budgets, ensuring that investments deliver maximum value while minimizing risks. Hands-on training with tools like Flexera and ServiceNow brings practical application to theory, enabling learners to handle real-world licensing and vendor challenges with confidence. By the end of the course, you will be prepared to design asset strategies, negotiate effectively with top vendors such as Microsoft, SAP, Oracle, and IBM, and implement governance frameworks that align with business goals.",
      objectives: [
        "Set up ITAM/SAM governance and policies",
        "Perform effective software discovery and normalization",
        "Interpret and manage licensing (MS, Oracle, SAP, IBM, VMware)",
        "Prepare for and respond to vendor audits",
        "Use Flexera and ServiceNow for license optimization",
        "Build cost-optimization and compliance dashboards",
      ],
    },
    curriculum: [
      "ITAM & SAM Fundamentals, Policies, and Processes",
      "Software Discovery, Normalization & CMDB Alignment",
      "License Models: Microsoft, Oracle, SAP, IBM, VMware",
      "Vendor Audits: Readiness, Defense & Negotiation",
      "Hands-on with Flexera & ServiceNow",
      "Capstone: Enterprise SAM Strategy & Savings Plan",
    ],
    faqs: [
      {
        question: "Why is Software Asset Management (SAM) essential for companies?",
        answer:
          "SAM helps organizations optimize multi-million-dollar software budgets, stay compliant with licensing, and avoid legal or financial penalties.",
      },
      {
        question: "What tools and platforms will I learn in this course?",
        answer:
          "You’ll gain hands-on experience in SAM tools like Flexera, ServiceNow, and vendor management for Microsoft, Oracle, SAP, IBM, and VMware.",
      },
      {
        question: "How will this course improve my career prospects?",
        answer:
          "SAM expertise is in high demand globally, with consulting firms and enterprises hiring specialists for IT cost optimization and compliance.",
      },
      {
        question: "What job titles can I target after completing this program?",
        answer:
          "IT Asset Manager, SAM Consultant, Licensing Analyst, or IT Procurement Advisor.",
      },
    ],
    reviews: [
      {
        name: "Aditi Mehra",
        comment:
          "Very practical—licensing for Microsoft/SAP finally clicked. One more negotiation role-play would help. – Oct 05, 2023",
        rating: 4.1,
      },
      {
        name: "Rahul Singh",
        comment:
          "Flexera/ServiceNow labs were solid. A few steps confusing initially but clear later. – Oct 02, 2023",
        rating: 4.3,
      },
      {
        name: "Sneha Iyer",
        comment:
          "Applied concepts in my internship and reduced software spend—big win. – Sep 28, 2023",
        rating: 4.4,
      },
      {
        name: "Arjun Malhotra",
        comment:
          "Good examples and pace overall; licensing section felt a bit fast. – Sep 20, 2023",
        rating: 3.8,
      },
      {
        name: "Simran Kaur",
        comment:
          "Great ROI; felt ready for SAM interviews. More mock audits would be nice. – Oct 04, 2023",
        rating: 4.0,
      },
    ],
  },

  {
    id: 3,
    title: "ESG & Sustainability",
    desc:
      "Learn ESG principles and reporting frameworks (GRI, SASB, Integrated Reporting) to drive sustainable value.",
    duration: "3 Weeks",
    students: "160 Students",
    image: "/trainingimg/course3.jpg",
    overview: {
      about:
        "Sustainability has become a defining factor for organizations striving for long-term success and global relevance. This course focuses on the principles of Environmental, Social, and Governance (ESG), offering a clear understanding of how businesses align strategies with international standards such as GRI, SASB, and Integrated Reporting. Learners gain the ability to measure, monitor, and report ESG performance with accuracy and transparency. Through case studies of leading corporations, participants explore how sustainability initiatives drive financial, social, and reputational value. The program equips professionals with tools to build robust ESG strategies, prepare impactful reports, and embed responsible practices into organizational culture, ensuring both compliance and competitive advantage in a rapidly evolving marketplace.",
      objectives: [
        "Define ESG and its impact on business performance",
        "Apply GRI, SASB, and Integrated Reporting standards",
        "Collect, validate, and analyze ESG data",
        "Design ESG KPIs and materiality assessments",
        "Draft ESG disclosures and reports",
        "Build ESG strategies aligned with investor expectations",
      ],
    },
    curriculum: [
      "ESG Foundations & Global Drivers",
      "Frameworks Deep Dive: GRI, SASB, Integrated Reporting",
      "ESG Data: Sourcing, Quality, and Analytics",
      "Materiality, KPIs, and Target-Setting",
      "Reporting & Assurance Considerations",
      "Capstone: ESG Report with Case Benchmarking",
    ],
    faqs: [
      {
        question: "What does ESG mean in business?",
        answer:
          "ESG stands for Environmental, Social, and Governance—factors that measure a company’s sustainability, ethics, and corporate responsibility.",
      },
      {
        question: "Why is ESG knowledge in such high demand today?",
        answer:
          "Investors and regulators now require companies to disclose ESG performance. Firms with strong ESG credentials attract better investments and credibility.",
      },
      {
        question: "What frameworks will I learn in this course?",
        answer:
          "You’ll study GRI, SASB, and Integrated Reporting frameworks, plus learn how to prepare ESG reports with real case studies.",
      },
      {
        question: "What career options exist after completing ESG training?",
        answer:
          "Careers include ESG Analyst, Sustainability Consultant, Climate Risk Analyst, or Compliance Manager.",
      },
    ],
    reviews: [
      {
        name: "Priya Nair",
        comment:
          "Clear overview of ESG reporting; theory-heavy at times but frameworks were well explained. – Oct 06, 2023",
        rating: 4.2,
      },
      {
        name: "Ankur Sharma",
        comment:
          "Fortune 500 case studies were eye-opening. A couple of sessions felt long. – Sep 29, 2023",
        rating: 4.0,
      },
      {
        name: "Megha Jain",
        comment:
          "ESG data collection assignments were practical; more peer discussion would help. – Oct 03, 2023",
        rating: 3.9,
      },
      {
        name: "Ravi Menon",
        comment:
          "Great bridge between MBA research and industry practice; helpful career context. – Sep 25, 2023",
        rating: 4.3,
      },
      {
        name: "Shalini Das",
        comment:
          "Faculty made complex standards digestible; templates for disclosures would be a plus. – Oct 01, 2023",
        rating: 4.1,
      },
    ],
  },

  {
    id: 4,
    title: "Digital Risk & Compliance",
    desc:
      "Understand digital risks, privacy, IP protection, and compliance frameworks to protect brand and reputation online.",
    duration: "3 Weeks",
    students: "175 Students",
    image: "/trainingimg/course4.jpg",
    overview: {
      about:
        "The digital economy offers immense opportunities, but it also brings new challenges in managing risks and ensuring compliance. This course provides a structured approach to understanding digital risks, including data privacy concerns, reputational threats, and intellectual property issues. Learners are introduced to key regulations such as GDPR, while also examining the technologies and frameworks used to mitigate risks in online environments. Practical sessions cover areas like digital reputation monitoring, compliance assessments, and case scenarios where organizations failed or succeeded in managing their digital footprint. By blending legal, technological, and risk management perspectives, the course prepares participants to safeguard organizations from evolving online threats and maintain regulatory compliance in a connected world.",
      objectives: [
        "Identify key digital risks: privacy, IP, brand, and reputational threats",
        "Apply GDPR principles and build compliance checklists",
        "Use monitoring tools for brand and IP protection",
        "Conduct digital compliance assessments and audits",
        "Investigate online incidents and document evidence",
        "Create risk registers and response playbooks",
      ],
    },
    curriculum: [
      "Digital Risk Landscape & Case Studies",
      "Regulations & Privacy: GDPR Essentials",
      "Brand, IP & Content Protection in the Digital World",
      "Monitoring, Investigation & Evidence Preservation",
      "Digital Compliance Audits & Controls",
      "Capstone: Digital Risk Program & Playbook",
    ],
    faqs: [
      {
        question: "What is Digital Risk in the corporate world?",
        answer:
          "Digital risk includes threats to a company’s brand, reputation, intellectual property, and compliance across online platforms.",
      },
      {
        question: "What skills will I develop in this program?",
        answer:
          "You’ll master GDPR compliance, IP protection, online investigation tools, and monitoring brand risks across digital and social platforms.",
      },
      {
        question: "Why should I consider a career in Digital Risk & Compliance?",
        answer:
          "With businesses moving online, demand for digital compliance and brand protection specialists is rapidly increasing worldwide.",
      },
      {
        question: "What career roles can I apply for after this program?",
        answer:
          "Risk Analyst, Digital Compliance Consultant, Brand Protection Specialist, or Technology Risk Advisor.",
      },
    ],
    reviews: [
      {
        name: "Neha Kapoor",
        comment:
          "GDPR modules were detailed and practical; some legal bits felt dense. – Oct 02, 2023",
        rating: 4.0,
      },
      {
        name: "Manish Yadav",
        comment:
          "Brand/IP protection insights were eye-opening. Tool demos could go a little deeper. – Sep 27, 2023",
        rating: 3.7,
      },
      {
        name: "Anjali Singh",
        comment:
          "Good balance of legal concepts and monitoring tools; longer labs would help. – Oct 06, 2023",
        rating: 4.2,
      },
      {
        name: "Rohit Chauhan",
        comment:
          "Well-structured with relevant examples; easy to follow throughout. – Sep 23, 2023",
        rating: 4.4,
      },
      {
        name: "Pooja Bansal",
        comment:
          "Mock investigations were challenging but boosted confidence for interviews. – Oct 04, 2023",
        rating: 4.1,
      },
    ],
  },

  {
    id: 5,
    title: "Entrepreneurship & Startup Innovation",
    desc:
      "Turn ideas into ventures using design thinking, lean startup, and investor-ready pitching.",
    duration: "4 Weeks",
    students: "210 Students",
    image: "/trainingimg/course5.jpg",
    overview: {
      about:
        "Turning ideas into impactful ventures requires vision, strategy, and execution. This program takes learners on a complete entrepreneurial journey, starting with idea validation and business model design, and progressing through product development, market testing, and branding. Participants are guided to think creatively and strategically, applying frameworks like design thinking and lean startup methodologies to build practical solutions. With a strong emphasis on real-world application, the course provides exposure to investor pitching, fundraising strategies, and startup legal frameworks. Mentorship from experienced founders and hands-on exercises ensure that learners not only acquire theoretical knowledge but also the confidence to navigate challenges and scale ventures in competitive markets.",
      objectives: [
        "Validate ideas using customer discovery and problem interviews",
        "Design business models with the Business Model Canvas",
        "Build MVPs and plan iterative experiments",
        "Develop GTM strategy, branding, and positioning",
        "Create investor-ready pitch decks and financials",
        "Understand startup legal, equity, and compliance basics",
      ],
    },
    curriculum: [
      "Design Thinking & Problem Discovery",
      "Business Model Canvas & Unit Economics",
      "MVP Build, Experiments & Market Testing",
      "Branding, GTM Strategy & Growth Loops",
      "Fundraising, Pitch Decks & Term Sheets",
      "Demo Day: Pitch to Mentors & Feedback",
    ],
    faqs: [
      {
        question: "What makes this startup program unique?",
        answer:
          "It’s a hands-on bootcamp where you’ll design a real digital product, build an MVP, and launch it with guidance from mentors and founders.",
      },
      {
        question: "Is this course suitable only for entrepreneurs?",
        answer:
          "No. It’s also valuable for professionals seeking skills in innovation, product design, and business strategy.",
      },
      {
        question: "What topics are covered in this course?",
        answer:
          "Design Thinking, Business Model Canvas, market validation, investor pitching, legal compliance, branding, and team building.",
      },
      {
        question: "What outcomes can I expect from the program?",
        answer:
          "You’ll graduate with a live startup idea, a professional pitch deck, and direct exposure to industry mentors and investors.",
      },
    ],
    reviews: [
      {
        name: "Kavya Arora",
        comment:
          "Built an MVP and pitched to mentors—great experience. A follow-up mentoring track would make it perfect. – Oct 07, 2023",
        rating: 4.3,
      },
      {
        name: "Aakash Jain",
        comment:
          "Design thinking workshops changed how I frame problems; at times felt like a quick sprint. – Sep 30, 2023",
        rating: 4.0,
      },
      {
        name: "Shruti Sharma",
        comment:
          "Business models and pitch decks were super useful; more time on financial modeling would help. – Oct 01, 2023",
        rating: 3.8,
      },
      {
        name: "Nikhil Mehta",
        comment:
          "Mentor interactions stood out—founder insights were practical and honest. – Sep 26, 2023",
        rating: 4.4,
      },
      {
        name: "Tanya Kapoor",
        comment:
          "Gave me the push to launch my idea; schedule was packed but worth it. – Oct 05, 2023",
        rating: 4.1,
      },
    ],
  },

    {
    id: 6,
    title: "Python with AI & Machine Learning",
    desc: "End-to-end Python + AI/ML with practical mini-projects and a capstone.",
    duration: "6 Weeks",
    students: "280 Students",
    image: "/trainingimg/course6.jpg",
    overview: {
      about:
        "A hands-on pathway from Python fundamentals to applied AI. Build data pipelines, train classic ML models, and step into deep learning with TensorFlow/Keras. Mini-projects in NLP and Computer Vision prepare you for real interview use-cases and internships.",
      objectives: [
        "Write clean Python with OOPs, file handling, and libraries",
        "Manipulate data using NumPy/Pandas and visualize insights",
        "Train/evaluate ML models (regression, classification, trees, clustering)",
        "Build and tune neural networks with TensorFlow/Keras",
        "Apply AI to NLP/CV mini-projects and ship a capstone"
      ],
    },
    curriculum: [
      "Python Essentials & OOPs · Files · Virtualenv",
      "Data Science Foundations: NumPy, Pandas, EDA, Matplotlib/Seaborn",
      "ML Algorithms: Linear/Logistic, Trees/Random Forests, K-Means",
      "Deep Learning: Tensors, Model APIs, CNN basics, callbacks",
      "AI Applications: Chatbot/NLP, Image classification mini-projects",
      "Capstone: Predictive Model or AI Chatbot with report & demo"
    ],
    faqs: [
      { question: "Do I need prior Python?", answer: "Basic programming helps, but we start from Python fundamentals and ramp up quickly." },
      { question: "Which libraries are covered?", answer: "NumPy, Pandas, Matplotlib/Seaborn, scikit-learn, TensorFlow/Keras." },
      { question: "What is the capstone?", answer: "Choose between a predictive model or an AI chatbot/CV project with a short report and demo." },
      { question: "Career outcomes?", answer: "Python Developer, Data Analyst, ML Intern/Engineer (entry level), AI Project Trainee." }
    ],
    reviews: [
      { name: "Riya Malhotra", comment: "Crisp EDA + ML flow; DL intro was perfectly paced.", rating: 4.4 },
      { name: "Harshit Arora", comment: "Mini-projects felt industry-relevant; want more hyper-parameter labs.", rating: 4.2 },
      { name: "Tanvi Joshi", comment: "Great starter to TensorFlow—loved the callbacks & metrics part.", rating: 4.1 }
    ],
  },
  {
    id: 7,
    title: "Node.js & Backend Development",
    desc: "Design and deploy production-style REST APIs with Node.js, Express, databases, and authentication.",
    duration: "5 Weeks",
    students: "265 Students",
    image: "/trainingimg/course5.jpg",
    overview: {
      about:
        "Backend bootcamp focused on building secure, scalable REST APIs. Learn Node internals, Express patterns, database integration, JWT/OAuth, and CI/CD-friendly deployment. You’ll finish with a documented API and a live demo.",
      objectives: [
        "Master Node.js runtime, modules, async patterns",
        "Build REST APIs with Express (routing, validation, error handling)",
        "Integrate MongoDB/MySQL and model data effectively",
        "Implement auth with JWT/OAuth and secure best practices",
        "Containerize and deploy to cloud providers"
      ],
    },
    curriculum: [
      "JavaScript ES6+ & Node.js Core (event loop, streams, promises)",
      "Express Fundamentals: routers, middleware, joi/zod validation",
      "Data Layer: MongoDB (Mongoose) & MySQL/PostgreSQL basics",
      "Auth & Security: JWT/OAuth, bcrypt, RBAC, rate-limits, CORS",
      "Deployment: env configs, Docker intro, CI/CD & cloud basics",
      "Capstone: Production-ready REST API with docs & tests"
    ],
    faqs: [
      { question: "Do we cover TypeScript?", answer: "The course uses JS; optional notes show how to migrate to TS for typings." },
      { question: "Which DB is primary?", answer: "MongoDB for speed; SQL basics included for relational concepts." },
      { question: "Is deployment included?", answer: "Yes—environment setup, Docker intro, and cloud deployment basics." },
      { question: "Career roles?", answer: "Node.js Developer, Backend Engineer, API Developer, Full-Stack (Backend-heavy)." }
    ],
    reviews: [
      { name: "Sourabh Kulkarni", comment: "Auth + RBAC section was gold. Loved the error-handling pattern.", rating: 4.5 },
      { name: "Neelam S.", comment: "Clear roadmap from basics to deploy; wanted more SQL labs.", rating: 4.1 },
      { name: "Kabir Mehta", comment: "Good production checklists; logging & env tips were practical.", rating: 4.3 }
    ],
  },

];


export default coursesDetails;

