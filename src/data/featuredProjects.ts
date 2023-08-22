import ngoWebsite from 'src/images/ngoWebsite.png'
import qme from 'src/images/qme.png'
import { FeaturedProject } from 'src/type/Project'

export const featuredProjects: FeaturedProject[] = [
  {
    imgSrc: ngoWebsite,
    title: 'Website of a NGO in Hong Kong',
    link: 'http://www.nwsc.edu.hk',
    content: 'It\'s an NGO which providing on-job-training. I made this website to display infromation of their courses',
    techs: ['WordPress', 'Elementor']
  },
  {
    imgSrc: qme,
    title: 'Mobile Application',
    link: 'https://apkcombo.com/%E4%BD%A0%E5%95%8F%E6%88%91%E7%AD%94-%E6%B8%AF%E8%82%A1%E5%A4%A7%E6%95%B8%E6%93%9A%E5%88%86%E6%9E%90-%E8%B2%BC%E5%A3%AB-%E7%B7%9A%E4%B8%8A%E6%9C%8D%E5%8B%99/com.usolution/',
    content: 'It\'s an NGO which providing on-job-training. I made this website to display infromation of their courses',
    techs: ['React-native', 'Redux', 'Firebase']
  }
]
