import './header.css'
import logo from "../../assets/img/logo.svg"
import SearchIcon from '@mui/icons-material/Search';
import SelectDropdown from '../SelectDropdown/SelectDropdown';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import iconCom1 from '../../assets/img/icon-compare.svg';
import iconCom2 from '../../assets/img/icon-cart.svg';
import iconCom3 from '../../assets/img/icon-heart.svg';
import iconCom4 from '../../assets/img/icon-user.svg';

import Button from '@mui/material/Button';

import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Navber from './Navber/Navber';


const Header = () => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    const headerRef = useRef()
    const [categories, setCategories] = useState([
        "Milks and Dairies",
        "Wines & Drinks",
        "Clothing & beauty",
        "Fresh Seafood",
        "Pet Foods & Toy",
        "Fast food",
        "Baking material",
        "Vegetables",
        "Fresh Fruit",
        "Bread and Juice",
        "Wines & Drinks",
        "Fresh Seafood",
    ]);

    const countryList = [];

    useEffect(()=>{
        getCountry('https://countriesnow.space/api/v0.1/countries')
    },[])

    const getCountry = async (url)=>{
        try{
            await axios.get(url)
            .then(res => {
                if(res!==null){
                    // console.log(res.data.data);
                    res.data.data.map((item)=>{
                        countryList.push(item.country)
                    } ) 
                }
            })

        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            let position = window.pageYOffset;
            if(position > 100){
                headerRef.current.classList.add('fixedHeader')
            }else{
                headerRef.current.classList.remove('fixedHeader')
            }
        })
    },[])



    return (
       <>
       <div className='headerWrapper' ref={headerRef}>
            <header >
            <div className=' conteiner-fluid'>
                <div className=' row'>
                    <div className=' col-sm-2'>
                        <img src={logo} alt="" />
                    </div>

                    <div className=' col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                            <SelectDropdown data={categories} placeholder={'All Categories'} icon={false}></SelectDropdown>
                            <div className='search'>
                                <input type="text" name="" id="" placeholder='Search for items'/>
                                <SearchIcon  className='searchIcon cursor'/>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-5 d-flex align-items-center justify-content-end'>

                        <div className='ml-auto d-flex align-items-center '>
                            
                            <div className='countryWrapper'>
                                <SelectDropdown data={countryList}  placeholder={'Your : Locations'} icon={<LocationOnOutlinedIcon/>}></SelectDropdown>
                            </div>
                            <ClickAwayListener onClickAway={()=> setIsOpenDropDown(false)}> 
                            <ul className=' list list-inline mb-0 headerTabs'>
                                <li className='list-inline-item'>
                                    <span> 
                                        <img src={iconCom1} alt="" />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                        Compaire
                                    </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span> 
                                        <img src={iconCom3} alt="" />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                        Wishlist
                                    </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span> 
                                        <img src={iconCom2} alt="" />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                        Cart
                                    </span>
                                </li>
                                <li className='list-inline-item'>
                        
                                    <span onClick={()=> setIsOpenDropDown(!isOpenDropDown)}> 
                                        <img src={iconCom4} alt="" />
                                        Account
                                    </span>
                                    {
                                        isOpenDropDown!==false &&
                                          <ul className='dropdownMenuAcc'>
                                              <li><Button> <PersonIcon/> My Accound</Button></li>
                                              <li><Button> <MapIcon/> Order Tracking</Button></li>
                                              <li><Button> <FavoriteBorderIcon/> My Wishlist</Button></li>
                                              <li><Button> <SettingsIcon/> Setting</Button></li>
                                              <li><Button> <ExitToAppIcon/> Sign Out</Button></li>
                                          </ul>
                                    }
                    
                                </li>
                            </ul>
                            </ClickAwayListener>

                        </div>


                    </div>

                </div>
            </div>
        </header>
        <Navber></Navber>
        </div>
       </>
    );
};

export default Header;
