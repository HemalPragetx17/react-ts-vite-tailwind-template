import { useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import CustomModal from "../../components/modal/CustomModal";
import DemoForm from "./DemoForm";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  const handleAddUserSubmit = () => {
    setOpenDialog(false);
  };
  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="text-2xl">Dashboard</p>
        <CustomButton size="lg" onClick={handleDialogOpen}>
          Demo Form
        </CustomButton>
      </div>

      <CustomModal
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        title="Add New User"
        size="2xl"
        backdrop="blur"
        scrollBehavior="inside"
      >
        <DemoForm
          user={user}
          onUserAdd={handleAddUserSubmit}
          handleDialogClose={handleDialogClose}
        />
      </CustomModal>
    </section>
  )
};

export default Dashboard
