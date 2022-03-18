import React, { useState } from 'react';
import './TabList.css';

const TabList = ({ tabs }) => {
  const [tab, setTab] = useState({name: tabs[0]?.name, content: tabs[0]?.content});

  const onClickHandler = (e, value) => {
    console.log(e);
    setTab(value);
  }

  return (
    <div>
      {
        tabs.map((item, index) => {
          return <button className={`btn ${tab.name === item.name ? 'active' : ''}`} key={ index } onClick={(e) => onClickHandler(e, item)}>{item.name}</button>
        })
      }
      <div style={{display: 'block'}}>
        <textarea name="content" className="content" disabled value={tab?.content}></textarea>
      </div>
    </div>
  )
}

export default TabList;