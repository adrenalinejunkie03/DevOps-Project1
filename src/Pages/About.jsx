import React from 'react';

export default function About() {
  return (
    <div className="about-container">
      <h2>About This Application</h2>
      <p>
        Welcome to the <strong>React CRUD SPA</strong>! This application demonstrates core concepts of modern frontend development using:
      </p>

      <ul className="feature-list">
        <li>📦 <strong>React</strong> for building reusable UI components</li>
        <li>⚛️ <strong>React Router</strong> for dynamic, client-side routing</li>
        <li>📡 <strong>REST API</strong> integration using <code>fetch</code></li>
        <li>✏️ <strong>CRUD Operations</strong> (Create, Read, Update, Delete)</li>
        <li>🎨 <strong>Modern CSS</strong> for clean, responsive styling</li>
      </ul>

      <p>
        This project uses <strong>JSONPlaceholder</strong> as a fake REST API to simulate user data management. It's great for learning and prototyping frontend behavior without needing a backend.
      </p>

      <p>
        Built with ❤️ and React. Expand this app with authentication, pagination, animations, or full backend integration to take it further!
      </p>
    </div>
  );
}
