import { useState, useRef } from "react";
import "./style.css";

interface TabData {
  id: number;
  title: string;
  content: string;
}

interface TabsProps {
  data: TabData[];
}

function Tabs({ data }: TabsProps) {
  const [activeTab, setActiveTab] = useState<number>(data[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>(
    Array(data.length).fill(null)
  );
  

  const handleTabClick = (id: number): void => {
    setActiveTab(id);
  };

  const setActiveTabByIndex = (index: number) => {
    const newTab = data[index].id;
    setActiveTab(newTab);
    tabRefs.current[newTab - 1]?.focus();
    // document.getElementById(`tab-${newTab}`)?.focus()
  }

  const handleArrowKeys = (key: string) => {
    const currentActiveIndex = data.findIndex(({ id: itemId }) => itemId === activeTab);
    switch(key) {
      case 'ArrowLeft':
        setActiveTabByIndex((currentActiveIndex - 1 + data.length) % data.length);
        break;
      case 'ArrowRight':
        setActiveTabByIndex((currentActiveIndex + 1) % data.length);
        break;
      default:
        break;
    }
  }

  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist" aria-label="Content tabs">
        {data.map((item: TabData, index) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`tabpanel-${item.id}`}
            id={`tab-${item.id}`}
            onClick={() => handleTabClick(item.id)}
            className={[
              "tabs-button",
              activeTab === item.id && "tabs-button-active"
            ].filter(Boolean).join(" ")}
            tabIndex={activeTab === item.id ? 0 : -1}
            onKeyDown={(e) => handleArrowKeys(e.key)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {data.map((item: TabData) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`tabpanel-${item.id}`}
            aria-labelledby={`tab-${item.id}`}
            className={[
              "tab-content-item",
              activeTab === item.id && "tab-content-item-active"
            ].filter(Boolean).join(" ")}
            tabIndex={0}
          >
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Tabs;