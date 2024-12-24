import { useState, ChangeEvent } from "react"

import Navigation from "../components/Navigation"
import Card from "../components/Card"

import { Search } from "lucide-react"
import "../styles/views/timepieces.css"

export default function Timepieces () {
    const [data, setData] = useState([
        {
            image: "https://www.datocms-assets.com/99008/1733412283-bu300-21-aa-aa-a.webp?auto=compress%2Cformat&dpr=2&w=464",
            label: "BUGATTI TOURBILLION",
            link: ""
        },
        {
            image: "https://www.datocms-assets.com/99008/1712257952-astronomia_regulateur.webp?auto=compress%2Cformat&dpr=1&w=356",
            label: "ASTRONOMIA REGULATOR",
            link: ""
        },
        {
            image: "https://www.datocms-assets.com/99008/1703790140-ca100-40-aa-aa-a-copy.webp?auto=compress%2Cformat",
            label: "CASINO TOURBILLION",
            link: ""
        },
        {
            image: "https://www.datocms-assets.com/99008/1702061013-op110-40-ag-ab-a.webp?auto=compress%2Cformat",
            label: "OPERA GODFATHER",
            link: ""
        },
        {
            image: "https://www.datocms-assets.com/99008/1697652684-cv210-40-ab-ab-a.webp?auto=compress%2Cformat",
            label: "CAVIAR TOURBILLION",
            link: ""
        },
        {
            image: "https://www.datocms-assets.com/99008/1697475043-sn800-30-bd-aa-a.webp?auto=compress%2Cformat",
            label: "THE MYSTERY TOURBILLION",
            link: ""
        },
        {
            image: "https://www.datocms-assets.com/99008/1697036874-bu800-30-bd-bd-a.webp?auto=compress%2Cformat",
            label: "BUGATTI CHIRON TOURBILLION BAGUETTE",
            link: ""
        },
    ])

    const [filteredData, setFilteredData] = useState(data);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        
        const filtered: Array<{image: string, label: string, link: string}> = [];

        data.map(item => {
            const label = item.label.toLowerCase();
            if (label.includes(inputValue.toLocaleLowerCase())) {
                filtered.push(item);
            }
        })

        setFilteredData([...filtered]);
    }

    return (
        <>
            <Navigation/>
            <div className="timepieces-utilities">
                <input className="timepieces-utilities-input" onChange={handleInputChange}  placeholder="MODEL NUMBER, COLLECTION..."/>
                <div className="timepieces-utilities-icon">
                    <Search/>
                </div>
            </div>
            <main>
                <header>
                    <span>SHOP BY COLLECTION</span>
                    <div className="timepieces-header-icon"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7.38607" cy="6.72569" r="6.44166" stroke="#D9D9D9" strokeWidth="0.374705"></circle><path d="M7.14028 10.1874C7.2513 10.4808 7.29095 10.568 7.35439 10.568C7.4099 10.568 7.43369 10.4887 7.59229 10.1318C7.86191 9.52124 8.2029 8.71238 8.6787 7.54667C9.08313 6.57129 9.31309 5.98447 9.53513 5.41351C9.75717 4.85841 9.85233 4.7236 9.95542 4.6443C10.0664 4.565 10.2013 4.54121 10.3519 4.54121C10.4154 4.54121 10.4392 4.53328 10.4392 4.50156C10.4392 4.46984 10.4074 4.46191 10.3281 4.46191C10.0982 4.46191 9.79682 4.4857 9.72545 4.4857C9.63822 4.4857 9.30516 4.46191 9.02762 4.46191C8.94039 4.46191 8.90867 4.46984 8.90867 4.50156C8.90867 4.53328 8.93246 4.54121 8.98004 4.54121C9.05141 4.54121 9.11484 4.54121 9.20208 4.565C9.36067 4.59672 9.38446 4.66016 9.38446 4.74739C9.38446 4.81876 9.35274 4.9615 9.30516 5.08838C9.12278 5.68313 7.95707 8.65687 7.46541 9.81465L5.75253 5.35007C5.6653 5.1201 5.55429 4.81083 5.55429 4.71567C5.55429 4.65223 5.57015 4.59672 5.68909 4.565C5.76839 4.54914 5.85562 4.54121 5.91113 4.54121C5.96664 4.54121 5.9825 4.53328 5.9825 4.50156C5.9825 4.46984 5.94285 4.46191 5.83183 4.46191C5.65737 4.46191 5.30053 4.47777 5.2133 4.47777C5.10228 4.47777 4.77715 4.46191 4.48374 4.46191C4.38858 4.46191 4.33307 4.46191 4.33307 4.50156C4.33307 4.52535 4.35686 4.54121 4.41237 4.54121C4.45202 4.54121 4.52339 4.54121 4.62648 4.565C4.94368 4.62051 5.01505 4.74739 5.19744 5.22319L7.14028 10.1874Z" fill="#D9D9D9"></path></svg></div>
                </header>
                <div className="timepieces-container">
                    {
                        filteredData.map((element, index) => {
                            return <Card image={element.image} label={element.label} link={element.link} key={index}/>
                        })
                    }
                </div>
            </main>
        </>
    )
}