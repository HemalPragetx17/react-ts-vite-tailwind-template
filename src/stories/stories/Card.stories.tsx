import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "../../components/ui";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    isHoverable: {
      control: "boolean",
    },
    isPressable: {
      control: "boolean",
    },
    isBlurred: {
      control: "boolean",
    },
    isFooterBlurred: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-bold">Standard Card Template</p>
          <p className="text-xs text-default-500">example.com</p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm">
          Make beautiful, fast and modern React web applications using premium, responsive design primitives.
        </p>
      </CardBody>
      <CardFooter className="flex justify-end gap-2">
        <Button size="sm" variant="flat">Cancel</Button>
        <Button size="sm" color="primary">Explore</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    shadow: "md",
    radius: "lg",
  },
};

export const HoverAndPress: Story = {
  render: (args) => (
    <div className="flex flex-col sm:flex-row gap-6">
      <Card {...args} isHoverable className="w-[280px]">
        <CardBody className="p-6">
          <h4 className="font-bold text-lg mb-2">Hoverable Card</h4>
          <p className="text-sm text-default-500">
            Hover over this card to see a lift translation effect and elevated shadow depth.
          </p>
        </CardBody>
      </Card>

      <Card
        {...args}
        isPressable
        onClick={() => alert("Card clicked!")}
        className="w-[280px]"
      >
        <CardBody className="p-6">
          <h4 className="font-bold text-lg mb-2">Pressable Card</h4>
          <p className="text-sm text-default-500">
            Click or tap this card to trigger an active press scale animation and callback event.
          </p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const BlurredFooter: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">Blurred Footer</h3>
        <p className="text-sm text-default-500 mb-6">
          You can pass the `isFooterBlurred` prop to the card to blur the footer.
        </p>
      </div>
      <Card
        {...args}
        isFooterBlurred
        className="border-none w-[200px] h-[200px] bg-neutral-900"
        radius="lg"
      >
        <img
          alt="Woman listening to music"
          className="object-cover w-[200px] h-[200px]"
          src="https://v2.heroui.com/images/hero-card.jpeg"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60";
          }}
          width={200}
          height={200}
        />
        <CardFooter
          isBlurred={false}
          className="justify-between border border-white/10 overflow-hidden py-1.5 absolute rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 bg-black/60 backdrop-blur-md text-white px-3"
        >
          <p className="text-[10px] font-medium whitespace-nowrap text-white/90">Available soon.</p>
          <Button
            className="text-[10px] !text-white bg-white/20 hover:bg-white/35 border border-white/10 h-7 px-2.5 min-w-0 font-semibold"
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

export const PrimaryAction: Story = {
  render: (args) => {
    const list = [
      {
        title: "Orange",
        img: "https://v2.heroui.com/images/fruit-1.jpeg",
        price: "$5.50",
      },
      {
        title: "Tangerine",
        img: "https://v2.heroui.com/images/fruit-2.jpeg",
        price: "$3.00",
      },
      {
        title: "Raspberry",
        img: "https://v2.heroui.com/images/fruit-3.jpeg",
        price: "$10.00",
      },
      {
        title: "Lemon",
        img: "https://v2.heroui.com/images/fruit-4.jpeg",
        price: "$5.30",
      },
      {
        title: "Avocado",
        img: "https://v2.heroui.com/images/fruit-5.jpeg",
        price: "$15.70",
      },
      {
        title: "Lemon 2",
        img: "https://v2.heroui.com/images/fruit-6.jpeg",
        price: "$8.00",
      },
      {
        title: "Banana",
        img: "https://v2.heroui.com/images/fruit-7.jpeg",
        price: "$7.50",
      },
      {
        title: "Watermelon",
        img: "https://v2.heroui.com/images/fruit-8.jpeg",
        price: "$12.20",
      },
    ];

    return (
      <div className="flex flex-col gap-4 max-w-[900px] w-full">
        <div>
          <h3 className="text-xl font-bold mb-2">Primary Action</h3>
          <p className="text-sm text-default-500 mb-6">
            If you pass the `isPressable` prop to the card, it will be rendered as a button.
          </p>
        </div>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {list.map((item, index) => (
            <Card
              {...args}
              key={index}
              isPressable
              fullWidth
              shadow="sm"
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-3 pb-0">
                <img
                  alt={item.title}
                  className="w-full object-cover h-[140px] rounded-xl"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between p-3">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  },
};
