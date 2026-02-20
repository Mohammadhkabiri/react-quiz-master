**🧠 Pro-React Quiz App**
A sophisticated, interactive quiz application built with React.js that demonstrates advanced state management, component lifecycle control, and polished UI/UX principles. This project was developed as part of a deep-dive into React's core and advanced hooks.

**🚀 Features**
Dynamic Quiz Flow: Seamlessly transitions between questions with real-time state updates.

Intelligent Timer: A custom-built QuizTimer component that tracks time per question and automatically skips to the next one upon timeout.

Answer Shuffling: Utilizes useRef and smart logic to ensure answer options are randomized for every session without losing state during re-renders.

Visual Feedback: Instant UI feedback for selected, correct, and incorrect answers using CSS transitions.

Detailed Analytics: A comprehensive Summary screen providing:

Percentage of skipped, correct, and incorrect answers.

A question-by-question breakdown of the user's performance.

Responsive & Animated UI: Features a premium purple-themed interface with SVG backgrounds and smooth keyframe animations.

**🛠 Tech Stack**
Framework: React.js (Functional Components & Hooks).

State Management: useState, useCallback, and useRef.

Styling: Pure CSS3 (including Flexbox, Gradients, and Animations).

Build Tool: Vite.

**🏗 Key Architectural Concepts**
1. Component Lifecycle & Keys

The project uses the key prop strategically to reset component states (like the timer) when moving to a new question, ensuring a clean "remount" rather than a simple update.

2. Memoization & Optimization

Functions like handleSelectAnswer are wrapped in useCallback to prevent unnecessary re-renders and maintain stable references for child components.

3. Data Immutability

Ensures the original question set remains untouched by creating copies of arrays before performing operations like sorting or shuffling.

**🚦 Getting Started**
Clone the repository:

Install dependencies:

Run the development server:

**📝 Project Structure**
src/components/Quiz.jsx: The main logic container.

src/components/QuizTimer.jsx: The countdown progress bar logic.

src/components/Answers.jsx: Handles shuffling and styling of options.

src/components/Summary.jsx: Calculates and displays final results.

src/questions.js: The dataset for quiz content.
