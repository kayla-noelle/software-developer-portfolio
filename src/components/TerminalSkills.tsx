import { useState, useEffect, type JSX } from "react";

interface TerminalStep {
  command: string;
  output: string[];
}

const terminalSteps: TerminalStep[] = [
  { command: "ls skills/", output: ["JavaScript", "React", "Next.js"] },
  { command: "cat skills.txt", output: ["HTML5", "Figma", "GraphQL"] },
];

// Correct arrow function component
export const TerminalSkills = (): JSX.Element => {
  const [lines, setLines] = useState<string[]>([]);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [typingCommand, setTypingCommand] = useState<boolean>(true);

  useEffect(() => {
    const step = terminalSteps[stepIndex];
    if (!step) return;

    const currentText = typingCommand ? step.command : step.output.join("  ");

    if (charIndex < currentText.length) {
      const newLine = lines[lines.length - 1] || "";
      setLines([...lines.slice(0, -1), newLine + currentText[charIndex]]);

      //need to find audio file for terminal typing sound
      const audio = new Audio("");
      audio.volume = 0.05;
      audio.play().catch(() => {});

      setCharIndex(charIndex + 1);
    } else {
      if (typingCommand) {
        setLines([...lines, ""]);
        setCharIndex(0);
        setTypingCommand(false);
      } else {
        setTimeout(() => {
          setLines([]); // Clear lines for next step
          setStepIndex((stepIndex + 1) % terminalSteps.length);
          setCharIndex(0);
          setTypingCommand(true);
        }, 1500);
      }
    }

    const timeout = setTimeout(() => {}, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, typingCommand, lines, stepIndex]);

  return (
    <div className="terminal-box p-4 bg-black font-mono rounded-md w-full max-w-lg mx-auto">
      {lines.map((line, idx) => {
        const isCurrentLine = idx === lines.length - 1;
        return (
          <div key={idx}>
            {line && <span className="command-text">➜ </span>}
            <span className={typingCommand && isCurrentLine ? "command-text" : "output-text"}>
              {line}
            </span>
            {isCurrentLine && <span className="blink cursor">|</span>}
          </div>
        );
      })}
    </div>
  );
};
