import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Downloadbtn from "../components/Dashboard/Downloadbtn";
import Loading from "../components/common/Loading";
import Sort from "../components/Dashboard/Sort";
import { Link } from "react-router-dom";
import useDashboardController from "../view-controllers/DashBoardController";


const Dashboard = () => {
  
  const theme = useTheme();
  const {
    userList,
    search,
    setSearch,
    handleSort,
    handleDeleteUser,
    handleNavigate,
  } = useDashboardController();
  

  return (
    <div className={`w-full sm:h-screen sm:max-h-[calc(100vh-56px)] flex flex-col items-center  justify-center`}>
      <div className="w-11/12 flex justify-between m-auto items-center flex-wrap gap-y-2">
        <div>
          <Sort handleSort={handleSort}/>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            className="border border-black text-black rounded px-2 py-1 w-[250px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {userList.length !== 0 ? <Downloadbtn /> : null}
        <Link to={"/createUser"}>
          <Button color="primary" variant="contained">
            ADD USER
          </Button>
        </Link>
      </div>

      {userList.length !== 0 ? (
        <Table className="  rounded w-11/12 m-auto">
          <Thead>
            <Tr className="bg-[#5e88f2] text-white text-left ps-2 font-normal tracking-wider text-base">
              <Th className="p-2 w-[400px] rounded-s-md">UserName</Th>
              <Th className="p-2 w-[400px]">Email</Th>
              <Th className="p-2 w-[400px]">Phone</Th>
              <Th className="p-2 w-[400px] rounded-e-md">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userList
              .filter((user) => {
                return (
                  search.toLowerCase() === "" ||
                  user.UserName.toLowerCase().includes(search) ||
                  user.Email.toLowerCase().includes(search) ||
                  user.Phone.includes(search)
                );
              })
              .map((user) => {
                return (
                  <Tr key={user._id} className={`border-b`}>
                    <Td className="p-2 py-2">
                      <h1>{user.UserName}</h1>
                    </Td>
                    <Td className="p-2">
                      <h1>{user.Email}</h1>
                    </Td>
                    <Td className="p-2">
                      <h1>{user.Phone}</h1>
                    </Td>
                    <Td className="flex flex-col sm:flex-row gap-y-1  sm:gap-x-4">
                      <Button
                        size="md"
                        variant="contained"
                        color="success"
                        className="tracking-wider"
                        onClick={() => {
                          handleNavigate(user);
                        }}
                      >
                        <FiEdit className="text-xl" />
                      </Button>
                      <Button
                        size="md"
                        variant="contained"
                        style={{
                          backgroundColor: theme.palette.primary.danger,
                        }}
                        className="tracking-wider mt-2"
                        onClick={() => {
                          handleDeleteUser(user._id);
                        }}
                      >
                        <MdOutlineDelete className="text-xl" />
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      ) : (
        <h1 className="text-red-400 text-3xl">
          <Loading />
        </h1>
      )}
    </div>
  );
};

export default Dashboard;
