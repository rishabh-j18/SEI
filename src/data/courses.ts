import { BookCheck, Briefcase, Code, Microscope, Shield, Star } from "lucide-react";

export const courses = [
    {
        slug: "ssc-cgl",
        title: "SSC-CGL SUPER 30 (ANUSHAASAN BATCH)",
        description: "A specialized batch designed to crack the SSC-CGL exam with a disciplined and focused approach. Join SEI Campus, the best coaching center in India, to not only clear the exam but achieve a high rank.",
        image: "/SSC.jpg",
        aiHint: "government exam preparation",
        duration: "1 Year",
        icon: Star,
    },
    {
        slug: "jee-mains",
        title: "JEE MAINS",
        description: "Comprehensive preparation for the Joint Entrance Examination (Main) to get into top engineering colleges.",
        image: "/jee.webp",
        aiHint: "engineering student studying",
        duration: "2 Years",
        icon: Code,
    },
    {
        slug: "boards",
        title: "Boards",
        description: "Focused curriculum to excel in Class X and XII board examinations for CBSE, ICSE, and state boards.",
        image: "/Boards.avif",
        aiHint: "student writing exam",
        duration: "1 Year",
        icon: BookCheck,
    },
    {
        slug: "neet",
        title: "NEET",
        description: "Intensive coaching for the National Eligibility cum Entrance Test for aspiring medical students.",
        image: "/Neet.jpg",
        aiHint: "medical student dna",
        duration: "2 Years",
        icon: Microscope,
    },
    {
        slug: "bank",
        title: "BANK",
        description: "Targeted training for various banking sector exams like IBPS PO, Clerk, and Specialist Officer.",
        image: "/Bank.jpg",
        aiHint: "banking finance",
        duration: "6 Months",
        icon: Briefcase,
    },
    {
        slug: "up-police",
        title: "UP POLICE",
        description: "Rigorous physical and academic training to prepare candidates for the Uttar Pradesh Police recruitment.",
        image: "/Police.webp",
        aiHint: "police officer",
        duration: "6 Months",
        icon: Shield,
    },
];

export const courseDetails = {
  "ssc-cgl": {
    name: "SSC-CGL SUPER 30 (ANUSHAASAN BATCH)",
    image: "https://placehold.co/800x600.png",
    alt: "SSC CGL Preparation",
    aiHint: "students exam success",
    description: [
        "Today SSC is one of the most sought-after exams by the students who have just completed their graduation. In the recent years the cut- off of SSC has changed tremendously. And this all became possible because students are now much better aware about the exam and the level of the completion.",
        "SEI CAMPUS is the best coaching center in India. Our students not only just clear the exams but also manage to get a high rank which in turn helps them to get the job of their dream.",
    ],
    features: [
        {
            title: "Flexible Batches",
            description: "We have various batches running from 8 am to 9 pm, including weekend batches for working professionals."
        },
        {
            title: "Comprehensive Material",
            description: "The fee includes study material, class schedule, and lifetime access to free online/offline mocks for any competitive exam."
        },
        {
            title: "Expert-Prepared Mocks",
            description: "Our Online SSC Mock Tests are prepared by industry experts as per the latest SSC guidelines and are the best in the industry."
        }
    ],
    whySei: "At SEI CAMPUS the only thing that we have to offer is the ‘Best’ for our candidates as we never compromise with the quality of education we provide, which in turns keep us as a market leader in SSC.",
    learningOptions: {
        title: "Course Options",
        description: "We offer flexible learning options to suit your needs. If you are unable to visit us, we have prepared an exhaustive Online SSC Course. You can also order the complete course in a Pen Drive and study at your own pace.",
        options: [
            {
                title: "Online Course",
                description: "Learn from anywhere with our comprehensive online materials."
            },
            {
                title: "Pen Drive Course",
                description: "Study offline at your own pace with our complete course on a pen drive."
            }
        ]
    },
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "5,000" },
            { name: "Tuition Fee", amount: "24,000" }
        ],
        total: "29,000",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 5000 is non-refundable."
        ]
    }
  },
  "jee-mains": { 
    name: "JEE (Main+Advanced) 2025-26",
    image: "https://placehold.co/800x600.png",
    alt: "JEE Preparation",
    aiHint: "engineering students studying",
    intro: "SEI ensures to provide quality education for the optimum results and success of students, so far, we have acquired remarkable selection ratios in competitive exams.",
    description: ["SEI has long been distinguished for providing the Best Classroom Coaching, Online Learning Facility and getting excellent results. The curriculum is specifically designed for the JEE 2027 aspirants along with their 11th & Board preparations. To strengthen the foundation, conceptual knowledge and enhance the academic skills this course is the best option. The course helps the aspirants with better understanding of the examination pattern and ensure their success in the JEE with ease through a year-long curriculum."],
    highlights: [
        "Structured Academic Planner for JEE 2027.",
        "Complete Syllabus Coverage of Class 11th.",
        "Printed Study Material & Daily Practice Sheets.",
        "Free Access to SEI Learning App for conceptual revision of Syllabus.",
        "One on One doubt solving support & Regular Test facility.",
        "Until the 10th board exams, classes will be conducted online and will include board preparation lectures. The offline classes will start from 2nd April,2025",
        "18000+ Questions Practice accessible in both Online and Offline mode",
        "35+ Test Papers Will Conduct for Practice."
    ],
    programs: {
        title: "Our JEE Programs",
        items: [
            {
                title: "Regular Yearlong Classroom Program",
                description: "Our classroom programs are very interactive and are designed with such proficiency that no extra study material is needed to achieve your desired success in JEE."
            },
            {
                title: "Topic wise DPPs and Question Bank",
                description: "Focuses on boosting confidence of students for facing National Level competitive exams by providing subject wise and topic wise questions with solutions."
            },
            {
                title: "SEI Online Test Series",
                description: "Online Test Series (OTS) is designed according to JEE Main + Advanced pattern that stimulates the actual examination environment and provides an opportunity to revise every concept thoroughly."
            }
        ]
    },
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "15,000" },
            { name: "Tuition Fee (1st Year)", amount: "140,000" },
        ],
        total: "155,000",
        total_2: "300,000",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 15,000 is non-refundable."
        ]
    }
   },
  "boards": { 
    name: "Class X & XII Boards (CBSE, ICSE, UP)",
    image: "https://placehold.co/800x600.png",
    alt: "Students in a classroom",
    aiHint: "students classroom exam",
    intro: "Excel in your board exams with our comprehensive coaching for UP, CBSE, and ICSE students. Build a strong foundation and achieve outstanding results.",
    description: ["Our board preparation course is designed to provide students with a thorough understanding of the syllabus for CBSE, ICSE, and UP boards. We focus on clearing fundamental concepts, providing extensive practice, and conducting regular assessments to ensure students are well-prepared to score high marks in their final examinations."],
    features: [
        { title: "Multi-Board Curriculum", description: "Specialized coaching tailored for UP, CBSE, and ICSE board patterns, covering the complete syllabus for each." },
        { title: "Expert Faculty", description: "Learn from experienced teachers who have a deep understanding of board exam requirements and marking schemes." },
        { title: "Focused Practice", description: "Receive comprehensive study materials, practice questions, and previous year paper analysis to master every topic." },
        { title: "Regular Assessments", description: "Weekly and monthly tests to track progress, simulate exam conditions, and identify areas for improvement." },
    ],
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "1,500" },
            { name: "Tuition Fee", amount: "32,400" },
        ],
        total: "33,900",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 1,500 is non-refundable."
        ]
    }
  },
  "neet": { 
    name: "NEET (PRE-MEDICAL) 2025-26",
    image: "https://placehold.co/800x600.png",
    alt: "NEET Preparation",
    aiHint: "medical students doctor",
    intro: "SEI ensures to provide quality education for the optimum results and success of students, so far, we have acquired remarkable selection ratios in competitive exams.",
    highlights: [
        "Structured Academic Planner for NEET 2027.",
        "Complete Syllabus Coverage of Class 11th.",
        "Printed Study Material & Daily Practice Sheets.",
        "Free Access to SEI Learning App for conceptual revision of Syllabus.",
        "One on One doubt solving support & Regular Test facility.",
        "Until the 10th board exams, classes will be conducted online and will include board preparation lectures. The offline classes will start from 2nd April,2025",
        "18000+ Questions Practice accessible in both Online and Offline mode",
        "35+ Test Papers Will Conduct for Practice."
    ],
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "15,000" },
            { name: "Tuition Fee (1st Year)", amount: "120,000" },
        ],
        total: "135,000",
        total_2: "270,000",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 15,000 is non-refundable."
        ]
    }
  },
  "bank": {
    name: "BANK",
    image: "https://placehold.co/800x600.png",
    alt: "Banking and Finance",
    aiHint: "banking finance success",
    intro: "If you're an individual looking for growth and success, the banking sector is for you. When you think about a career in banking, think about collaborating with SEI. After all, the best careers require the best guidance.",
    description: ["Financial institutions are a prime opportunity for students, as this is an industry that always shows growth. If you have the capability of being trustworthy and you attain a sense of responsibility, the banking sector is for you."],
    features: [
        { title: "Interactive & Tech Enabled Classrooms", description: "Engage in dynamic learning with our state-of-the-art classroom technology." },
        { title: "Exam Before Exam", description: "Experience real exam conditions with our frequent mock tests to build confidence." },
        { title: "Extraordinary Performance Analysis", description: "Receive detailed feedback and analysis to identify your strengths and weaknesses." },
        { title: "Elaborated Content", description: "Access comprehensive and meticulously curated study materials covering the entire syllabus." }
    ],
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "1,500" },
            { name: "Tuition Fee", amount: "80,000" },
        ],
        total: "81,500",
        duration: "6 Months",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 1,500 is non-refundable."
        ]
    }
  },
  "up-police": { 
    name: "UP POLICE",
    image: "https://placehold.co/800x600.png",
    alt: "UP Police",
    aiHint: "police training law",
    intro: "Prepare to serve and protect. Our UP Police coaching program is designed to build the physical and mental strength required to excel in the demanding law enforcement recruitment process.",
    description: ["SEI provides comprehensive training for the UP Police entrance exam, covering all aspects of the selection process. From written exams to physical fitness tests, our expert faculty will guide you every step of the way to ensure you are fully prepared to join the force."],
    features: [
        { title: "Interactive & Tech Enabled Classrooms", description: "Engage in dynamic learning with our state-of-the-art classroom technology and modern teaching aids." },
        { title: "Exam Before Exam", description: "Experience real exam conditions with our frequent mock tests to build confidence and improve time management." },
        { title: "Extraordinary Performance Analysis", description: "Receive detailed feedback and in-depth analysis of your performance to identify your strengths and weaknesses." },
        { title: "Elaborated Content", description: "Access comprehensive and meticulously curated study materials covering the entire syllabus for the UP Police exam." }
    ],
    fees: {
        title: "Fee Structure",
        items: [
            { name: "Admission + Kit Fee", amount: "1,500" },
            { name: "Tuition Fee", amount: "48,500" },
        ],
        total: "50,000",
        duration: "6 Months",
        info: [
            "EMI option available with 0% interest rate.",
            "Admission + Kit Fee of 1,500 is non-refundable."
        ]
    }
  }
};
