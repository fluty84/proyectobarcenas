import CreateMenu from "../createMenu/CreateMenu";
import CreateTable from "../table/CreateTable";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

const RestaurantPanel = () => {
  const value = useContext(AuthContext);

  return (
    <>
      <h1>restaurant PANEL</h1>
      <CreateTable tableNumbers={value}></CreateTable>
      <CreateMenu></CreateMenu>
    </>
  );
};

export default RestaurantPanel;
