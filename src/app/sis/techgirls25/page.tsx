'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Footer from '../../components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[var(--bg-a)] items-center justify-items-center min-h-screen pb-8 gap-8 p-4 font-[family-name:var(--font-geist-sans)]">
      <Analytics />
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
          <div className="mb-6 mt-16 sm:mt-24 w-full max-w-2xl text-center leading-9">
            <h1 className="text-[var(--text-a)] font-black text-xl sm:text-2xl md:text-3xl">Farangis Abdivokhidova</h1>
            <h1 className="text-[var(--text-a)] mt-4 font-bold text-lg sm:text-xl md:text-2xl">TechGirls 2025 Application</h1>
            <p className='text-[var(--text-c)] mt-4 font-semibold text-xs sm:text-sm md:text-md'><a href='https://techgirlsglobal.org/overview/' rel='' target='_blank' className='underline hover:text-[var(--violet)]'>TechGirls</a> is an initiative of the U.S. Department of State&apos;s Bureau of Educational and Cultural Affairs.</p>
          </div>
          
          <div className="mt-16 w-full max-w-2xl text-start">
            <h1 className="text-[var(--text-a)] font-bold text-lg md:text-xl">Academic and Community Interest Information</h1>
          </div>

          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>What are the academic subjects you are most interested in?</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>Back in the 5th grade, I first became interested in learning English. Year by year, English gradually evolved into my primary language for communication, reading, and even writing. By the time I reached the 9th grade, I discovered that Architectural Design was truly fascinating. Having honed my drawing skills since childhood—just like my brothers, as if it were in our genetics—I decided to deepen my knowledge in mathematics, physics, and art at school. Each of these subjects plays a fundamental role in Architectural Design: math for precise measurements and scale, physics to calculate structural loads and material durability, and drawing to accurately sketch the architectural concepts.</p>
          </div>
          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>Please list in the space below any specific classes in which you have participated in the field of technology/ STEM.</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>I have not attended formal, structured STEM classes due to financial considerations. However, I have had the privilege of learning directly from my brother, a professional software engineer and AI specialist. He is the Founder and CEO at Open Community. They build Open Source AI-powered projects and tools for people. They also write comprehensive and step-by-step tutorials on those projects and share across socials like LinkedIn, Medium, Dev, and our Discord community. So anyone, whether he or she is a beginner, a professional developer, or just a tech enthusiast, has a chance to learn how to build real stuff with AI. By following these tutorials and engaging in the community, I have gained practical insights into programming, and AI without relying on costly courses.</p>
          </div>
          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>Please describe any extracurricular activities in which you have participated that relate to technology/ STEM, how long you have been involved with each, as well as any awards or honors received.</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>In early October, I decided to participate in the Technovision Girls program. Determined to bring a strong team together, I recruited several students and asked my brother—who was, in my eyes, a truly impressive “tech nerd”—to serve as our mentor. After brainstorming a few ideas, we developed an AI-powered platform designed to help doctors diagnose brain MRI scans more efficiently, affordably, and quickly. At the time, my brother was deepening his understanding of neuroscience, which proved invaluable when refining our initial prototypes and ultimately delivering a fully functional minimum viable product (MVP).</p>
            <p>This seven-month journey was both demanding and rewarding. The challenges we faced shaped my resilience, and I found the entire process genuinely enjoyable. After concluding that project, I chose to join Nobel Learning PBC to further enhance both my soft and hard skills within a collaborative international environment. During my time at Nobel, I had the opportunity to converse with emerging leaders from Europe, Africa, the Americas, and Asia. Their diverse perspectives pushed me to think more strategically, adopt a broader mindset, and consider long-term goals. I particularly enjoyed the Introduction to Design course, as it closely aligned with my aspirations and allowed me to explore avenues that resonate with my long-term career ambitions.</p>
          </div>
          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>Please describe any additional extracurricular/community activities (non-STEM related) in which you have participated, and how long you have been involved with each.</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>Although it is a bit common for people of my country to focus only on main subjects that help to get into university, as it is mostly required by the government, I enjoy doing some extra activities such as swimming, dancing and producing some pictures in my free time. Swimming and dancing, for obvious reasons, are fun and physically demanding, which makes me keep fit. Art, though, has to be the most important of them all, since it is for me not to see the beauty in everything, everywhere I go, let it be swimming, dancing or evenhard  just talking with people. However, I am specifically drawing small pieces of art like flowers, nature and ambient figures, all of which I keep in my copybook. All of these activities help me focus more on my main curriculum, and I always try to keep balance between them.</p>
          </div>
          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>Please list in the space below your plans for future studies and/or possible occupations you have considered.</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>In the short term, my primary goal is to graduate from high school with excellent grades. Afterward, I plan to achieve a strong overall IELTS score (8.0 or 9.0), since I am considering pursuing further education at prestigious universities in the United States, Singapore, China, and Korea. Studying at such renowned institutions would not only provide me with a high-caliber education but also place me in an environment surrounded by ambitious peers who have passed a rigorous selection process. This exposure would offer me valuable opportunities to develop leadership skills, allowing me to contribute actively to shaping the future rather than observing passively from the sidelines. As for my career interests, I find Architectural Design particularly captivating. When combined with the power of artificial intelligence, it presents the potential to create exceptionally innovative and unpredictable concepts. To gain inspiration, I frequently watch YouTube videos featuring cutting-edge architectural ideas. These resources motivate me to study harder, think creatively, and continuously experiment with new approaches. In the long term, I envision establishing my own company dedicated to offering AI-powered architectural designs. This venture would serve both individual clients (B2C) and larger businesses (B2B), ensuring a broad impact on the industry. Additionally, I am considering pursuing a Master&apos;s degree to further refine my expertise, deepen my understanding of architectural technologies, and ultimately become a leader in this evolving field.</p>
          </div>

          {/* next section */}

          <div className="mt-16 w-full max-w-2xl text-start">
            <h1 className="text-[var(--text-a)] font-bold text-lg md:text-xl">Essay Information</h1>
          </div>
          
          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>What, or who, initially sparked your interest in the field of technology/ STEM?</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>There are several reasons why participating in the TechGirls program holds immense value for me. First, it would allow me to engage with a diverse community of young girls from around the world, each bringing unique cultural perspectives and experiences. This international exchange would not only broaden my worldview but also foster a sense of global collaboration and understanding—skills that are increasingly important in our interconnected age. Academically, TechGirls offers a rare opportunity to deepen my STEM knowledge through hands-on workshops, mentorship, and exposure to advanced technological concepts. Gaining practical experience in areas such as programming, AI, or engineering would help me better connect classroom theory with real-world applications. This would ultimately enhance my problem-solving abilities and prepare me for future challenges in higher education. On a personal level, I aspire to improve my communication and leadership skills. By working in teams, pitching ideas, and participating in group projects, I can learn to articulate my thoughts more confidently, inspire others, and collaborate effectively. Strengthening these interpersonal skills will not only benefit my academic journey—making me a stronger, more curious student—but also shape me into a more empathetic, adaptable, and resourceful individual. In short, TechGirls would serve as a catalyst, enabling me to grow both intellectually and personally, while paving the way for a meaningful future in STEM.</p>
          </div>
          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>Describe a challenge you have faced and how you overcame it.</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>One of the biggest challenges I faced was during the Technovation Girls program, which lasted about seven months. I served as my team&apos;s Finance Manager, and at first, I felt really nervous because I had never managed money or made financial decisions before. My responsibilities included creating a budget, tracking our expenses, and making sure we had enough funds to develop our AI-powered platform for doctors. At times, I felt overwhelmed by the numbers and the pressure to keep our project on track. Thankfully, my mentor—who also happens to be my brother—stepped in to guide me. He&apos;s super knowledgeable about technology and business. Because, he was all around those things and startups over the last 2 years. He taught me how to think logically and make smarter choices. We also discovered different AI tools that helped us organize our data and speed up the whole process. By asking questions, listening to advice, and trusting myself, I slowly became more confident. In the end, overcoming this challenge showed me that I can handle tough responsibilities and grow as a problem-solver.</p>
          </div>
          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>One of the requirements of the program is that you apply the skills you learn in creating a unique follow-on project upon your return home. Describe how you would use the tech skills you gain from this program to design a follow-on project. How would it help your community?</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>After completing this program, I hope to use the new tech skills I learn to create a project that makes life better for people in my community, especially those facing serious health challenges. I&apos;ve always been interested in the healthcare field (thanks to my mother and brother), and I know it can be tough because medical issues are often complex. For example, two of my cousins are disabled. One has been this way since birth, and the other developed disabilities later. They cannot walk, talk, or do many of the everyday things we take for granted, and I&apos;ve seen how hard it is for them when they travel to Tashkent for treatment. By gaining essential skills in fields like computational neuroscience, I could work with international organizations that create advanced medical devices, maybe even something like Neuralink but more affordable and accessible here in Uzbekistan. With better tools and knowledge, I might help bring new technologies to Uzbekistan that allow people like my cousins to communicate more easily, learn new skills, and stay connected with their families and friends. This follow-on project would not just improve their quality of life, but also help build a stronger, more supportive healthcare community here at home.</p>
          </div>
          <div className="w-full max-w-3xl mx-auto text-sm md:text-md text-[var(--text-a)] flex flex-col items-start p-4 mb-8 gap-4 rounded-xl border border-[var(--ring)] focus:border-[var(--violet)]">
            <p>What are one or two words that describe you best and why?</p>
            <span className='w-full h-[0.05px] bg-[#625df5] bg-opacity-50'></span>
            <p>I would describe myself as both resilient and a creator. I&apos;m resilient because I spent seven long months working hard on a project through Technovision Girls, where my team and I developed an AI tool to help doctors. We had to learn new skills, meet tight deadlines, and solve problems we never imagined. Even when things got super stressful, I kept going, stayed focused, and learned to trust myself and my teammates. This experience made me realize that I can overcome challenges and grow stronger as I push through them. I&apos;m also a creator because I&apos;ve always been fascinated by Architectural Design. I love imagining new structures, sketching them out, and thinking about how they&apos;d look in real life. Whether I&apos;m doodling in my notebook or exploring new design software, I enjoy bringing fresh ideas to life. Being a creator allows me to combine art, technology, and my love of learning, which keeps my mind active and excited about the future. </p>
          </div>
          
      </main>
      <Footer />
    </div>
  );
}