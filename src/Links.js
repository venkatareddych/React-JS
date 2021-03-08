import React from 'react';
import { Link } from "react-router-dom";

export function Links() {
  return (
    <div className="links">

      <div className="link">
        <Link to="/LCC">LifeCycleComponent</Link>
        <br />
        <Link to="/movies">Movies</Link>
        <br />
        <Link to="/cal">Calculator</Link>
        <br />
        <Link to="/Parent-To-Child">ParentToChild</Link>
        <br />
        <Link to="/Child-To-Parent">ChildToParent</Link>
        <br />
        <Link to="/Child-To-Child">ChildToChild</Link>
         <br />
        <Link to="/EvenOrOdd">EvenOrOdd</Link>
        <br />
        <Link to="/GetAPI">GetAPI</Link>
      </div>
      <hr/>
    </div>
  );
}
