// Edit this file to change the content of the site.

export const profile = {
  name: "Jishnu Gopikrishnan",
  firstName: "Jishnu",
  email: "jishnugopikrishnan@gmail.com",
  phone: "+919526946394",
  phoneDisplay: "+91 95269 46394",
  location: "Kerala, India",
  timezone: "Asia/Kolkata",
  description:
    "Python Full Stack Developer building web apps and APIs with Python, Django and React, plus custom Frappe/ERPNext apps. Based in Kerala, India.",
};

export const roles = [
  "Python Full Stack Developer",
  "Django Developer",
  "React Developer",
  "API Developer",
  "Frappe Developer",
];

export const badges = ["Python", "Django", "React.js", "Frappe"];

export const ticker = [
  "Python",
  "Django",
  "React.js",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "Frappe",
  "ERPNext",
  "Linux",
  "AWS",
];

export type IconName = "stack" | "front" | "cube" | "db" | "cloud";

export const doors: { title: string; blurb: string; icon: IconName; chips: string[] }[] = [
  {
    title: "Python Full Stack",
    icon: "stack",
    blurb:
      "My main stack: Python and Django on the server, React on the screen, and REST APIs in between, from database to deployment.",
    chips: ["Python", "Django", "Django REST Framework", "React.js", "REST APIs", "JWT auth", "MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend",
    icon: "front",
    blurb: "Responsive interfaces that match the design and load fast.",
    chips: ["React.js", "JavaScript", "Bootstrap", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Frappe & ERPNext",
    icon: "cube",
    blurb: "Custom apps, doctypes, hooks, print formats and mobile app APIs for client businesses.",
    chips: [
      "Frappe Framework",
      "ERPNext",
      "Frappe HR",
      "Custom Apps",
      "Doctypes & Hooks",
      "Print Formats",
      "Client & Server Scripts",
      "Frappe Cloud",
      "Bench",
    ],
  },
  {
    title: "Databases",
    icon: "db",
    blurb: "Schemas and queries built around how the business actually works.",
    chips: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Cloud & Tools",
    icon: "cloud",
    blurb: "Shipping and running what I build.",
    chips: ["Git & GitHub", "Linux", "AWS (fundamentals)", "Docker (basics)", "Kubernetes (basics)", "Terraform (basics)"],
  },
];

export const timeline = [
  {
    when: "29 Jun 2026 – 31 Oct 2026",
    title: "Python Developer Intern",
    org: "Wahni IT Solutions Private Limited",
    text: "Built custom Frappe apps for clients: print formats, mobile app backends, doctype automation and reports.",
  },
  {
    when: "27 Sep 2026",
    title: "AI Tools & Claude Workshop",
    org: "be10x",
    text: "Completed the workshop and certificate on using AI tools in everyday development work.",
  },
  {
    when: "Internship",
    title: "Python Full Stack Developer Intern",
    org: "SMEC Technologies, Kochi",
    text: "Worked on full stack features with Python, Django and React.",
  },
  {
    when: "Degree",
    title: "B.Tech, Computer Science and Engineering",
    org: "Thejus Engineering College, Thrissur",
    text: "Where it started: data structures, databases and the first real projects.",
  },
];

export const projects: { title: string; text: string; tags: string; href?: string }[] = [
  {
    title: "ShoppyO",
    text: "My own e-commerce platform, live in production. Built and deployed end to end.",
    tags: "Django · React · PostgreSQL · Linux",
    href: "https://shoppyo.jishnuk.online",
  },
  {
    title: "Mobile app backends",
    text: "Frappe APIs for sales-person dashboards, session-based filters and PDF reports used by mobile apps.",
    tags: "Frappe · Python · REST APIs",
  },
  {
    title: "Print formats",
    text: "Bilingual English and Arabic letters, statements and slips, matched to the client’s own PDF layouts.",
    tags: "Frappe · Jinja · HTML · CSS",
  },
  {
    title: "Workflow automation",
    text: "Leave accrual, supplier notifications, quality inspection templates and RFQ validations.",
    tags: "Frappe · Hooks · Patches",
  },
];
