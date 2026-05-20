import { useEffect, useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import CustomModal from "../../components/modal/CustomModal";
import DemoForm from "./DemoForm";
import type { IFormModal } from "../../models/dashboard";

const Dashboard = () => {
  const [user, setUser] = useState<IFormModal | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setUser({
      _id: "1y532794532453243245",
      name: "Hemal Gondaliya",
      email: "hemalgondaliya.imperoit@gmail.com",
      joiningDate: "2026-05-07",
      age: 27,
      gender: "Male",
      technologies: [
        "Node.js",
        "TypeScript",
        "Tailwind CSS"
      ],
      hobbies: [
        "Gaming",
        "Sports"
      ],
      role: "Admin",
      status: true,
      agreeToTerms: true,
      bio: "nothing to say dear",
      startDate: "2026-05-14",
      endDate: "2026-05-28",
      phone: "919724582730",
      phoneCountry: "+91",
      profilePic: "https://umart-production.s3.af-south-1.amazonaws.com/category/categories/1751966524412_5390255224354014.png",
      image: "https://umart-production.s3.af-south-1.amazonaws.com/category/categories/1751966524412_5390255224354014.png",
      images: [
        {
          _id: "4y623785347895678934",
          url: "https://umart-production.s3.af-south-1.amazonaws.com/category/categories/1751966524412_5390255224354014.png"
        },
        {
          _id: "5y74928475928345234",
          url: "https://umart-production.s3.af-south-1.amazonaws.com/category/categories/1751966524412_5390255224354014.png"  
        },
        {
          _id: "6y85934784579834598",
          url: "https://umart-production.s3.af-south-1.amazonaws.com/category/categories/1751966524412_5390255224354014.png"
        }
      ],
      imageToDelete: []
    })
  }, [])

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
