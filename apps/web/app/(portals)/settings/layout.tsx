import { Metadata } from "next";

import {
  BellRing,
  Brush,
  Cog,
  CreditCard,
  Fingerprint,
  Mail,
  PenLine,
  PersonStanding,
  RadioTower,
  User2,
} from "lucide-react";

import { Separator } from "@referrer/ui";

import { SettingsHeader, SidebarNav } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Settings",
  description: "Get job referrals to the top best companies of the world",
};
const settingsNav = [
  {
    title: "profile",
    href: "/settings/profile",
    info: "Manage your profile settings and set username, bio, e-mail preferences.",
    icon: <User2 />,
  },
  {
    title: "account",
    href: "/settings/account",
    info: "Manage your account settings.",
    icon: <Cog />,
  },
  {
    title: "appearance",
    href: "/settings/appearance",
    info: "Manage your appearance settings .",
    icon: <Brush />,
  },
  {
    title: "notifications",
    href: "/settings/notifications",
    info: "Manage your notifications settings .",
    icon: <BellRing />,
  },
  {
    title: "billing and plans",
    href: "/settings/billing",
    info: "Manage your display settings .",
    icon: <CreditCard />,
  },
  {
    title: "emails",
    href: "/settings/emails",
    info: "Manage your emails settings .",
    icon: <Mail />,
  },
  {
    title: "passwords and authentications",
    href: "/settings/payments",
    info: "Manage your payments settings .",
    icon: <Fingerprint />,
  },
  {
    title: "post",
    href: "/settings/post",
    info: "Manage your Post settings .",
    icon: <PenLine />,
  },
  {
    title: "accessibility",
    href: "/settings/accessibility",
    info: "Manage your accessibility settings .",
    icon: <PersonStanding />,
  },
  {
    title: "sessions",
    href: "/settings/sessions",
    info: "Manage your sessions settings .",
    icon: <RadioTower />,
  },
];

export default function Settings({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <SettingsHeader settingsNav={settingsNav} />
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={settingsNav} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
