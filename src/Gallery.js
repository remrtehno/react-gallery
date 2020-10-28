
  import { ProGallery } from 'pro-gallery';
  import 'pro-gallery/dist/statics/main.css';
  import React from 'react';

  export function Gallery() {


  let items = [];
  if(window.imgs) { 
    items = window.imgs; 
  }


    // The options of the gallery (from the playground current state)
  const options = {
    imageMargin: 15,
    collageDensity: 0.8,
    cubeRatio: 1,
    gallerySize: 50,
    groupSize: 3,
    groupTypes: '1,2h,2v,3t,3b,3l,3r',
    allowTitle: true,
    allowSocial: true,
    loveButton: false,
    enableInfiniteScroll: true,
    loadMoreAmount: 'all',
    hoveringBehaviour: 'NO_CHANGE',
    itemClick: 'expand',
    arrowsSize: 23,
    galleryHorizontalAlign: 'center',
    galleryVerticalAlign: 'center',
    calculateTextBoxWidthMode: 'PERCENT',
    textBoxWidthPercent: 50,
    textBoxWidth: 200,
    overlayAnimation: 'NO_EFFECT',
    imageHoverAnimation: 'NO_EFFECT',
    imageLoadingMode: 'BLUR',
    scrollAnimation: 'NO_EFFECT',
    imageQuality: 90,
    allowDescription: true,

    };

    const parent = document.getElementById('root');
    if(parent)  {

      const container = {
        width: parent.offsetWidth,
        height: parent.offsetHeight
      };

      // The eventsListener will notify you anytime something has happened in the gallery.
      const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

      // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
      const scrollingElement = window;

      return (
        <ProGallery
          items={items}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      );
    }
  }

  // Enjoy using your new gallery!
  // For more options, visit https://github.com/wix/pro-gallery
