export const onlineCourses = [
  {
    slug: "jee-mains-advanced-1-year",
    title: "JEE (Main + Advanced) - 1 Year Program",
    description: "An intensive one-year online program designed to cover the complete JEE syllabus and boost your problem-solving skills.",
    image: "/jee.webp",
    aiHint: "engineering student online",
    duration: "1 Year",
    price: "85,000",
  },
  {
    slug: "jee-mains-advanced-2-year",
    title: "JEE (Main + Advanced) - 2 Year Program",
    description: "A comprehensive two-year foundation course for JEE, building concepts from the ground up for 11th grade students.",
    image: "/jee2.png",
    aiHint: "engineering online class",
    duration: "2 Years",
    price: "150,000",
  },
  {
    slug: "neet-1-year",
    title: "NEET - 1 Year Repeater Program",
    description: "A focused one-year online course for NEET repeaters, aimed at strengthening concepts and improving test scores.",
    image: "/Neet.jpg",
    aiHint: "medical student online",
    duration: "1 Year",
    price: "80,000",
  },
  {
    slug: "neet-2-year",
    title: "NEET - 2 Year Foundation Program",
    description: "A two-year online program for aspiring medical students, covering the NEET syllabus alongside board exam preparation.",
    image: "/Neet2.jpg",
    aiHint: "doctor online class",
    duration: "2 Years",
    price: "140,000",
  },
];

export const onlineCourseDetails: { [key: string]: any } = {
  "jee-mains-advanced-1-year": {
    name: "JEE (Main + Advanced) - 1 Year Online Program",
    description: "An intensive one-year online program designed to cover the complete JEE syllabus, enhance problem-solving skills, and prepare you for success in both Main and Advanced exams. Perfect for droppers and students in Class 12.",
    image: "https://placehold.co/800x600.png",
    aiHint: "student learning online",
    features: [
        { title: "Live Interactive Classes", description: "Engage with expert faculty in real-time and clear your doubts instantly." },
        { title: "Recorded Lectures", description: "Access recordings of all live classes to revise concepts at your own pace." },
        { title: "Comprehensive Study Material", description: "Get meticulously crafted digital notes, DPPs, and question banks." },
        { title: "Regular Online Tests", description: "Weekly and monthly tests simulating the real exam pattern to track your progress." },
    ],
    fees: {
        title: "Fee Structure",
        amount: "85,000",
        duration: "1 Year",
        info: [
            "Includes all taxes and study material costs.",
            "EMI option available via all major credit cards.",
            "Scholarships available for meritorious students."
        ]
    }
  },
  "jee-mains-advanced-2-year": {
    name: "JEE (Main + Advanced) - 2 Year Online Program",
    description: "A comprehensive two-year foundation course starting from Class 11. This online program builds a strong conceptual base, covering the entire JEE syllabus alongside board exam preparation.",
    image: "https://placehold.co/800x600.png",
    aiHint: "student online lecture",
    features: [
        { title: "Structured Foundational Learning", description: "Build concepts from scratch with a curriculum designed for Class 11 & 12 students." },
        { title: "Personalized Mentorship", description: "Get dedicated mentors to guide you throughout your two-year preparation journey." },
        { title: "Extensive Doubt Support", description: "24/7 doubt-solving through our app and dedicated live sessions." },
        { title: "All India Test Series", description: "Compete with peers across the country and benchmark your performance." },
    ],
    fees: {
        title: "Fee Structure",
        amount: "150,000",
        duration: "2 Years",
        info: [
            "Fee can be paid in easy installments.",
            "Includes access to all online resources for two years.",
            "Special discounts for early bird registrations."
        ]
    }
  },
  "neet-1-year": {
    name: "NEET - 1 Year Repeater Online Program",
    description: "A focused one-year online program for NEET aspirants looking to reappear for the exam. The course is designed for intense revision, doubt clearing, and extensive test practice.",
    image: "https://placehold.co/800x600.png",
    aiHint: "medical student computer",
    features: [
        { title: "Fast-Track Syllabus Coverage", description: "Quick and thorough revision of the entire NEET syllabus by top medical faculty." },
        { title: "Error Analysis Sessions", description: "Specialized sessions to analyze mistakes made in tests and improve performance." },
        { title: "High-Yield Question Practice", description: "Focus on practicing the most important and frequently asked questions in NEET." },
        { title: "Well-being and Motivation", description: "Regular sessions to keep you motivated and focused on your goal." },
    ],
    fees: {
        title: "Fee Structure",
        amount: "80,000",
        duration: "1 Year",
        info: [
            "Includes all taxes and digital study material.",
            "Flexible EMI options available.",
            "Access to a vast library of recorded lectures."
        ]
    }
  },
  "neet-2-year": {
    name: "NEET - 2 Year Foundation Online Program",
    description: "A two-year online program for aspiring medical students starting in Class 11. This course provides a solid foundation in Physics, Chemistry, and Biology to excel in NEET and board exams.",
    image: "https://placehold.co/800x600.png",
    aiHint: "doctor online consultation",
    features: [
        { title: "Concept Building from Basics", description: "Strengthen your fundamentals with our expertly designed two-year curriculum." },
        { title: "Interactive 3D Video Lectures", description: "Understand complex biological and chemical processes with immersive visuals." },
        { title: "Regular Parent-Teacher Connect", description: "Stay updated on your progress with regular virtual meetings." },
        { title: "Full-Length Mock Tests", description: "Practice with numerous mock tests that replicate the actual NEET environment." },
    ],
    fees: {
        title: "Fee Structure",
        amount: "140,000",
        duration: "2 Years",
        info: [
            "Two-year access to all course content.",
            "Installment and EMI options available.",
            "Early registration benefits apply."
        ]
    }
  },
};
