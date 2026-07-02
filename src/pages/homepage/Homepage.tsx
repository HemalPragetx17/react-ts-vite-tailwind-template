import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaVolumeHigh, FaVolumeOff } from "react-icons/fa6";
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiCode,
  FiCopy,
  FiDownload,
  FiGithub,
  FiLayers,
  FiTerminal,
  FiZap
} from "react-icons/fi";
import navbarLayoutLightImg from "../../assets/layouts/navbar-layout-light.png";
import navbarLayoutImg from "../../assets/layouts/navbar-layout.png";
import sidebarLayoutLightImg from "../../assets/layouts/sidebar-layout-light.png";
import sidebarLayoutImg from "../../assets/layouts/sidebar-layout.png";
import profilePic from "../../assets/profilepicture-logo.jpg";
import ThemeToggle from "../../components/themeToggle/ThemeToggle";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Input,
  Slider,
  Spinner,
  Tab,
  Tabs,
  Tooltip,
  Chip,
  Rating
} from "../../components/ui";

const Homepage: React.FC = () => {
  // Showcase / Floating component states
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [isFollowLoading, setIsFollowLoading] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(60);
  const [inputText, setInputText] = useState<string>("ReactUI");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<"notes" | "tasks" | "files">("notes");

  // Terminal setup & Copy states
  const [activeTab, setActiveTab] = useState<"npm" | "yarn" | "pnpm">("npm");
  const [copiedTerminal, setCopiedTerminal] = useState<boolean>(false);

  // Monitor theme changes to swap layout showcase images dynamically
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const handleFollowClick = () => {
    setIsFollowLoading(true);
    setTimeout(() => {
      setIsFollowLoading(false);
      setIsFollowing(!isFollowing);
    }, 600);
  };

  const getTerminalCommand = () => {
    switch (activeTab) {
      case "npm":
        return `# Clone the developer template branch\ngit clone -b template https://github.com/HemalPragetx17/react-ts-vite-tailwind-template.git\n\n# Navigate to project directory\ncd react-ts-vite-tailwind-template\n\n# Install dependencies\nnpm install\n\n# Run development server\nnpm run dev`;
      case "yarn":
        return `# Clone the developer template branch\ngit clone -b template https://github.com/HemalPragetx17/react-ts-vite-tailwind-template.git\n\n# Navigate to project directory\ncd react-ts-vite-tailwind-template\n\n# Install dependencies\nyarn install\n\n# Run development server\nyarn dev`;
      case "pnpm":
        return `# Clone the developer template branch\ngit clone -b template https://github.com/HemalPragetx17/react-ts-vite-tailwind-template.git\n\n# Navigate to project directory\ncd react-ts-vite-tailwind-template\n\n# Install dependencies\npnpm install\n\n# Run development server\npnpm dev`;
    }
  };

  const handleCopyTerminal = async () => {
    const command = getTerminalCommand();
    try {
      await navigator.clipboard.writeText(command);
      setCopiedTerminal(true);
      setTimeout(() => setCopiedTerminal(false), 2050);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden font-sans pb-12">
      {/* CSS Dot Grid Backdrop */}
      <div className="hero-grid absolute inset-0 pointer-events-none z-0" />

      {/* Dynamic Colored Blurs */}
      <div className="absolute top-[-5%] left-[-5%] w-[380px] h-[380px] rounded-full bg-violet-600/15 dark:bg-violet-600/10 blur-[120px] animate-[pulse_6s_infinite_alternate] pointer-events-none z-0" />
      <div className="absolute top-[25%] right-[-5%] w-[450px] h-[450px] rounded-full bg-pink-500/10 dark:bg-pink-500/10 blur-[140px] animate-[pulse_8s_infinite_alternate_1s] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-[120px] animate-[pulse_7s_infinite_alternate_2s] pointer-events-none z-0" />

      {/* Floating Glassmorphic Navigation */}
      <header className="fixed top-4 left-0 right-0 z-50 max-w-7xl mx-auto px-4 w-full">
        <div className="backdrop-blur-2xl bg-white/30 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-2xl px-6 h-16 flex items-center justify-between shadow-xl shadow-black/5">
          <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-lg font-extrabold shadow-md shadow-primary/30">
              R
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-default-800 dark:from-white dark:to-default-300 font-extrabold">
              ReactUI Template
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-800 hover:text-black dark:text-neutral-200 dark:hover:text-white">
            <a href="./storybook/" className="hover:text-primary transition-colors">Docs</a>
            <a href="./storybook/?path=/docs/configure-your-project--docs" className="hover:text-primary transition-colors">Components</a>
            <a href="./storybook/" className="hover:text-primary transition-colors">Storybook</a>
            <a
              href="https://github.com/HemalPragetx17/react-ts-vite-tailwind-template"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              GitHub <FiGithub size={14} />
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="flat"
              color="primary"
              size="sm"
              radius="full"
              startContent={<FiDownload />}
              onClick={() =>
                window.open(
                  "https://github.com/HemalPragetx17/react-ts-vite-tailwind-template/archive/refs/heads/template.zip",
                  "_blank"
                )
              }
              className="font-semibold text-xs border border-white/80 dark:border-white/5 backdrop-blur-md bg-white/10 dark:bg-white/5 shadow-xs"
            >
              Download Template
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-32 md:pb-24 relative z-10 flex flex-col gap-28">

        {/* Hero Area */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Hero Copy (Matching HeroUI copy, brand renamed to ReactUI) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6 text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-white/5 border border-white/90 dark:border-white/10 text-primary shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              🔥 ReactUI Starter Template is live
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              The ultimate{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Vite + React
              </span>{" "}
              developer starter template.
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl font-medium">
              A production-ready React boilerplate pre-configured with TypeScript, Tailwind CSS, premium UI components, routing, and dark mode.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <Button
                variant="solid"
                color="primary"
                size="lg"
                radius="full"
                endContent={<FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />}
                className="group px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 w-full sm:w-auto"
                onClick={() => (window.location.href = "./storybook/")}
              >
                Get Started
              </Button>
              <Button
                variant="bordered"
                color="default"
                size="lg"
                radius="full"
                startContent={<FiDownload />}
                className="px-6 h-12 text-base font-semibold w-full sm:w-auto hover:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10 text-foreground shadow-sm"
                onClick={() =>
                  window.open(
                    "https://github.com/HemalPragetx17/react-ts-vite-tailwind-template/archive/refs/heads/template.zip",
                    "_blank"
                  )
                }
              >
                Download Template
              </Button>
              <Button
                variant="light"
                color="default"
                size="lg"
                radius="full"
                isIconOnly
                onClick={() =>
                  window.open(
                    "https://github.com/HemalPragetx17/react-ts-vite-tailwind-template",
                    "_blank"
                  )
                }
                className="hidden sm:inline-flex border border-white/20 dark:border-white/10 bg-white/5 hover:bg-white/10"
              >
                <FiGithub size={20} />
              </Button>
            </div>
          </motion.div>

          {/* Interactive Floating Component Showcase */}
          <div className="relative w-full min-h-[500px] lg:h-[580px] flex flex-wrap gap-6 items-center justify-center lg:block">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/10 to-secondary-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            {/* Levitating Component 1: Product Card (Top Right-ish) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="lg:absolute lg:top-[0px] lg:right-[150px] z-10 select-none"
            >
              <Card
                className="w-[190px] h-[150px] border border-white/30 dark:border-white/10 backdrop-blur-2xl bg-white/30 dark:bg-white/5 p-1 flex flex-col relative select-none"
                radius="lg"
                shadow="lg"
              >
                <img
                  src="https://v2.heroui.com/_next/image?url=%2Fimages%2Fcard-example-6.webp&w=256&q=75"
                  className="w-full h-full object-cover rounded-2xl pointer-events-none"
                  alt="Camera"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/45 backdrop-blur-md border border-white/15 dark:border-white/5 px-2.5 py-1.5 rounded-xl flex items-center justify-between text-[10px] text-white">
                  <span className="font-semibold">Camera</span>
                  <span className="font-bold text-white/95">$525</span>
                </div>
              </Card>
            </motion.div>

            {/* Levitating Component 2: Theme Switcher Toggle (Top Right - No background) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="lg:absolute lg:top-[20px] lg:right-[40px] z-20 flex items-center justify-center select-none"
            >
              <ThemeToggle />
            </motion.div>


            {/* Levitating Component 2: Button (Top Right) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="lg:absolute lg:top-[80px] lg:right-[30px] z-20 flex flex-col items-center gap-3 select-none"
            >
              <Button
                variant="shadow"
                color="warning"
              >
                Button
              </Button>
            </motion.div>

            {/* Levitating Component 3: User Profile Card (Middle Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="lg:absolute lg:top-[160px] lg:left-[-20px] z-30"
            >
              <Card
                className="w-full lg:w-[285px] p-4 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl text-left flex flex-col gap-3.5"
                radius="lg"
                shadow="lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge
                      content=""
                      color="success"
                      placement="bottom-right"
                      shape="circle"
                      showOutline
                      className="w-3.5 h-3.5 border border-white/20"
                    >
                      <Avatar
                        src={profilePic}
                        name="Zoey Lang"
                        size="md"
                        isBordered
                        color="success"
                        className="shadow-sm"
                      />
                    </Badge>
                    <div className="flex flex-col items-start leading-none">
                      <h4 className="font-bold text-sm text-foreground">Zoey Lang</h4>
                      <span className="text-[10px] text-default-450 mt-0.5">@zoeylang</span>
                    </div>
                  </div>

                  <Button
                    variant={isFollowing ? "flat" : "solid"}
                    color={isFollowing ? "default" : "primary"}
                    size="sm"
                    radius="full"
                    isLoading={isFollowLoading}
                    onClick={handleFollowClick}
                    className="font-bold text-xs px-4"
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                </div>

                <p className="text-xs text-default-500 leading-relaxed font-medium">
                  Full-stack developer, @hemal_ui lover she/her 💅
                </p>
                <div className="flex items-center gap-3 text-[10px] font-bold text-default-450 uppercase tracking-wider">
                  <span><strong>4</strong> Following</span>
                  <span><strong>97.1K</strong> Followers</span>
                </div>
              </Card>
            </motion.div>

            {/* Levitating Component 4: Slider Card (Middle/Top Right - Replacing Pagination) */}
            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="lg:absolute lg:top-[190px] lg:left-[280px] lg:right-[20px] z-10 select-none"
            >
              <Card
                className="p-4 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl text-left"
                radius="lg"
                shadow="lg"
                fullWidth={true}
              >
                <Slider
                  label="Volume"
                  color="primary"
                  size="md"
                  minValue={0}
                  maxValue={100}
                  step={1}
                  value={sliderValue}
                  onChange={(val) => setSliderValue(val as number)}
                  showTooltip
                  startContent={<FaVolumeOff className="text-neutral-400 w-4.5 h-4.5" />}
                  endContent={<FaVolumeHigh className="text-neutral-400 w-4.5 h-4.5" />}
                />
              </Card>
            </motion.div>

            {/* Levitating Component 5b: Standalone Input Card (Middle/Low Right) */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="lg:absolute lg:top-[290px] lg:right-[0px] z-20"
            >
              <Input
                type="text"
                label="Input"
                labelPlacement="outside"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                isClearable
                variant="bordered"
                radius="lg"
                color="primary"
              />
            </motion.div>

            {/* Levitating Component 5c: Standalone Spinner Card (Middle/Low Center-Right) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="lg:absolute lg:top-[420px] lg:right-[50px] z-20 select-none pointer-events-none"
            >
              <Card
                className="w-14 h-14 border border-white/30 dark:border-white/10 shadow-2xl bg-white/30 dark:bg-white/5 backdrop-blur-2xl p-2.5 text-left flex flex-col"
                radius="lg"
                shadow="lg"
              >
                <Spinner color="primary" size="md" />
              </Card>
            </motion.div>

            {/* Levitating Component 6: Media promo card (Bottom Right/Center) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="lg:absolute lg:top-[390px] lg:right-[150px] z-30"
            >
              <Card
                className="w-[230px] border border-white/30 dark:border-white/10 backdrop-blur-2xl bg-white/30 dark:bg-white/5 p-2.5 text-left flex flex-col"
                radius="lg"
                shadow="lg"
              >
                <div className="w-full h-[120px] rounded-2xl overflow-hidden relative shadow-inner select-none pointer-events-none">
                  <img
                    src="https://v2.heroui.com/_next/image?url=%2Fimages%2Fhero-card.webp&w=640&q=75"
                    className="w-full h-full object-cover rounded-xl"
                    alt="Available soon"
                  />
                </div>
                <div className="pt-3 px-1.5 flex flex-col gap-1">
                  <h4 className="font-bold text-xs text-foreground/90">Available soon.</h4>
                  <p className="text-[10px] text-default-450">Sign up for early access</p>
                  <Button
                    variant="flat"
                    color={isSubscribed ? "success" : "default"}
                    size="sm"
                    radius="full"
                    onClick={() => setIsSubscribed(!isSubscribed)}
                    className="w-full mt-2.5 font-bold text-xs border border-black/5 dark:border-white/5 backdrop-blur-md bg-black/5 dark:bg-white/5 shadow-xs h-8"
                  >
                    {isSubscribed ? (
                      <span className="flex items-center justify-center gap-1">
                        <FiCheck className="text-success" /> Subscribed
                      </span>
                    ) : (
                      "Notify me"
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Levitating Component 7: Tooltip Trigger Button (Middle Bottom Left) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
              className="lg:absolute lg:top-[370px] lg:left-[60px] z-20"
            >
              <Tooltip
                content="Build beautiful apps faster"
                placement="top"
                color="primary"
                radius="lg"
                showArrow
              >
                <Button
                  variant="flat"
                  color="primary"
                  size="sm"
                  radius="lg"
                >
                  Tooltip
                </Button>
              </Tooltip>
            </motion.div>

            {/* Levitating Component 7b: Rating Card (Under Tooltip: Middle Bottom Left) */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="lg:absolute lg:top-[430px] lg:left-[0px] z-20"
            >
              <Card
                className="p-3 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl shadow-xl shadow-black/5 text-left flex flex-col gap-1.5"
                radius="lg"
                shadow="lg"
              >
                <div className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Rating</div>
                <Rating defaultValue={3.7} allowHalf color="warning" size="lg" isReadOnly />
              </Card>
            </motion.div>

            {/* Levitating Component 8: Chip Component (Top Left) */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="lg:absolute lg:top-[20px] lg:left-[90px] z-20 flex flex-col items-start gap-2.5"
            >
              <Chip variant="shadow" color="primary" radius="full">
                Chip
              </Chip>
            </motion.div>

            {/* Levitating Component 8: Tabs (Top Left) */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="lg:absolute lg:top-[70px] lg:left-[30px] z-20 flex flex-col items-start gap-2.5"
            >
              <Tabs
                selectedKey={selectedTab}
                onSelectionChange={(key) => setSelectedTab(key as any)}
                radius="full"
                size="sm"
                variant="solid"
                color="default"
              >
                <Tab key="notes" title="Notes" />
                <Tab key="tasks" title="Tasks" />
                <Tab key="files" title="Files" />
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">Fully loaded developer starter boilerplate</h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Skip the configuration hassle. ReactUI is packed with pre-configured boilerplate architecture so you can start coding features immediately.
            </p>
            <div className="mt-2 text-xs font-semibold px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-primary inline-block mx-auto max-w-lg leading-relaxed">
              💡 <strong>Note:</strong> The landing page and Storybook code are references inside this repo. The downloadable template branch is a clean, blank slate ready for development.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Themeable */}
            <Card
              className="flex flex-col items-start p-6 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl hover:bg-white/45 dark:hover:bg-white/10 hover:border-white/80 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/5 text-left gap-4"
              radius="lg"
              shadow="none"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-xs">
                <FiZap size={20} className="animate-pulse" />
              </div>
              <h3 className="font-bold text-lg text-foreground">Themeable</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                Provides a theme system to customize default configurations. You can change all semantic tokens or define custom themes dynamically.
              </p>
            </Card>

            {/* Card 2: Fast & Stateless */}
            <Card
              className="flex flex-col items-start p-6 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl hover:bg-white/45 dark:hover:bg-white/10 hover:border-white/80 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/5 text-left gap-4"
              radius="lg"
              shadow="none"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20 shadow-xs">
                <FiLayers size={20} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Fast & Stateless</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                Built on top of Tailwind CSS, which means zero runtime styles and zero unnecessary classes injected in your build bundles.
              </p>
            </Card>

            {/* Card 3: Light & Dark UI */}
            <Card
              className="flex flex-col items-start p-6 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl hover:bg-white/45 dark:hover:bg-white/10 hover:border-white/80 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/5 text-left gap-4"
              radius="lg"
              shadow="none"
            >
              <div className="w-10 h-10 rounded-xl bg-success/10 text-success flex items-center justify-center border border-success/20 shadow-xs">
                <FiCode size={20} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Light & Dark Modes</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                Automatic device preference recognition. ReactUI automatically flips component styles when detecting document html class overrides.
              </p>
            </Card>

            {/* Card 4: Unique DX */}
            <Card
              className="flex flex-col items-start p-6 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl hover:bg-white/45 dark:hover:bg-white/10 hover:border-white/80 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/5 text-left gap-4"
              radius="lg"
              shadow="none"
            >
              <div className="w-10 h-10 rounded-xl bg-warning/10 text-warning flex items-center justify-center border border-warning/20 shadow-xs">
                <FiTerminal size={20} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Unique DX</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                Fully-typed component endpoints to minimize learning curves and provide the best code completion developer experience.
              </p>
            </Card>

            {/* Card 5: Accessible */}
            <Card
              className="flex flex-col items-start p-6 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl hover:bg-white/45 dark:hover:bg-white/10 hover:border-white/80 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/5 text-left gap-4"
              radius="lg"
              shadow="none"
            >
              <div className="w-10 h-10 rounded-xl bg-danger/10 text-danger flex items-center justify-center border border-danger/20 shadow-xs">
                <FiCheckCircle size={20} />
              </div>
              <h3 className="font-bold text-lg text-foreground">Accessible</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                ReactUI components comply with semantic tags guidelines, providing full keyboard navigation and screen reader tags out of the box.
              </p>
            </Card>

            {/* Card 6: RSC Compatible */}
            <Card
              className="flex flex-col items-start p-6 border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl hover:bg-white/45 dark:hover:bg-white/10 hover:border-white/80 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/5 text-left gap-4"
              radius="lg"
              shadow="none"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-xs">
                <FiCopy size={20} />
              </div>
              <h3 className="font-bold text-lg text-foreground">RSC Compatible</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                Fully compatible with Next.js App Router and React Server Components. Component files carry explicit "use client" directives where needed.
              </p>
            </Card>
          </div>
        </section>

        {/* Master Layout Options Section */}
        <section className="flex flex-col gap-12 w-full max-w-6xl mx-auto">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Master Layout Architecture
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              ReactUI Template includes two pre-configured layout variations out of the box. Easily toggle between them or customize the default setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Sidebar Layout option */}
            <Card
              className="flex flex-col border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl shadow-xl shadow-black/5 text-left overflow-hidden h-full gap-4 p-5"
              radius="lg"
              shadow="lg"
            >
              <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/5 bg-neutral-100 dark:bg-neutral-950 aspect-[16/7.6] flex items-center justify-center">
                <img
                  src={isDarkMode ? sidebarLayoutImg : sidebarLayoutLightImg}
                  alt="Sidebar Layout Configuration"
                  className="w-full h-full object-contain select-none pointer-events-none hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                  Sidebar Layout <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">Default</span>
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  Ideal for complex administrative consoles. Features a sticky collapsible navigation sidebar on the left and a header content bar on the right.
                </p>
              </div>
              <div className="mt-auto pt-3 border-t border-black/5 dark:border-white/5">
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-2">// Apply in src/routes/AppRouting.tsx</p>
                <pre className="p-3 bg-neutral-100 dark:bg-black/30 border border-neutral-200 dark:border-white/5 rounded-lg text-xs font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto">
                  {`<MainLayout withSidebar={true}>
  <YourPage />
</MainLayout>`}
                </pre>
              </div>
            </Card>

            {/* Top Navbar Layout option */}
            <Card
              className="flex flex-col border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl shadow-xl shadow-black/5 text-left overflow-hidden h-full gap-4 p-5"
              radius="lg"
              shadow="lg"
            >
              <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/5 bg-neutral-100 dark:bg-neutral-950 aspect-[16/7.6] flex items-center justify-center">
                <img
                  src={isDarkMode ? navbarLayoutImg : navbarLayoutLightImg}
                  alt="Top Navbar Layout Configuration"
                  className="w-full h-full object-contain select-none pointer-events-none hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="font-bold text-lg text-foreground">Top Navbar Layout</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  Perfect for simpler portals or landing setups. Stretches a master navigation header bar across the top, dedicating full viewport width to your main page body.
                </p>
              </div>
              <div className="mt-auto pt-3 border-t border-black/5 dark:border-white/5">
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-2">// Apply in src/routes/AppRouting.tsx</p>
                <pre className="p-3 bg-neutral-100 dark:bg-black/30 border border-neutral-200 dark:border-white/5 rounded-lg text-xs font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto">
                  {`<MainLayout withSidebar={false}>
  <YourPage />
</MainLayout>`}
                </pre>
              </div>
            </Card>
          </div>
        </section>

        {/* Installation Terminal Guide */}
        <section className="flex flex-col gap-10 max-w-4xl mx-auto w-full">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Quick Setup</h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400">
              Get the template codebase up and running on your local machine in seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 overflow-hidden shadow-2xl bg-neutral-50 dark:bg-white/5 backdrop-blur-2xl text-left">
            {/* Terminal Top bar */}
            <div className="bg-neutral-100 dark:bg-white/5 px-4 py-3 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono ml-2 flex items-center gap-1.5">
                  <FiTerminal /> terminal — bash
                </span>
              </div>

              {/* Package selector tabs */}
              <div className="flex items-center bg-neutral-200/50 dark:bg-white/5 border border-neutral-300 dark:border-white/10 rounded-lg p-0.5 text-xs font-mono">
                {(["npm", "yarn", "pnpm"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-md transition-all ${activeTab === tab
                      ? "bg-white dark:bg-white/10 text-neutral-900 dark:text-white font-bold shadow-xs"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm text-neutral-700 dark:text-neutral-200 overflow-x-auto min-h-[220px] relative group">
              <button
                onClick={handleCopyTerminal}
                className="absolute top-4 right-4 p-2.5 rounded-lg bg-white dark:bg-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all shadow-sm flex items-center gap-1.5"
                title="Copy code"
              >
                {copiedTerminal ? <FiCheck className="text-success" /> : <FiCopy />}
                <span className="text-xs font-sans font-medium">{copiedTerminal ? "Copied" : "Copy"}</span>
              </button>

              <pre className="leading-6 select-all pr-12">{getTerminalCommand()}</pre>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-12 mt-12 border-t border-white/10 dark:border-white/5 bg-white/5 dark:bg-black/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} ReactUI. Built for high performance.</p>
          <div className="flex items-center gap-6">
            <a href="./storybook/" className="hover:text-primary transition-colors">Documentation</a>
            <a
              href="https://github.com/HemalPragetx17/react-ts-vite-tailwind-template"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a href="./storybook/?path=/docs/configure-your-project--docs" className="hover:text-primary transition-colors">
              Components
            </a>
          </div>
        </div>
      </footer>

      {/* Inject Style Rules */}
      <style>{`
        .hero-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.04) 1.5px, transparent 0);
          background-size: 24px 24px;
        }
        .dark .hero-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.035) 1.5px, transparent 0);
        }
      `}</style>
    </div>
  );
};

export default Homepage;
