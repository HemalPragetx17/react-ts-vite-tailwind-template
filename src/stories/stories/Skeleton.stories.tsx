import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Skeleton, Button } from "../../components/ui";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoaded: {
      control: "boolean",
    },
    animation: {
      control: "select",
      options: ["shimmer", "pulse", "none"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[300px] flex flex-col gap-3">
      <Skeleton {...args} className="h-24 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton {...args} className="h-3 w-3/5 rounded-lg" />
        <Skeleton {...args} className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
  ),
};

export const StandaloneLayout: Story = {
  render: (args) => (
    <div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton {...args} className="flex rounded-full w-12 h-12" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton {...args} className="h-3 w-3/5 rounded-lg" />
        <Skeleton {...args} className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
  ),
};

export const CardLoadingState: Story = {
  render: (_args) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
      <div className="flex flex-col gap-4 items-center">
        <div className="w-[300px] p-4 border border-default-200 dark:border-default-800 rounded-2xl space-y-5 bg-content1">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <div className="h-32 rounded-lg bg-default-300 dark:bg-default-800">
              <img
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=60"
                alt="Card background"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
              <div className="text-lg font-bold">Beautiful Abstract Art</div>
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
              <div className="text-xs text-default-500">
                Created by Jane Doe. Discover the mesmerizing patterns of colorful gradients.
              </div>
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
              <div className="text-sm font-semibold text-primary">$49.99</div>
            </Skeleton>
          </div>
        </div>

        <Button onClick={() => setIsLoaded(!isLoaded)} color="primary">
          Toggle isLoaded ({isLoaded ? "Loaded" : "Loading"})
        </Button>
      </div>
    );
  },
};

export const Animations: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-[350px]">
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">Shimmer (Default)</span>
        <Skeleton {...args} animation="shimmer" className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">Pulse</span>
        <Skeleton {...args} animation="pulse" className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <span className="text-xs text-neutral-400 font-semibold uppercase">None (Static)</span>
        <Skeleton {...args} animation="none" className="h-10 w-full rounded-lg" />
      </div>
    </div>
  ),
};
