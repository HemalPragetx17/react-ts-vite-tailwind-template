import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import CustomChip from "../../components/chip/CustomChip";
import CustomModal from "../../components/modal/CustomModal";
import CustomPopover from "../../components/popover/CustomPopover";
import CustomTabs from "../../components/tabs/CustomTabs";
import type { IFormModal } from "../../models/dashboard";
import { Routing } from "../../routes/routing";
import DemoForm from "./DemoForm";

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
        <CustomPopover
          triggerMode="hover"
          placement="top"
          showArrow
          offset={8}
          delay={{ open: 100, close: 150 }}
          className="px-3 py-2 text-sm max-w-xs"
          color="primary"
          trigger={
            <p className="text-2xl cursor-default select-none">Dashboard</p>
          }
        >
          <p className="text-xs text-secondary-600 dark:text-secondary-300 leading-relaxed">
            Real-time overview of your application's key metrics, sessions, and reports.
          </p>
        </CustomPopover>
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

      <div className="mt-8 space-y-6">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Custom Chip Variants</h3>
          <div className="flex flex-wrap gap-3">
            <CustomChip variant="solid" color="warning">Solid</CustomChip>
            <CustomChip variant="bordered" color="warning">Bordered</CustomChip>
            <CustomChip variant="light" color="warning">Light</CustomChip>
            <CustomChip variant="flat" color="warning">Flat</CustomChip>
            <CustomChip variant="faded" color="warning">Faded</CustomChip>
            <CustomChip variant="shadow" color="warning">Shadow</CustomChip>
            <CustomChip variant="dot" color="warning">Dot</CustomChip>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Chip Colors</h3>
          <div className="flex flex-wrap gap-3">
            <CustomChip color="default">Default</CustomChip>
            <CustomChip color="primary">Primary</CustomChip>
            <CustomChip color="secondary">Secondary</CustomChip>
            <CustomChip color="success">Success</CustomChip>
            <CustomChip color="warning">Warning</CustomChip>
            <CustomChip color="danger">Danger</CustomChip>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Chip Sizes & Radius</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <CustomChip size="sm">Small</CustomChip>
              <CustomChip size="md">Medium</CustomChip>
              <CustomChip size="lg">Large</CustomChip>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <CustomChip radius="none">None</CustomChip>
              <CustomChip radius="sm">Small</CustomChip>
              <CustomChip radius="md">Medium</CustomChip>
              <CustomChip radius="lg">Large</CustomChip>
              <CustomChip radius="full">Full</CustomChip>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-sm">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Chip with Content & Close</h3>
          <div className="flex flex-wrap gap-3">
            <CustomChip 
              color="success" 
              variant="flat"
              startContent={
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              }
            >
              Completed
            </CustomChip>
            <CustomChip 
              color="primary" 
              variant="flat"
              endContent={
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              }
            >
              Notifications
            </CustomChip>
            <CustomChip 
              color="danger" 
              variant="bordered"
              onClose={() => console.log("Close clicked")}
            >
              Removable
            </CustomChip>
            <CustomChip isDisabled>Disabled Chip</CustomChip>
          </div>
        </div>
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
