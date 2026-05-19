import React, { useEffect, useState } from 'react'
import { projectsData } from '../data'
import { projectsNav } from '../data'
import Project from './Project';

const Projects = () => {
    const [items, setItems] = useState('all');
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (items === 'all') {
            setProjects(projectsData)
        } else {
            const newProject =  projectsData.filter((project) => {
                return project.category.toLowerCase() === items.toLowerCase()
            });
            setProjects(newProject);
        }
    }, [items])

    const handleClick = (e, index) => {
        setItems( e.target.textContent );
        setActive(index)
    }

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white ">
          {projectsNav.map((item, index) => (
            <li
              onClick={(e) => handleClick(e, index)}
              className={`${
                active === index ? "active" : ""
              } cursor-pointer capitalize m-4`}
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
          </nav>
          <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
              {projects.map((item) => (
                  <Project key={item.id} item={item} />
              ))}
          </section>
    </div>
  );
}

export default Projects
