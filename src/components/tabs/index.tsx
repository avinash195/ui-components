import { useState } from "react";
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

  const handleTabClick = (id: number): void => {
    setActiveTab(id);
  };

  return (
    <div>
      <div className="tabs">
        {data.map((item: TabData) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={[
              "tabs-button",
              activeTab === item.id && "tabs-button-active"
            ].filter(Boolean).join(" ")}
          >
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div className="tab-content">
        {data.map((item: TabData) => (
          <div key={item.id} className={[
            "tab-content-item",
            activeTab === item.id && "tab-content-item-active"
          ].filter(Boolean).join(" ")}>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Tabs;