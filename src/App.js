import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Import logo
import logo from './assets/logo.png';

// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { GlobalStyles } from './components/Theme/GlobalStyles';
import { lightTheme, darkTheme } from './components/Theme/Themes';

// Styled components
const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 1000;
  text-align: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  color: #0ea5e9;
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
`;

const Section = styled.div`
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Numbered = styled.span`
  color: #0ea5e9;
  font-weight: 600;
`;


const App = () => {
  const [theme, setTheme] = useState(`light`);

  // Light and dark theme state toggler
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme}>
      <GlobalStyles/>
      <div>
        <Header theme={theme} toggleTheme={toggleTheme} />

        <Logo>
          <a href="https://cpkip.com/" target="_blank" rel="noreferrer"><img src={logo} alt="Logo"/></a>
        </Logo>
        
        <Title>CpK Interior Products Inc.</Title>

        <Section>
          <Heading>Introduction</Heading>
          <Text>
            CpK Interior Products is a company that provides assistance in designing automotive part manufacturing, tooling,
            moulding, assembly, sequencing, and more for companies, striving to become the leading interior automotive supplier in North America. 
            At the award-winning factory located in Guelph is where all of CpK assembly and sequencing takes place; 
            supplying the manufacturing corporation Stellantis which includes brands such as Chrysler, Dodge, and Jeep. 
            The ICT team is a big part of maintaining operation in the plant, managing and troubleshooting many of the hardware, 
            software, and networks required to keep assembly and sequencing running smoothly.
          </Text>
        </Section>

        <Section>
          <Heading>Goals</Heading>
          <Text>
            Heading into this position with the ICT team at CpK Interior products for a six-month term, I had several goals in mind, both personal and work related:
          </Text>

          <Text><Numbered>1.</Numbered>	Improve my critical and creative thinking skills such as problem solving</Text>
          <Text><Numbered>2.</Numbered>	Learn new technologies to improve my software or web development skills</Text>
          <Text><Numbered>3.</Numbered>	Be able to manage my time wisely to keep balance for work and personal hobbies</Text>
          <Text><Numbered>4.</Numbered>	Improve on my professional skills such as verbal and written communication, and teamwork</Text>

          <Text>
            Having almost two full work terms with the ICT team at CpK, I was able to complete all of my goals I set for myself. 
            The goal that was most important to me throughout my experience at CpK was number two, the goal to expand my knowledge on new technologies 
            and programming languages to improve my software or web development skills. Although the experience while working with the ICT team 
            focused a lot more on the technical aspects of computers, such as physical hardware of computers and printers or managing networking between devices, 
            I had the opportunity to develop an iOS application for the ICT team. Being able to learn on my own time, I was able to improve my programming abilities 
            and practices, along with communicating and implementing ideas the ICT team comes up with. 
          </Text>

        </Section>

        <Section>
          <Heading>Job Description</Heading>
          <Text>
            Working at CpK Interior Products in Guelph, I was a part of the ICT Team as an Information and Communications Technology Specialist. 
            The focus of my work was with the hardware and networking of computers, printers, servers and scanners at the manufacturing plant. 
            Through the ticketing system around the workplace and troubleshooting various problems with co-workers, I was able to gain a lot of valuable 
            knowledge of computer and networking systems. Most of the skills were new to me at the job, working with a variety of software and hardware 
            I had no prior knowledge of made the co-op experience much more interesting and eye-opening. I was also able to develop an iOS application on 
            my own time, working with React Native and Microsoft SQL server, and turned into the opportunity to implement ideas for the ICT team in both 
            Guelph and Port Hope! My app was able to help the team move towards a paperless future with certain checklists and forms! I learned how to better 
            communicate both verbally and written with my colleagues on the job, which was the main skill required for this position. 
            A unique aspect of the job was also learning how a manufacturing plant operates and getting an overview of how the backend system is setup for 
            the devices and workers. 
          </Text>
        </Section>

        <Section>
          <Heading>Conclusion</Heading>
          <Text>
           Overall, I had an amazing experience for my first Co-op work term throughout the course of six-months with the team and colleagues at CpK Interior Products! 
           Although my first step into the Computer Science industry was not what I hoped for in terms of software development, I gained a lot of valuable knowledge 
           from my colleagues in other aspects of computer hardware and software. I was able to learn and improve a lot of my technical skills from my colleagues, 
           along with being able to work on a variety of soft skills through communication, problem-solving, and collaboration. The relationships I was able to build 
           with the community at CpK was wonderful; meeting the nicest and most amazing people to have conversations and work with!
          </Text>
        </Section>

        <Section>
          <Heading>Acknowledgements</Heading>
          <Text>
            First, I want to show my greatest appreciation to my ICT Supervisor, Bang Vong, for giving me the opportunity to join the ICT team at CpK and providing 
            the main source of guidance throughout my work term. The vast knowledge and experience I was able to gain about the automotive industry, along with the 
            technical skills with computer hardware and software will go a long way for the future! I also want to express my gratitude to the rest of the ICT team 
            for providing their own knowledge and teaching me a variety of skills. The connection and experience I was able to build with the team was amazing, and 
            I am very grateful for their inspiring words, jokes, and free meals to create such a welcoming environment!  
          </Text>
        </Section>

        <Footer/>

      </div>
    </ThemeProvider>
  );
}

export default App;
