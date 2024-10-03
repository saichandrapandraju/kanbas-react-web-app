import React from 'react';

type TabType = 'signin' | 'signup' | 'profile';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const tabs: TabType[] = ['signin', 'signup', 'profile'];

  return (
    <nav>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`block w-full text-left p-2 ${activeTab === tab ? 'text-red-500' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;