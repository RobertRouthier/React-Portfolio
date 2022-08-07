import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/RobertRouthier"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/robert-routhier-976367116/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/18219934/rob-routhier/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
