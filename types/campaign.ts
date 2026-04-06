// types/campaign.ts

import React from "react";

/* --------------------------------
   Shared Enums / Unions
--------------------------------- */

export type CampaignStatus = "active" | "paused" | "draft";

/**
 * UI platforms (what you actually render)
 * MUST match the strings used in components
 */
export type CampaignPlatform = "Meta" | "Google" | "Facebook" | "Tiktok";

/* --------------------------------
   Core Campaign (API / Table Model)
--------------------------------- */

export interface Campaign {
  id: number;
  name: string;
  status: CampaignStatus;
  platforms: CampaignPlatform[];
  spend: string;
  performance: {
    impressions: string;
    ctr: string;
  };
}

/* --------------------------------
   Campaign Card / UI Model
--------------------------------- */

export interface CampaignCardData {
  id: number;
  title: string;
  status: CampaignStatus;
  type: string;
  platforms: CampaignPlatform[];
  budget: string;
  spend: string;
  impressions: string;
  clicks: string;
  ctr: string;
  conversions: string;
  roas: string;
  date: string;
}

/* --------------------------------
   Component Props
--------------------------------- */

export interface CampaignCardProps extends CampaignCardData {}

export interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  danger?: boolean;
}

export interface BadgeProps {
  status: CampaignStatus;
}

export interface KpiProps {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface StatProps {
  label: string;
  value: string;
}

export interface ChipProps {
  children: React.ReactNode;
}
