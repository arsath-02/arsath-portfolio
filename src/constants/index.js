import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  flsk,
  html,
  tensorflow,
  pytorch,
  scilearn,
  matplotlib,
  numpy,
  kubernetes,
  azure,
  pandas,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  code1,
  movie,
  shop,
  youtube,
  python,
  django,
  postgres,
  sql,
  next,
  vue,
  devops,
  liveLink,
  portfolio15,
  portfolio16,
  portfolio17,
  linktree,
  tiktok,
  ig,
  beeclone,
  smartrep,
  matrixai,
  zapflow,
  notable,
  java,
  c,
  fakenew,
  plantapp,
  cancer,
  dairy,
  coverletter,
  stock,
  image,
  turf,
  hotel,
  job,
  od,
  webscrapping,


} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
  {
    title: "DevOps Engineer",
    icon: devops,
  }
];
const technologies = {
  AIEngineer: [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "TensorFlow",
      icon: tensorflow, // Assuming you have an icon for TensorFlow
    },
    {
      name: "PyTorch",
      icon: pytorch, // Assuming you have an icon for PyTorch
    },
    {
      name: "Scikit-learn",
      icon: scilearn, // Assuming you have an icon for Scikit-learn
    },
    {
      name: "Pandas",
      icon: pandas, // Assuming you have an icon for Pandas
    },
    {
      name: "Numpy",
      icon: numpy, // Assuming you have an icon for Numpy
    },
    {
      name: "Matplotlib",
      icon: matplotlib, // Assuming you have an icon for Matplotlib
    },
  ],

  WebDeveloper: [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Flask",
      icon: flsk,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ],

  DevOpsEngineer: [
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Azure", // Assuming you have an icon for AWS
      icon: azure,
    },
    {
      name: "Kubernetes", // Assuming you have an icon for Kubernetes
      icon: kubernetes,
    },
    
  ],
};


const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Shine Logistics",
    icon: code1,
    iconBg: "#D1E8E2",
    date: "2024",
    points: [
      "Led the development of an AI-powered cover letter generator, integrating BART transformer models to deliver personalized, professional content for users.",
      "Built and deployed a user-friendly, full-stack web application with a Node.js backend, MongoDB database, and React frontend, optimizing for performance and scalability.",
      "Implemented secure file uploads and text extraction using Tesseract.js and pdf-parse, enabling accurate document processing for improved AI predictions.",
      "Streamlined authentication and user authorization with JSON Web Tokens (JWT), ensuring a secure and seamless user experience."
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I can't say enough good things about Jeff. He's a true team player who always puts the needs of the project first. If you're looking for a software engineer who can deliver results, Jeff is your guy.",
    name: "Halley Bennett",
    designation: "",
    company: "Hack Reactor",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
]
const imageProjects = [
  {
    id: 1,
    image: fakenew,
    url: "",
    title: "Fake News Detection",
    description: "",
  },
  {
    id: 2,
    image: plantapp,
    url: "",
    title: "Plant diease detection",
    description: "",
  },
  {
    id: 3,
    image: cancer,
    url: "",
    title: "Pancreatic Cancer Detection",
    description: "",
  },
  {
    id: 4,
    image: dairy,
    url: "https://milky-web02.netlify.app/",
    title: "E-commerce platform",
    description: "",
  },
  {
    id: 5,
    image: coverletter,
    url: "",
    title: "cover letter generator",
    description: "",
  },
  {
    id: 6,
    image: stock,
    url: "https://stock-price-prediction02.netlify.app/",
    title: "Amazon Stock Price Prediction",
    description: "",
  },
  {
    id: 7,
    image: image,
    url: "",
    title: "Ai image generator",
    description: "",
  },
  {
    id: 8,
    image: turf,
    url: "",
    title: "Turf booking app",
    description: "",
  },
  {
    id: 9,
    image: hotel,
    url: "",
    title: "Hotel Management System",
    description: "",
  },
  {
    id: 10,
    image: job,
    url: "",
    title: "Job Description Generator",
    description: "",
  },
  {
    id: 11,
    image: od,
    url: "",
    title: "College On-Duty System",
    description: "",
  },
  {
    id: 12,
    image: webscrapping,
    url: "",
    title: "Web Scrapper",
    description: "",
  }
  
];

const projects = [
  {
    name: "Fake News Detection",
    description:
      "This project is a Machine Learning model that detects fake news. It uses a Passive Aggressive Classifier to classify news articles as real or fake. The model is trained on a dataset of news articles and their labels, and it uses the TfidfVectorizer to convert the text data into numerical data for the model to process. The model is then evaluated using accuracy, precision, recall, and F1 score metrics.",
    tags: [
      {
        name: "BERT",
        color: "blue-text-gradient",
      },
      {
        name: "LTM",
        color: "green-text-gradient",
      },
      {
        name: "GRU",
        color: "pink-text-gradient",
      },
    ],
    image: fakenew,
    source_code_link: "https://github.com/arsath-02/fake_news_detection",
    liveUrl: "",
  },
  {
    name: "Plant diease detection",
    description:
      "This project is a Machine Learning model that detects plant diseases. It uses a Convolutional Neural Network (CNN) to classify images of plants as healthy or diseased. The model is trained on a dataset of images of plants and their labels, and it uses data augmentation to increase the size of the training set. The model is then evaluated using accuracy, precision, recall, and F1 score metrics.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: plantapp,
    source_code_link: "https://github.com/arsath-02/plant-app",
    liveUrl: "https://drive.google.com/file/d/195G2PyNv7WabclEgAeSCpf_Q8mAHOJ1t/view?pli=1",
  },
  {
    name: "Pancreatic Cancer Detection",
    description:
      "This project is a Machine Learning model that detects pancreatic cancer. It uses a Convolutional Neural Network (CNN) to classify images of pancreatic tissue as cancerous or non-cancerous. The model is trained on a dataset of images of pancreatic tissue and their labels, and it uses transfer learning to leverage pre-trained models for feature extraction. The model is then evaluated using accuracy, precision, recall, and F1 score metrics.",
    tags: [
      {
        name: "VGG16",
        color: "blue-text-gradient",
      },
      {
        name: "ResNet",
        color: "green-text-gradient",
      },
      {
        name: "InceptionV3",
        color: "pink-text-gradient",
      },
    ],
    image: cancer,
    source_code_link: "https://github.com/arsath-02/pancreatic_cancer_detection",
    liveUrl: "",
  },
  {
    name: "Dairy products E-commerce platform",
    description:
      "This project is a fullstack e-commerce platform for dairy products. It allows users to browse products, add them to their cart, and checkout. The platform includes features such as user authentication, product search, and order tracking. The platform is built using React.js, Node.js, MongoDB, and Tailwind CSS.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dairy,
    source_code_link: "https://github.com/arsath-02/Dairy-products-website",
    liveUrl: "https://milky-web02.netlify.app/",
  },
  {
    name: "AI Cover Letter Generator",
    description:
      "This project is an AI-powered cover letter generator. It uses a BART transformer model to generate personalized, professional cover letters for users. The model is trained on a dataset of cover letters and their labels, and it uses the Hugging Face Transformers library to fine-tune the model for text generation. The model is then deployed as a web application using Flask and React.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "GPT-2",
        color: "pink-text-gradient",
      },
    ],
    image: coverletter,
    source_code_link: "https://github.com/arsath-02/cover-letter-api",
    liveUrl: "",
  },
  {
    name: "Amazon Stock Price Prediction",
    description:
      "This project is a Machine Learning model that predicts the stock price of Amazon. It uses a Long Short-Term Memory (LSTM) network to forecast the future stock price based on historical data. The model is trained on a dataset of Amazon stock prices and their labels, and it uses the TensorFlow library to build and train the model. The model is then evaluated using mean squared error (MSE) and root mean squared error (RMSE) metrics.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "TLSTM",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/arsath-02/stock-price-prediction",
    liveUrl: "https://stock-price-prediction02.netlify.app/",
  },
  {
    name: "Ai image generator",
    description:
      "This project is an AI-powered image generator. It uses a Generative Adversarial Network (GAN) to create realistic images of faces. The model is trained on a dataset of face images and their labels, and it uses the PyTorch library to build and train the model. The model is then deployed as a web application using Flask and React.",
    tags: [
      {
        name: "Vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Stable-diffusion",
        color: "pink-text-gradient",
      },
    ],
    image: image,
    source_code_link: "https://github.com/arsath-02/text-to-image-generator",
    liveUrl: "",
  },
  {
    name: "Turf booking app",
    description:
      "This project is a turf booking app that allows users to book sports facilities. It includes features such as user authentication, facility search, and booking management. The app is built using React.js, Node.js, MongoDB, and Tailwind CSS.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: turf,
    source_code_link: "https://github.com/arsath-02/turf_booking_app",
    liveUrl: "",
  },
  {
    name: "Hotel Management System",
    description:
      "This project is a hotel management system that allows users to book rooms and manage reservations. It includes features such as user authentication, room search, and reservation management. The system is built using React Native, Node.js, Firebase.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/arsath-02/hotel-manager",
    liveUrl: "",
  },
  {
    name: "Job Description Generator",
    description:
      "This project is an AI-powered job description generator. It uses a GPT-2 transformer model to generate job descriptions based on user input. The model is trained on a dataset of job descriptions and their labels, and it uses the Hugging Face Transformers library to fine-tune the model for text generation. The model is then deployed as a web application using Flask and React.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Qwen-chat",
        color: "pink-text-gradient",
      },
    ],
    image: job,
    source_code_link: "https://github.com/arsath-02/job-description",
    liveUrl: "",
  },
  {
    name: "College On-Duty System",
    description:
      "This project is a college on-duty system that allows faculty members to manage their on-duty schedules. It includes features such as user authentication, on-duty request management, and schedule tracking. The system is built using React.js, Node.js, MongoDB, and Tailwind CSS.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: od,
    source_code_link: "https://github.com/RAGAV-24/OD-CLAIMER",
    liveUrl: "",
  },
  {
    name: "Web Scrapper",
    description:
      "This project is a web scrapper that extracts data from websites. It uses the BeautifulSoup library to parse HTML and extract information from web pages. The scrapper is built using Python and deployed as a web application using Flask.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: webscrapping,
    source_code_link: "https://github.com/arsath-02/web-scrapping",
    liveUrl: "",
  }
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  imageProjects,
};
