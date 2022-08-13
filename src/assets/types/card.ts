import React from "react";

export interface IAboutCard {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  background: string;
}
