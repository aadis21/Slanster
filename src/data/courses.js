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

const coursesDetails = [
  {
    id: 1,
    title: "ITGC, IT Audit & Cyber Assessment",
    desc:
      "Master IT General Controls, risk-based auditing, and cyber assessments aligned to SOX, ISO 27001, and GDPR.",
    duration: "4 Weeks",
    students: "220 Students",
    image: "/trainingimg/course1.png",
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
          "The IT audit simulations were excellent. I finally understood how internal audits are performed in real companies. – Oct 03, 2023",
        rating: 5,
      },
      {
        name: "Nikita Verma",
        comment:
          "This course explained ITGC, SOX, and ISO 27001 in a very simple and practical way. I could connect it directly to my MBA case studies. – Oct 07, 2023",
        rating: 5,
      },
      {
        name: "Aditya Nair",
        comment:
          "I liked how cyber assessments were taught using real cloud and infrastructure examples. It didn’t feel like theory at all. – Sep 25, 2023",
        rating: 5,
      },
      {
        name: "Sanya Gupta",
        comment:
          "The forensic investigation part was detailed. I now know how evidence is preserved during fraud detection. – Oct 01, 2023",
        rating: 5,
      },
      {
        name: "Vikas Patel",
        comment:
          "Perfect program if you want to enter IT audit and risk consulting. The trainers were from Big 4—very insightful sessions. – Sep 18, 2023",
        rating: 5,
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
    image: "/trainingimg/course2.png",
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
          "Very practical course. I now know how to manage licenses for Microsoft, Oracle, and SAP, which was a complete mystery to me before. – Oct 05, 2023",
        rating: 5,
      },
      {
        name: "Rahul Singh",
        comment:
          "The Flexera and ServiceNow modules were amazing. The hands-on practice helped me understand how SAM tools actually work. – Oct 02, 2023",
        rating: 5,
      },
      {
        name: "Sneha Iyer",
        comment:
          "I applied what I learned during my internship, and my manager was surprised I could reduce costs in their software budget. – Sep 28, 2023",
        rating: 5,
      },
      {
        name: "Arjun Malhotra",
        comment:
          "Simple explanations with strong examples. The trainers connected every topic with real corporate audit scenarios. – Sep 20, 2023",
        rating: 5,
      },
      {
        name: "Simran Kaur",
        comment:
          "Great ROI on this course. Within two months I was confident enough to sit for SAM Consultant interviews. – Oct 04, 2023",
        rating: 5,
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
    image: "/trainingimg/course3.png",
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
          "I didn’t realize how powerful ESG reporting is until this course. The GRI and SASB frameworks were taught very clearly. – Oct 06, 2023",
        rating: 5,
      },
      {
        name: "Ankur Sharma",
        comment:
          "Loved the real-world examples. The case studies of Fortune 500 companies made sustainability reporting more relatable. – Sep 29, 2023",
        rating: 5,
      },
      {
        name: "Megha Jain",
        comment:
          "The assignments on ESG data collection and analytics were very useful. I now understand how to measure sustainability metrics. – Oct 03, 2023",
        rating: 5,
      },
      {
        name: "Ravi Menon",
        comment:
          "This program helped me connect my MBA research with industry practice. ESG careers are booming, and this course shows why. – Sep 25, 2023",
        rating: 5,
      },
      {
        name: "Shalini Das",
        comment:
          "The faculty was excellent. They made technical frameworks easy to digest and showed how investors look at ESG performance. – Oct 01, 2023",
        rating: 5,
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
    image: "/trainingimg/course4.png",
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
          "The modules on GDPR compliance were very detailed. I could immediately use this knowledge in my compliance internship. – Oct 02, 2023",
        rating: 5,
      },
      {
        name: "Manish Yadav",
        comment:
          "Learning about digital brand protection opened my eyes. Even something as small as font misuse can cause major issues. – Sep 27, 2023",
        rating: 5,
      },
      {
        name: "Anjali Singh",
        comment:
          "The course covered both legal aspects and technical monitoring tools. That mix was unique and very practical. – Oct 06, 2023",
        rating: 5,
      },
      {
        name: "Rohit Chauhan",
        comment:
          "Great structure and content. The trainers explained complex compliance topics in simple language with examples. – Sep 23, 2023",
        rating: 5,
      },
      {
        name: "Pooja Bansal",
        comment:
          "After this training, I feel confident to apply for roles in digital risk consulting. The mock investigations were very helpful. – Oct 04, 2023",
        rating: 5,
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
    image: "/trainingimg/course5.png",
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
          "Best startup bootcamp I’ve attended. We actually built an MVP and pitched it to mentors who gave real feedback. – Oct 07, 2023",
        rating: 5,
      },
      {
        name: "Aakash Jain",
        comment:
          "The design thinking workshops completely changed how I approach problems. It was not just theory, we worked on live case studies. – Sep 30, 2023",
        rating: 5,
      },
      {
        name: "Shruti Sharma",
        comment:
          "The module on business models and pitch decks was super valuable. I now have a professional presentation for my startup idea. – Oct 01, 2023",
        rating: 5,
      },
      {
        name: "Nikhil Mehta",
        comment:
          "Mentorship was the highlight. Talking directly to startup founders and investors gave me clarity on what works in the real world. – Sep 26, 2023",
        rating: 5,
      },
      {
        name: "Tanya Kapoor",
        comment:
          "This course gave me the courage to launch my own idea. It’s very practical, and I highly recommend it for aspiring entrepreneurs. – Oct 05, 2023",
        rating: 5,
      },
    ],
  },
];


export default coursesDetails;

