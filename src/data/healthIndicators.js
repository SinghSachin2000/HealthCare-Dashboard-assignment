import { FaHeart } from "react-icons/fa";
import { GiLungs } from "react-icons/gi";
import { LiaTeethSolid } from "react-icons/lia";
import { LuBone } from "react-icons/lu";

const healthStatus = [
  {
    id: "heart",
    label: "Healthy Heart",
    status: "Normal",
    top: "20%",
    left: "52%",
    color: "green",
    icon : FaHeart,
  },
  {
    id: "lungs",
    label: "Lungs",
    status: "Issue Detected",
    top: "25%",
    left: "41%",
    color: "red",
    icon : GiLungs,
  },
  {
    id: "teeth",
    label: "Teeth",
    status: "Normal",
    top: "10%",
    left: "52%",
    color: "green",
    icon : LiaTeethSolid,
  },
  {
    id: "bone",
    label: "Bone",
    status: "Normal",
    top: "70%",
    left: "50%",
    color: "green",
    icon : LuBone,
  },
  ];
  
  export default healthStatus;
  