import { useState } from 'react';
import './selectDropdown.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


const SelectDropdown = ({data, placeholder, icon}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedItem, setSelectedItem] = useState(placeholder);

    const [listDataFilter, setListDataFilter] = useState(data)
    const [listData, setListData] = useState(data)

    const handleSelectOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleSelectClose = (index, title) => {
       setSelectedIndex(index)
       setIsOpen(false)
       setSelectedItem(title)
    }

    const handleFilterList = e => {
        const country = e.target.value.toLowerCase();
        const countryList = listDataFilter.filter(item => item.toLowerCase().includes(country))
        const countryListUnique = countryList.filter((item, index)=> countryList.indexOf(item)=== index )
        // console.log(countryList);
        setListData(countryListUnique)
    }

    return (

        // it com from mui > setIsOpen for disapear menu from anywhere.
        <ClickAwayListener onClickAway={()=> setIsOpen(false)}> 
            <div className='selectDropWrapper cursor position-relative'>
            {icon}
            <span className='openSelectDrop' onClick={handleSelectOpen}>{selectedItem.length > 18 ? selectedItem.substr(0,14) + '---' : selectedItem}<ExpandMoreIcon className='arraw'/></span>
            {
               isOpen === true &&

               <div className="selectDropItem">
                    <div className='searchField'>
                        <input type="text" placeholder='Search Here' onChange={handleFilterList}/>
                    </div>
                    <ul className='searchResult'>

                       <li key={0} onClick={()=> handleSelectClose(0, placeholder)} className={`${selectedIndex === 0 ? 'active' : ""}`}> {placeholder}</li>
                        {
                            listData?.map((item, index) =><li key={index+1} onClick={()=> handleSelectClose(index+1, item)} className={`${selectedIndex === index+1 ? 'active' : ""}`}> {item}</li>)
                        }
                    </ul>
                </div>  
            }
            </div>
        </ClickAwayListener>



    );
};

export default SelectDropdown;
