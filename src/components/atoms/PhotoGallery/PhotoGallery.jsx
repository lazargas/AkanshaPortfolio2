import React, {useState, useEffect} from "react";
import styles from "./PhotoGallery.module.css";
import {desktopGalleryItems, phoneGalleryItems} from "../../../Utils/data/Orientation"



const PhotoGallery = () => {
  
 

  
  const [screenType, setScreenType] = useState("phoneScreen"); 

  

  useEffect(()=> {
    if (typeof window !== "undefined") {
      window.addEventListener('resize', ()=> {
        if (window.innerWidth < 768){
          setScreenType("phoneScreen");
        } else {
          setScreenType("desktopScreen");
        }
      })
    }
    
  })

  return (
    <div  className={`${styles.galleryContainer}`}>
        {getGalleryByScreenType(screenType)}
    </div>
  );
};

const getGalleryByScreenType = (screenType) => {
  if (screenType == "desktopScreen"){
    return desktopGalleryItems?.map((galleryItem, index) => (
          <div key={`galleryImage-${index}`} className={styles.galleryItem} style={{gridColumnStart:`${galleryItem.col.start}`, gridColumnEnd:`${galleryItem.col.end}`, gridRowStart:`${galleryItem.row.start}`,  gridRowEnd:`${galleryItem.row.end}`}}>
            <img src={galleryItem.src} />
          </div>
        ))
  } else if (screenType == "phoneScreen") {
    return phoneGalleryItems?.map((galleryItem, index) => (
          <div key={`galleryImage-${index}`} className={styles.galleryItem} style={{gridColumnStart:`${galleryItem.col.start}`, gridColumnEnd:`${galleryItem.col.end}`, gridRowStart:`${galleryItem.row.start}`,  gridRowEnd:`${galleryItem.row.end}`}}>
            <img src={galleryItem.src} />
          </div>
        ))
  
  }
}

export default PhotoGallery;