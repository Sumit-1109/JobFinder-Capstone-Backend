const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    companyName: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    jobPosition: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
      enum: ["full-time", "part-time", "contract", "internship", "freelance"],
    },
    remoteOffice: {
      type: String,
      required: true,
      enum: ["Remote", "Office"],
    },
    location: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  
    companyDescription: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: [String],
      enum: [
        "JavaScript",
        "Node.js",
        "React",
        "Python",
        "Java",
        "SQL",
        "C++",
        "Ruby",
        "Go",
        "HTML",
        "CSS",
        "PHP",
        "Ruby on Rails",
        "Angular",
        "Vue.js",
        "Swift",
        "Objective-C",
        "Accounting",
        "Finance",
        "Budgeting",
        "Taxation",
        "Auditing",
        "Financial Analysis",
        "Marketing",
        "SEO",
        "Content Creation",
        "Social Media Management",
        "Advertising",
        "Sales",
        "Customer Relationship Management",
        "Negotiation",
        "Retail Management",
        "Project Management",
        "Agile Methodologies",
        "Scrum",
        "Lean Management",
        "Human Resources",
        "Recruitment",
        "Employee Relations",
        "Performance Management",
        "Healthcare",
        "Nursing",
        "Medical Coding",
        "Pharmacy",
        "Medical Research",
        "Education",
        "Teaching",
        "Curriculum Development",
        "Educational Technology",
        "Engineering",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Design",
        "Graphic Design",
        "UX/UI Design",
        "Product Design",
        "Industrial Design",
        "Manufacturing",
        "Quality Control",
        "Production Planning",
        "Supply Chain Management",
        "Construction",
        "Building Information Modeling",
        "Project Planning",
        "Safety Management",
        "Logistics",
        "Transportation Management",
        "Warehouse Management",
        "Inventory Control",
        "Legal",
        "Contract Law",
        "Litigation",
        "Corporate Law",
        "Intellectual Property",
        "Data Analysis",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Cybersecurity",
        "Network Security",
        "Information Technology",
        "Cloud Computing",
        "Communication Skills",
        "Teamwork",
        "Leadership",
        "Problem-Solving",
        "Critical Thinking",
        "Time Management",
        "Adaptability",
        "Creativity",
        "Conflict Resolution",
        "Customer Service",
        "Networking",
        "Technical Writing",
        "Public Speaking",
        "Research Skills",
        "Analytical Skills",
        "Organizational Skills",
        "Attention to Detail",
        "Interpersonal Skills",
        "Emotional Intelligence",
        "Decision-Making",
        "Multitasking",
        "Professionalism",
        "Integrity",
        "Work Ethic",
      ],
      required: true,
    },
    additionalInfo: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  });

  module.exports = mongoose.model("Job", jobSchema )