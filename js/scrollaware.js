function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
  }

  const sections = [
    selectElementByClass('skills'),
    selectElementByClass('about'),
    selectElementByClass('projects'),
    selectElementByClass('contact'),
    selectElementByClass('contact'),
  ];
  
  const navItems = {
    home: selectElementByClass('skillsSection'),
    about: selectElementByClass('aboutSection'),
    services: selectElementByClass('projectSection'),
    downloads: selectElementByClass('expertSection'),
    contact: selectElementByClass('blogSection'),
    contact: selectElementByClass('contactSection')
    ,
    contact: selectElementByClass('logSection')
  };