import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiArrowDownLeft, FiCloud } from 'react-icons/fi';
import { BsCheck2Circle, BsThreeDotsVertical} from 'react-icons/bs';
import { GiRabbitHead } from 'react-icons/gi';
import './userNav.css'

const UserNav = () => {
  return(
    <div className="userNav">
      <div className='navStart navChild'>
        <div>P</div>
        <div className="separator" />
        <div className='flexCenter'><AiOutlineClockCircle /> 0min</div>
        <div className="separator" />
        <div><GiRabbitHead /></div>
        <div className="separator" />
        <div className='flexCenter'><FiArrowDownLeft /> 0</div>
      </div>
      <div className='navEnd navChild'>
        <BsCheck2Circle />
        <FiCloud />
        <BsThreeDotsVertical />
      </div>
    </div>
  )
}

export default UserNav;