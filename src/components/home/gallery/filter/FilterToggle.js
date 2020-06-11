import { React } from "react";

export default function ShowFilter(filterButton) {
  const isOpen = filterButton.isOpen();
  if (isOpen){
    return <div>+</div>;
  } else{
    return <div>></div>;
}
}