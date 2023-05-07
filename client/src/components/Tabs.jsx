import { useSnapshot } from "valtio"
import state from '../store'



const Tabs = ({tab, isFilterTab, isActiveTab, handleClick}) => {

  const snap = useSnapshot(state)

  const activeStyles = (isActiveTab && isFilterTab )? {backgroundColor: snap.color, opacity: 0.5} : {backgroundColor: 'transparent' , opacity:1}
  return (
    <div
    key={tab.name}
    className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism': 'rounded-4'}`}
    onClick={handleClick}
    style = {activeStyles}
    >
      <img src={tab.icon} alt={tab.name} />
    </div>
  )
}

export default Tabs
