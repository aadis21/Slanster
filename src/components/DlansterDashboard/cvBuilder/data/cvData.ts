// Define interfaces for structured CV data
export interface Project {
	title: string;
	link?: string;
	summary: string;
}

export interface Education {
	title: string;
	school: string;
	startDate: string;
	endDate: string;
}

export interface Experience {
	title: string;
	company: string;
	startDate: string | Date;
	endDate: string | Date;
	current: boolean;
	summary: string;
}

export interface CVData {
	name: string;
	image: string;
	jobTitle: string;
	location: string;
	email: string;
	linkedIn?: string;
	instagram?: string;
	facebook?: string;
	twitter?: string;
	github?: string;
	website?: string;
	about: string;
	toolsAndTechSkills: string[];
	industryKnowledge: string[];
	languages: string[];
	skillTitle1: string;
	skillTitle2: string;
	skillTitle3: string;
	projects: Project[];
	education: Education[];
	experiences: Experience[];
	displayImage: boolean;
	displayMail: boolean;
	displayWebSite: boolean;
	displayLinkedIn: boolean;
	displayInstagram: boolean;
	displayFacebook: boolean;
	displayGithub: boolean;
	displayTwitter: boolean;
	activeColor: string;
}

export const cvData: CVData = {
	name: "example",
	image: "",
	jobTitle: "Frontend Developer",
	location: "Mohali ,India",
	email: "example@gmail.com",
	linkedIn: "https://linndin.com/example",
	instagram: "https://instagram.com/example",
	facebook: "https://facebook.com/example",
	twitter: "example",
	github: "example",
	website: "example.dev",
	about:
		"After graduating from the programming department I have been working to be a **Front End Developer** for the last 1 year and I am looking for a job in this field. Because of my old job. ",

	toolsAndTechSkills: [
		"Photoshop",
		"Final Cut Pro",
		"Figma",
		"Webflow",
		"Sketch",
		"Illustrator",
	],
	industryKnowledge: [
		"Javascript",
		"CSS",
		"HTML",
		"Next.js",
		"React",
		"Tailwind",
	],
	languages: ["Hindi(Native)", "English(A2)"],
	skillTitle1: "Tools and Tech Skills",
	skillTitle2: "Industry Knowledge",
	skillTitle3: "Languages",
	projects: [
		{
			title: "New Project",
			link: "https://abc.dev",
			summary: `This is my First Prohject . In this Project I learned a lot of things in frontend field`,
		},
		{
			title: "Facebook clone",
			link: "https://facebook.dev",
			summary: `This is my new project with Facebook Clone`,
		},
		{
			title: "Weather App",
			link: "https://weather-imhalid.vercel.app/",
			summary: `In this work, a small project where I visualize the data from the API.`,
		},
	],
	education: [
		{
			title: "Web Design and Programming",
			school: "Anadolu University",
			startDate: "2022",
			endDate: "Now",
		},
		{
			title: "Computer Programming",
			school: "Adnan Menderes University",
			startDate: "2017",
			endDate: "2019",
		},
	],
	experiences: [
		{
			title: "Frontend developer",
			company: "CFT Lab",
			startDate: "2023",
			endDate: "2024",
			current: true,
			summary: `I have been working as a frontend developer from 7 years. I have gained a lot of experience in this field .`,
		},
		{
			title: "Content Creator, Videographer",
			company: "HopingMinds",
			startDate: "2024",
			endDate: "(6 Months)",
			current: true,
			summary: `In this company that sells accessories for phones and technological products, I prepared the video edits of the new products and mounted them with Final Cut Pro. I shared my social media posts with Facebook Business.`,
		},
	],
	displayImage: true,
	displayMail: true,
	displayWebSite: true,
	displayLinkedIn: false,
	displayInstagram: false,
	displayFacebook: false,
	displayGithub: true,
	displayTwitter: true,
	activeColor: "#5B21B6",
};

// Separate type for empty CV
export interface CVDataEmpty {
	name: string;
	jobTitle: string;
	location: string;
	email: string;
	linkedin: string;
	twitter: string;
	github: string;
	website: string;
	aboutme: string;
	toolsAndTechSkills: string[];
	industryKnowledge: string[];
	languages: string[];
	projects: Array<{ title: string; summary: string }>;
	experience: Array<{
		title: string;
		company: string;
		from: Date;
		to: Date;
		current: boolean;
		summary: string;
	}>;
	displayEducation: boolean;
	displayProjects: boolean;
	activeColor: string;
}

export const cvDataEmpty: CVDataEmpty = {
	name: "",
	jobTitle: "",
	location: "",
	email: "",
	linkedin: "",
	twitter: "",
	github: "",
	website: "",
	aboutme: "",
	toolsAndTechSkills: [],
	industryKnowledge: [],
	languages: [],
	projects: [
		{
			title: "",
			summary: "",
		},
	],
	experience: [
		{
			title: "",
			company: "",
			from: new Date(),
			to: new Date(),
			current: true,
			summary: "",
		},
	],
	displayEducation: false,
	displayProjects: false,
	activeColor: "#5B21B6",
};
