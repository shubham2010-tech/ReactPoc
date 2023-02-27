import View from '../Document/View';
import Document from '../Documents/Document';
import SideNavBar from "../sidebar/SideNavBar.jsx";
import React,{useState} from 'react';
const DocumentPage=()=>{
  const [route, setRoute] = useState("null");

    const navigationClicked = (url) => {
        setRoute(url)
      };
      const component = (url) => {
        if (url == "/View") {
          return (
              <View/>
          );
        }
        else{
            return (
                <Document/>
            )
        }

      };
    return(
   <>
   <SideNavBar navigationClicked={navigationClicked}/>
   {component(route)}
   </>
    )
}
export default DocumentPage