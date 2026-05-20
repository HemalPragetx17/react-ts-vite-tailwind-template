import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import CustomModal from "../../components/modal/CustomModal";
import type { IFormModal } from "../../models/dashboard";
import DemoForm from "./DemoForm";
import { Routing } from "../../routes/routing";
import CustomTabs from "../../components/tabs/CustomTabs";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IFormModal | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("overview");

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

  const handleFormOpen = () => {
    navigate(Routing.DemoFormPage);
  };

  const overviewIcon = (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );

  const analyticsIcon = (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );

  const reportsIcon = (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const tabItems = [
    {
      id: "overview",
      label: "Overview",
      icon: overviewIcon,
      count: 9,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm">
            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Total Users</h3>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-2">1,254</p>
            <span className="text-xs text-green-500 font-semibold inline-block mt-2">↑ 12% from last month</span>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm">
            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Active Sessions</h3>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-2">423</p>
            <span className="text-xs text-green-500 font-semibold inline-block mt-2">↑ 5% from last hour</span>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm">
            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Conversion Rate</h3>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-2">3.24%</p>
            <span className="text-xs text-red-500 font-semibold inline-block mt-2">↓ 0.4% from yesterday</span>
          </div>
        </div>
      ),
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: analyticsIcon,
      count: 3,
      content: (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm mt-2">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Performance Analytics</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Interactive charts and metric tracking would go here.</p>
          <div className="h-40 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-center mt-4">
            <span className="text-neutral-400 text-xs">Analytics Chart Placeholder</span>
          </div>
        </div>
      ),
    },
    {
      id: "reports",
      label: "Reports",
      icon: reportsIcon,
      count: 1,
      content: (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm mt-2">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">System Reports</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Generate, schedule, or view your automated data exports.</p>
          <div className="flex gap-3 mt-4">
            <CustomButton size="md" variant="solid" color="primary">Download CSV</CustomButton>
            <CustomButton size="md" variant="bordered">Download PDF</CustomButton>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="text-2xl">Dashboard</p>
        <div className="flex gap-2">
          <CustomButton size="lg" onClick={handleDialogOpen}>
            Demo Form
          </CustomButton>
          <CustomButton size="lg" onClick={handleFormOpen}>
            Demo Form Page
          </CustomButton>
        </div>
      </div>

      <div className="mt-6">
        <CustomTabs
          items={tabItems}
          variant="underlined"
          color="primary"
          size="md"
          radius="lg"
          activeKey={activeTab}
          onChange={setActiveTab}
        />
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
