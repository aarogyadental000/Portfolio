"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  branches,
  getBranchBySlug,
  primaryBranch,
  type Branch,
} from "@/lib/clinic";
import {
  BRANCH_CHOSEN_KEY,
  BRANCH_STORAGE_KEY,
  getStoredBranchSlug,
} from "@/lib/branch";

type BranchContextValue = {
  branch: Branch;
  branches: Branch[];
  select: (slug: string) => void;
  hasChosen: boolean;
  markChosen: () => void;
};

const BranchContext = createContext<BranchContextValue | null>(null);

export function BranchProvider({ children }: { children: ReactNode }) {
  // Default to the primary branch on the server and during hydration to
  // avoid a mismatch with the pre-rendered HTML. A saved choice is applied
  // in an effect below (brief flash of the primary branch is accepted).
  const [branchSlug, setBranchSlug] = useState<string>(primaryBranch.slug);
  const [hasChosen, setHasChosen] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = getStoredBranchSlug();
      if (stored && stored !== primaryBranch.slug) {
        setBranchSlug(stored);
      }
      setHasChosen(false);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const branch = getBranchBySlug(branchSlug) ?? primaryBranch;

  useEffect(() => {
    window.localStorage.setItem(BRANCH_STORAGE_KEY, branch.slug);
  }, [branch.slug]);

  const select = useCallback((slug: string) => {
    if (!getBranchBySlug(slug)) return;
    setBranchSlug(slug);
    setHasChosen(true);
    window.localStorage.setItem(BRANCH_STORAGE_KEY, slug);
    window.localStorage.setItem(BRANCH_CHOSEN_KEY, "true");
  }, []);

  const markChosen = useCallback(() => {
    setHasChosen(true);
    window.localStorage.setItem(BRANCH_CHOSEN_KEY, "true");
  }, []);

  return (
    <BranchContext.Provider
      value={{ branch, branches, select, hasChosen, markChosen }}
    >
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const context = useContext(BranchContext);
  if (!context) {
    throw new Error("useBranch must be used within a BranchProvider");
  }
  return context;
}
