import { useNavigate } from "react-router-dom";

export const isAuthenticated = async (navigate) => {
  const token = localStorage.getItem("token");
  
  if (token) {
    navigate("/"); 
    return true; 
  }
  
  return false; 
};
