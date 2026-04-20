export const portfolioData = {
  name: "Swapnil Lahiri",
  role: "AI / ML Engineer",
  tagline: "Building Intelligent Systems From The Ground Up",
  summary:
    "AI/ML-focused CS student at KIIT (8.66 CGPA) passionate about building real systems from scratch — from neural nets to computer vision pipelines to real-time multiplayer AI arenas.",
  email: "swapnil240805@gmail.com",
  phone: "+91 9875464185",
  location: "Bhubaneshwar, India",
  github: "https://github.com/Swap-24",
  linkedin: "https://linkedin.com/in/swapnil-lahiri260723345",

  stats: [
    { value: 8.66, suffix: "", label: "CGPA at KIIT" },
    { value: 5,    suffix: "+", label: "Major Projects" },
    { value: 3,    suffix: "+", label: "Years Building" },
    { value: 10,   suffix: "+", label: "Technologies" },
  ],

  projects: [
    {
      id: "argus",
      date: "03 / 2026",
      name: "Argus — AI Debate Arena",
      description:
        "Real-time multiplayer debate platform where two players go head-to-head, scored live by AI across four argument quality dimensions.",
      bullets: [
        "Real-time sync via Socket.io with server-authoritative state",
        "AI argument scoring across 4 dimensions using HuggingFace models",
        "Live fallacy detection — ad hominem, straw man, false dichotomy",
        "INTERJECT system — chargeable ultimate ability for power players",
        "Spectator mode to watch any live debate without participating",
      ],
      tags: ["React 19", "Node.js", "Socket.io", "FastAPI", "HuggingFace", "SQLite"],
      featured: true,
      accent: "accent2",
    },
    {
      id: "knowbot",
      date: "04 / 2026",
      name: "KnowBot — RAG Research Chatbot",
      description:
        "Agentic RAG-based Q&A system for research PDFs with semantic search, citation-backed answers, and self-evaluation to reduce hallucinations.",
      bullets: [
        "LangGraph pipeline with dynamic routing & memory",
        "Faithfulness scoring to reduce hallucinations",
        "Streamlit app with persistent chat and real-time querying",
      ],
      tags: ["LangGraph", "LangChain", "ChromaDB", "LLaMA 3.1", "Groq API", "Streamlit"],
      featured: false,
      accent: "accent",
    },
    {
      id: "attendance",
      date: "09 / 2025",
      name: "Face Recognition Attendance",
      description:
        "Real-time face recognition system for rural schools — automated attendance using a custom-trained YOLO model and facial encoding pipeline.",
      bullets: [
        "Custom YOLO model trained for student detection",
        "Facial encoding + similarity matching pipeline",
        "Complete Flask backend with Supabase / PostgreSQL",
      ],
      tags: ["OpenCV", "YOLO", "dlib", "Flask", "PostgreSQL", "Supabase"],
      featured: false,
      accent: "accent",
    },
    {
      id: "hough",
      date: "02 / 2026",
      name: "Hough Lane Detection — Scratch",
      description:
        "Full Canny Edge Detection + Hough Transform pipeline built with zero pre-built CV modules — purely NumPy and mathematics.",
      bullets: [
        "Manual convolution via np.lib.stride_tricks",
        "Hough parameter space analysis for dominant lane extraction",
        "ROI trapezoid masking and angle-based filtering",
      ],
      tags: ["Python", "NumPy", "Matplotlib"],
      featured: false,
      accent: "accent",
    },
    {
      id: "rune",
      date: "10 / 2025",
      name: "Rune Tales — Turn-Based RPG",
      description:
        "Roguelike turn-based RPG built in Unity with AI-generated voice narration via MURF AI API.",
      bullets: [
        "Pokémon-style combat system with roguelike progression",
        "AI-generated voice-overs for narrative immersion",
      ],
      tags: ["Unity", "C#", "MURF API"],
      featured: false,
      accent: "accent",
    },
  ],

  skillGroups: [
    {
      label: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C#", "SQL", "Lua"],
    },
    {
      label: "Machine Learning & AI",
      skills: ["Scikit-learn", "TensorFlow", "HuggingFace", "LangChain", "LangGraph", "RAG", "Groq API", "Gemini"],
    },
    {
      label: "Computer Vision",
      skills: ["OpenCV", "YOLO", "dlib", "face_recognition", "Canny (scratch)", "Hough (scratch)", "NumPy"],
    },
    {
      label: "Web & Deployment",
      skills: ["React", "Next.js", "Node.js", "Flask", "FastAPI", "Socket.io", "PostgreSQL", "Supabase", "Railway"],
    },
    {
      label: "Dev Tools",
      skills: ["Git / GitHub", "VSCode", "Jupyter", "Google Colab", "Tableau", "Excel", "Streamlit"],
    },
    {
      label: "Languages",
      skills: ["Bengali (Native)", "English (C2)", "Hindi (C2)"],
    },
  ],

  education: [
    {
      year: "2023 – 2027 (Expected)",
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      location: "Bhubaneshwar, Odisha",
      detail: "CGPA: 8.66 · Completed 5th Semester · Focus: AI, ML, OS, Data Structures",
    },
    {
      year: "Passed 2023",
      degree: "Higher Secondary Diploma (CBSE)",
      institution: "South Point High School",
      location: "Kolkata",
      detail: "Secondary: 93.8% · Higher Secondary: 83%",
    },
  ],

  certifications: [
    {
      period: "Aug – Nov 2025",
      name: "Complete Data Science, ML, DL, NLP Bootcamp (99hrs)",
      issuer: "Udemy · Instructor: Krish Naik",
    },
    {
      period: "Apr – Aug 2025",
      name: "Machine Learning A-Z: AI, Python & R",
      issuer: "Udemy · SuperDataScience Team",
    },
    {
      period: "June 2025",
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia · Forage Platform",
    },
    {
      period: "Feb – Aug 2024",
      name: "Complete Web Development Bootcamp",
      issuer: "Udemy · Instructor: Angela Yu",
    },
    {
      period: "Nov 2023 – Jan 2024",
      name: "Complete Game Development with Unity & C#",
      issuer: "freeCodeCamp",
    },
  ],
};
