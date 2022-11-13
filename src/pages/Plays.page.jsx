import React from 'react'
import DefaultLayoutHoc from "../layout/Default.layout"

//Components
import Poster from "../components/Poster/Poster.component"
import PlayFilter from "../components/PlayFilter/PlayFilters.component"

const PlaysPage = () => {
  return (
    <div className='container mx-auto px-4 my-10'>
      <div className="w-full flex flex-col-reverse  lg:flex-row-reverse gap-4">
        <div className="lg:w-3/4 p-4 bg-white rounded" >
          <h2 className='text-2xl font-bold mb-4'>Plays in Bengaluru</h2>
          <div className="flex flex-wrap">
            
          <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-blue-mic-comedy-nights-0-2022-11-10-t-13-44-56.jpg"
               title='Comedy Nights' 
               subtitle='Comedy Shows | Hindi, English | 16yrs + | 1hr' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay={true}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340769-flzndxmcwt-portrait.jpg"
               title='Piyush Mishra Concert' 
               subtitle='Fusion, Retro | Hindi | 8yrs + | 2hrs' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay={true}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMyBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00322373-xdhxrmulkn-portrait.jpg"
               title='Gaurav Kapoor Live' 
               subtitle='Comedy Shows | Hindi | 1hr' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay={true}
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343031-aurpgcsysc-portrait.jpg"
               title='Oh Hello! By Rahul Dua' 
               subtitle='Comedy Shows | Hindi | 16yrs + | 1hr 30mins' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aroha-0-2022-11-10-t-12-17-32.jpg"
               title="Bhoomija's Aaroha" 
               subtitle='Acting, Music | Kannada, English | 8yrs + | 1hr 30mins' />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster 
              isPlay={true}
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunday-sunny-tunes-0-2022-10-31-t-7-22-46.jpg"
               title='Sunday Sunny Tunes' 
               subtitle='Music Shows | English | 21yrs + | 2hrs' />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilter title='Date' tags={["Today", "Tommorrow", "This Weekend"]} />
          </div>
          <div>
            <PlayFilter title='Language' tags={["English", "Hindi", "Kannada"]} />
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default PlaysPage