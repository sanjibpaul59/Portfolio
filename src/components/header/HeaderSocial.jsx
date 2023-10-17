import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaHackerrank } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://linkedin.com/in/sanjibpaul59"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/sanjibpaul59"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://hackerrank.com/profile/sanjibpaul171"
        target="_blank"
        rel="noreferrer"
      >
        <FaHackerrank />
      </a>
    </div>
  )
}

export default HeaderSocial
