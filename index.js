import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

let posts = [
  {
    id: 1,
    title: "Exploring the Future of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) continues to disrupt the traditional financial industry. By eliminating intermediaries, DeFi promises more accessible and transparent financial services. This post explores the latest trends, challenges, and the future of DeFi, including its potential impact on global financial systems.",
    author: "Alex Thompson",
    date: "2023-09-01T10:00:00Z",
  },
  {
    id: 2,
    title: "AI's Role in Transforming Global Industries",
    content:
      "Artificial Intelligence (AI) is at the forefront of technological innovation, driving significant changes across various sectors. This article delves into how AI is enhancing decision-making processes, automating complex tasks, and paving the way for new business models in industries ranging from healthcare to finance.",
    author: "Mia Williams",
    date: "2023-09-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Adopting a Sustainable Lifestyle: A Comprehensive Guide",
    content:
      "As climate change becomes a more pressing issue, the need for sustainable living is increasingly recognized. This post provides actionable tips on how to reduce your carbon footprint, make eco-friendly choices, and support sustainability in your daily life.",
    author: "Samuel Green",
    date: "2023-09-10T09:15:00Z",
  },
  {
    id: 4,
    title: "The Future of Renewable Energy",
    content:
      "Renewable energy sources, such as solar and wind, are becoming more prevalent. This post discusses the future of renewable energy, the challenges facing the industry, and the potential benefits for global energy sustainability.",
    author: "Jessica Lee",
    date: "2023-09-15T08:00:00Z",
  },
  {
    id: 5,
    title: "Blockchain Beyond Cryptocurrency",
    content:
      "While blockchain technology is best known for supporting cryptocurrencies, its applications extend far beyond digital currencies. This article explores the various use cases of blockchain, including supply chain management, voting systems, and secure data sharing.",
    author: "Michael Brown",
    date: "2023-09-20T12:45:00Z",
  },
  {
    id: 6,
    title: "Mental Health in the Digital Age",
    content:
      "The rise of digital technology has brought both opportunities and challenges for mental health. This post examines the impact of social media, telemedicine, and digital therapy tools on mental health, and offers strategies for maintaining well-being in a connected world.",
    author: "Emily Clark",
    date: "2023-09-25T11:30:00Z",
  },
  {
    id: 7,
    title: "The Rise of Smart Cities",
    content:
      "Smart cities are emerging as a solution to urban challenges such as traffic congestion, pollution, and resource management. This post discusses the technologies behind smart cities, their benefits, and the potential for improving the quality of urban life.",
    author: "David Johnson",
    date: "2023-10-01T09:00:00Z",
  },
  {
    id: 8,
    title: "Quantum Computing: Revolutionizing Technology",
    content:
      "Quantum computing promises to revolutionize technology with its ability to solve complex problems at unprecedented speeds. This article explores the current state of quantum computing, its potential applications, and the challenges that remain in making it mainstream.",
    author: "Sarah Miller",
    date: "2023-10-05T15:00:00Z",
  },
  {
    id: 9,
    title: "The Ethics of Artificial Intelligence",
    content:
      "As AI becomes more integrated into our lives, ethical considerations become increasingly important. This post explores the ethical dilemmas surrounding AI, including issues of privacy, bias, and the potential for AI to replace human jobs.",
    author: "James Wilson",
    date: "2023-10-10T13:00:00Z",
  },
  {
    id: 10,
    title: "5G Technology: Impact on Connectivity and Beyond",
    content:
      "5G technology is set to transform how we connect to the internet, with faster speeds and lower latency. This post examines the impact of 5G on industries such as healthcare, entertainment, and transportation, and the potential challenges in its rollout.",
    author: "Olivia Martinez",
    date: "2023-10-15T10:00:00Z",
  },
  {
    id: 11,
    title: "The Importance of Cybersecurity in the Modern World",
    content:
      "With increasing digitalization, cybersecurity has become a critical concern for individuals and organizations alike. This article discusses the latest trends in cybersecurity, common threats, and strategies to protect sensitive information.",
    author: "Daniel Thompson",
    date: "2023-10-20T11:00:00Z",
  },
  {
    id: 12,
    title: "The Evolution of E-Commerce",
    content:
      "E-commerce has evolved rapidly over the past decade, driven by technological advancements and changing consumer behavior. This post explores the current trends in e-commerce, including the rise of mobile shopping, personalized experiences, and the role of AI in driving sales.",
    author: "Sophia Taylor",
    date: "2023-10-25T14:00:00Z",
  },
  {
    id: 13,
    title: "Advancements in Healthcare Technology",
    content:
      "Technology is transforming healthcare, with innovations such as telemedicine, wearable devices, and AI-driven diagnostics. This article examines the impact of these advancements on patient care, the challenges in adopting new technologies, and the future of healthcare.",
    author: "Andrew White",
    date: "2023-11-01T09:30:00Z",
  },
  {
    id: 14,
    title: "The Role of Big Data in Business Decision Making",
    content:
      "Big data is reshaping how businesses make decisions, offering insights that were previously impossible to obtain. This post explores the role of big data in modern business, the tools used for data analysis, and the challenges in managing and interpreting large datasets.",
    author: "Emma Harris",
    date: "2023-11-05T10:45:00Z",
  },
  {
    id: 15,
    title: "Renewable Energy Technologies: Current Trends and Future Prospects",
    content:
      "Renewable energy technologies are advancing rapidly, with new innovations driving efficiency and reducing costs. This post discusses the latest trends in renewable energy, including advancements in solar, wind, and battery storage technologies.",
    author: "William Green",
    date: "2023-11-10T12:00:00Z",
  },
  {
    id: 16,
    title: "Exploring the Metaverse: The Future of Digital Interaction",
    content:
      "The metaverse represents the next frontier in digital interaction, combining virtual reality, augmented reality, and the internet into a single immersive experience. This post explores the concept of the metaverse, its potential applications, and the challenges in making it a reality.",
    author: "Isabella Brown",
    date: "2023-11-15T11:15:00Z",
  },
  {
    id: 17,
    title: "The Impact of Automation on the Workforce",
    content:
      "Automation is transforming industries by increasing efficiency and reducing costs, but it also poses challenges for the workforce. This article examines the impact of automation on jobs, the skills needed for the future, and strategies for adapting to a rapidly changing job market.",
    author: "Liam Davis",
    date: "2023-11-20T10:00:00Z",
  },
  {
    id: 18,
    title: "Climate Change: Understanding the Science and Solutions",
    content:
      "Climate change is one of the most pressing issues of our time, with far-reaching consequences for the planet. This post explains the science behind climate change, the potential impacts, and the solutions that can help mitigate its effects.",
    author: "Charlotte Wilson",
    date: "2023-11-25T14:30:00Z",
  },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

//get a specific post by id
app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const findPost = posts.find((post) => post.id === id);
  if (!findPost) {
    return res.status(404).json({ message: "Post not found" });
  } else {
    res.json(findPost);
  }
});

//post a new post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date()
  };
  posts.push(newPost);
  res.json(newPost);
});

//patch a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const existingPost = posts.find((post) => post.id === id);
  if (!existingPost){
    return res.status(404).json({error: `No post with ID ${id} found. No posts were updated`})
  } else {
    const replacementPost = {
    id: id,
    title: req.body.title || existingPost.title,
    content: req.body.content || existingPost.content,
    author: req.body.author || existingPost.author,
    date: req.body.date || existingPost.date
  };

  const searchIndex = posts.findIndex((post) => post.id == id);
  posts[searchIndex] = replacementPost;
  res.json(replacementPost);
  } 

});

//delete a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchIndex = posts.findIndex((post) => post.id === id);
  if (searchIndex > -1){
    posts.splice(searchIndex, 1)
    res.sendStatus(200);
  } else {
    return res.status(404).json({error: `No post with ID ${id} found. No posts were deleted`})
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});