import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
   const [searchQuery,setSearchQuery]=useState("");
   const [suggestions,setSuggestions]=useState([])
   const [showSuggestions,setShowSuggestions]=useState(false)

   const searchCache=useSelector(store=>store.search);
   const dispatch=useDispatch()
   
   useEffect(()=>{

    const timer=setTimeout(()=>{

      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSug();
        
      }
      },200);

    return()=>{
      clearTimeout(timer);
    }
   },[searchQuery]);

   const getSearchSug=async()=>{
    
    const data = await fetch(SEARCH_API+searchQuery);
    const json=await data.json();
    setSuggestions(json[1])
    // console.log(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
   }

    const togglerHandler=()=>{
        dispatch(toggleMenu());
    }


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1 ' >
      <img onClick={()=>togglerHandler()}
      className='h-8 cursor-pointer' alt='menu' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=' />
      <a href='/'>
      <img 
      className='h-8 mx-2'  alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1024px-YouTube_Logo_%282013-2017%29.svg.png'/>
    </a>
    </div>
    <div className='col-span-10 px-10'>
      <div>
        <input className=' px-5 w-1/2 border  border-gray-400 p-2 rounded-l-full' 
        type='text'
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={()=> setShowSuggestions(true)}
        onBlur={()=> setShowSuggestions(false)}
        />
        <button className=' border  border-gray-400 p-2 rounded-r-full bg-gray-200' >Search</button>
        </div>
        {showSuggestions && <div className='fixed bg-slate-50 py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map(eachSug=>
               <li key={eachSug} className='py-2'>{eachSug}</li>
              )}
          </ul>

        </div>}
    </div>
    <div className='col-span-1'>
        <img className='h-8'  alt='user' src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png'/>

    </div>
    </div>
  );
}

export default Head;
