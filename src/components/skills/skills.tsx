import React, { useState, useEffect } from 'react';
import { SkillProps } from './skills.types';

export const Skills = ({ skills }: SkillProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
      {isLoggedIn ? (
        <button> Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </ul>
  );
};
