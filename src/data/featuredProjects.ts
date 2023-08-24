import ngoWebsite from 'src/images/ngoWebsite.png'
import consilience from 'src/images/consilience.png'
import motex from 'src/images/motex.png'
import { FeaturedProject } from 'src/type/Project'

export const featuredProjects: FeaturedProject[] = [
  {
    imgSrc: consilience,
    title: 'Company website of Consilience Analysis',
    link: 'https://www.consilienceanalytics.com',
    content: 'Worked with UI team to build the website for company',
    techs: ['ReactJs', 'Mui']
  },
  {
    imgSrc: motex,
    title: 'Introduction website of Motex',
    link: 'https://motex.io',
    content: 'I built this interactive website to introduce the product for company.',
    techs: ['ReactJs', 'GatsbyJs']
  },
  {
    imgSrc: ngoWebsite,
    title: 'Website of a NGO in Hong Kong',
    link: 'http://www.nwsc.edu.hk',
    content: 'It\'s an NGO which providing on-job-training. I made this website to display infromation of their courses when I was in university',
    techs: ['WordPress', 'Elementor']
  },

]
