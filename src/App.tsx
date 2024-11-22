import banner from './banner-zen3.png';
import './App.css'; // Import the CSS file
import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'agent-id': string };
    }
  }
}

const App: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={banner} className="App-logo" alt="logo" />
        </div>
      </header>
      <div className="content-container container">
        <h1>NVC Coach: Your AI Partner in Nonviolent Communication</h1>
        <div className="audio-container">
          <audio controls>
            <source src="https://alexeinovak.com/audio/nvc.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <span>Listen to a short overview of NVC Coach</span>
        </div>
        <p>
          Nonviolent Communication (NVC) is more than just a method of speaking — it’s a way of creating deeper, more meaningful connections with others. At NVC Coach, we harness the latest in conversational AI technology to provide personalized guidance and support as you develop your NVC skills. Whether you’re a beginner or an experienced practitioner, our AI is here to help you grow.
        </p>
        <h2>Customized Learning for Every Level</h2>
        <p>
          When you first start with NVC Coach, the AI will get to know your familiarity with Nonviolent Communication. If you're new to NVC, don’t worry — we start by explaining the core principles, such as empathy, observations without judgments, identifying needs, and making requests. For those who already have experience with NVC, the AI jumps right in, ready to answer your specific questions and dive into more advanced aspects.
        </p>
        <h2>Interactive Practice and Do-Overs</h2>
        <p>
          A standout feature of NVC Coach is the opportunity to practice real-life situations through "do-overs." Have you ever walked away from a conversation wishing you could try again? With NVC Coach, you can do just that. The AI will role-play the other side of a contentious situation, allowing you to "do over" the interaction with a focus on applying NVC principles. You’ll receive coaching and constructive feedback, helping you understand the impact of your words and refine your skills.
        </p>
        <h2>For Experimental and Evaluation Purposes</h2>
        <p>
          Please note that NVC Coach is currently offered for experimental and evaluation purposes only. The AI software from ElevenLabs that is used
          under the covers is currently pretty buggy, and I'm hopeful that will improve soon. We encourage you to use this app as a supportive tool for learning, reflection, and skill-building, but it is not a replacement for professional therapy or certified NVC training. This software should not be relied on or used when someone really needs an NVC coach.
        </p>
        <p>
          You can find the sourcecode to this application <a href="https://github.com/Alexei-Novak/nvc-coach">on github here</a>, along with instructions on how to customize
          this for your own use. It is my hope that this application will be useful to others looking to experiment with or incorporate the latest advances in conversational AI into their own NVC dreams.
          Comming soon: An article on Medium about NVC Coach.
        </p>
        <h1>&nbsp;</h1>
        <h1>&nbsp;</h1>
      </div>
      <footer>
        <div className="container">
          <p>&copy; 2023 NVC Coach</p>
        </div>
      </footer>
      <elevenlabs-convai agent-id="4eiainruHyTRvO0uRhMT">
      </elevenlabs-convai>
    </div>
  );
}

export default App;