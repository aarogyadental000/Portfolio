import { branches } from "./clinic";

export const BRANCH_STORAGE_KEY = "dental-clinic-branch";
export const BRANCH_CHOSEN_KEY = "dental-clinic-branch-chosen";

export function isBranchSlug(value: string | null): value is string {
  return !!value && branches.some((branch) => branch.slug === value);
}

export function getStoredBranchSlug(): string | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(BRANCH_STORAGE_KEY);
  return isBranchSlug(stored) ? stored : null;
}

export function getStoredBranchChosen(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(BRANCH_CHOSEN_KEY) === "true";
}
