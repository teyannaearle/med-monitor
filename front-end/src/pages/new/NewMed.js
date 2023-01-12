import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./NewMed.scss"

function NewMed() {
  // const [medInfo, setMedInfo] = useState({
  //   nam: "",
  //   type: ""
  // })

  // const setName = (e) => {
  //   setMedInfo(medInfo[nam] = e.target.vlue)
  // }

  return (
    <div className="newMed">
      <Navbar />
      <form className="newMed page" >NewMed</form>
      {/* <input onChange ={(e) => setName}></input> */}
    </div>
  );
}

export default NewMed;
