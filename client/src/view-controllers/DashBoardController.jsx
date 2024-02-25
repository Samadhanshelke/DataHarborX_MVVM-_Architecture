import { useEffect } from "react";
import useDashboardViewModel from "../view-models/useDashBoardViewModel";
import Papa from 'papaparse';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

const useDashboardController = () => {
   const {handleChangeSort,search,setSearch,userList,handleDeleteUser,navigate,isModalOpen,setIsModalOpen} = useDashboardViewModel();
const {
  register,
 
  // getValues,
  setValue,
  formState: { errors },
} = useForm()

  useEffect(() => {
    localStorage.setItem("searchterm", search);
  }, [search]);

  const handleSort = (option) => {
    if (option.value === "A-Z") {
      const sortedList = [...userList].sort((a, b) => {
        const nameA = a.UserName.toUpperCase();
        const nameB = b.UserName.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      handleChangeSort(sortedList)
    }
    if (option.value === "Z-A") {
      const sortedList = [...userList].sort((a, b) => {
        const nameA = a.UserName.toUpperCase();
        const nameB = b.UserName.toUpperCase();

        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      handleChangeSort(sortedList)
    }

    if (option.value === "Last Modified") {
      const sortedList = [...userList].sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      handleChangeSort(sortedList)
    }
    if (option.value === "Last Inserted") {
      const sortedList = [...userList].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      handleChangeSort(sortedList)
    }
  };

  const handleNavigate = (user) => {
    navigate(`/edituser/${user._id}`);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };


  const openModal = () => {

    setIsModalOpen(true);
  };

  const closeModal = () => {
   
    setIsModalOpen(false);
  };

  const handleDownloadPDF = () => {
    // Logic for downloading PDF
    closeModal();
  };

  const handleDownloadCSV = () => {
   
    closeModal();
  };

  const handleSaveAsCSV = (onDownloadCSV) => {
    // Convert the data to CSV format
    const formattedData = userList.map(({ UserName, Email, Phone }) => ({ UserName, Email, Phone }));

    // Convert the data to CSV format
    const csv = Papa.unparse(formattedData);
    // Create a Blob from the CSV data
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'my_table.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onDownloadCSV()
    } else {
      console.error('Your browser does not support the download attribute.');
    }
  };

  const handleSaveAsPDF = (onDownloadPDF) => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();
 
    // Add content to the PDF
    pdf.text('My Table Data', 10, 10); // Title
    pdf.autoTable({
        head: [['Name', 'Email', 'Phone']],
        body: userList.map(row => [row.UserName, row.Email, row.Phone]),
      });

    // Save the PDF
    pdf.save('my_table.pdf');
    onDownloadPDF()
  };

  const handleSortChange = (selectedOption) => {
    setValue('Sort', selectedOption);
     handleSort(selectedOption)

  };
  const sortOptions = [
    { value: 'A-Z', label: 'A-Z' },
    { value: 'Z-A', label: 'Z-A' },
    { value: 'Last Modified', label: 'Last Modified' },
    { value: 'Last Inserted', label: 'Last Inserted' },
  ]

  return {
    userList,
    search,
    setSearch,
    handleSort,
    handleDeleteUser,
    handleNavigate,
    openModal,
    closeModal,
    handleDownloadPDF,
    handleDownloadCSV,
    handleSaveAsCSV,
    isModalOpen,
    handleSaveAsPDF,
    handleSortChange,
    sortOptions,
    setValue,
    register,
    errors
  };
};

export default useDashboardController;
