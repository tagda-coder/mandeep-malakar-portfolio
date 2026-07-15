import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'mandeepmalakar710@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Mandeep, I am reaching out to you because...',

    oldPortfolio:
        'https://github.com/tagda-coder/',

    resumeUrl: '/resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/tagda-coder/' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/mandeep-malakar-286939250/',
    },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'shadcn/ui', icon: '/logo/shadcnui.svg' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
        { name: 'Three.js', icon: '/logo/threedotjs.svg' },
        { name: 'React Three Fiber', icon: '/logo/threedotjs.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Mongoose', icon: '/logo/mongoose.svg' },
        { name: 'JWT', icon: '/logo/jsonwebtokens.svg' },
        { name: 'Redis', icon: '/logo/redis.svg' },
        { name: 'Socket.io', icon: '/logo/socketdotio.svg' },
    ],
    mobile: [
        { name: 'React Native', icon: '/logo/react.png' },
        { name: 'Capacitor', icon: '/logo/capacitor.svg' },
        { name: 'Android', icon: '/logo/android.svg' },
    ],
    'linux & security': [
        { name: 'Bash', icon: '/logo/gnubash.svg' },
        { name: 'Python', icon: '/logo/python.svg' },
        { name: 'Linux', icon: '/logo/linux.svg' },
    ],
    'cloud & devops': [
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'Vercel', icon: '/logo/vercel.svg' },
        { name: 'Render', icon: '/logo/render.svg' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Postman', icon: '/logo/postman.svg' },
        { name: 'ImageKit', icon: '/logo/imagekit.svg' },
        { name: 'Cloudinary', icon: '/logo/cloudinary.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'MoodCut Studio',
        slug: 'moodcut-studio',
        liveUrl: 'https://moodcut-studio.vercel.app',
        year: 2026,
        description: `
      Built a full-stack portfolio and client-acquisition website for a video editor & motion designer, showcasing cinematic edits, testimonials, and project stats to convert visitors into clients. <br/> <br/>

      Key Features:<br/>
<ul>
  <li>🎬 Cinematic Hero: Bold typography-driven landing section with animated stats (views, projects, client retention)</li>
  <li>📽️ Featured Showreel: Embedded video player highlighting the editor's best work</li>
  <li>🗂️ Filterable Portfolio: Category-based project gallery (Motion Graphics, Clean Edits, Talking Head, Documentary)</li>
  <li>⭐ Testimonials Wall: Client reviews with ratings pulled dynamically from the database</li>
  <li>📩 Contact & Booking: Discovery-call booking and a message form wired to email delivery</li>
</ul><br/>


      Technical Highlights:
<ul>
  <li>Built a MERN stack backend to manage projects, testimonials, and media uploads</li>
  <li>Integrated Cloudinary for optimized video/image storage and delivery</li>
  <li>Used Formspree for reliable contact-form submissions without a custom mail server</li>
  <li>Designed a fully responsive, dark cinematic UI with React</li>
</ul>

      `,
        role: `
      Full-Stack Developer <br/>
Built the project end-to-end for a real client (video editor):
<ul>
  <li>🎨 Designed and developed the entire UI in React with a custom cinematic theme</li>
  <li>🛠️ Built the MERN backend (Node.js, Express, MongoDB) to manage portfolio content and testimonials</li>
  <li>☁️ Integrated Cloudinary for media asset management</li>
  <li>📩 Set up Formspree for contact form handling</li>
  <li>🚀 Deployed the site live on Vercel for the client</li>
</ul>

      `,
        techStack: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'Cloudinary',
            'Formspree',
        ],
        thumbnail: '/projects/thumbnail/moodcut-studio.png',
        longThumbnail: '/projects/long/moodcut-studio.png',
        images: [
            '/projects/images/moodcut-studio-1.png',
            '/projects/images/moodcut-studio-2.png',
            '/projects/images/moodcut-studio-3.png',
        ],
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'React js Developer Intern ',
        company: 'eTechno Lab',
        duration: 'Mar 2025 - Aug 2025',
    },
];
