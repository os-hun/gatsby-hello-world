import React from 'react';
import { Link } from 'gatsby';

export default function About() {
  return (
    <div style={{color: 'teal'}}>
      <h1>About Gatsby</h1>
      <p>Such now. Very React.</p>
      <Link to="/">Home</Link>
    </div>
  )
}