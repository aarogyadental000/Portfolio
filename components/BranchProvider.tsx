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
  getStoredBranchChosen,
  BRANCH_STORAGE_KEY,
  getStoredBranchSlug,
} from "@/lib/branch";

type BranchContextValue = {
  branch: Branch;
  branches: Branch[];
  select: (slug: string) => void;
  hasChosen: boolean;
  markChosen: () => void;
  requestOpenFab: () => void;
  fabOpenSignal: number;
};

const BranchContext = createContext<BranchContextValue | null>(null);

export function BranchProvider({ children }: { children: ReactNode }) {
  const [branchSlug, setBranchSlug] = useState<string>(primaryBranch.slug);
  const [hasChosen, setHasChosen] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = getStoredBranchSlug();
      if (stored && stored !== primaryBranch.slug) {
        setBranchSlug(stored);
      }
      setHasChosen(getStoredBranchChosen());
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

  const [fabOpenSignal, setFabOpenSignal] = useState(0);
  const requestOpenFab = useCallback(() => {
    setFabOpenSignal((c) => c + 1);
  }, []);

  return (
    <BranchContext.Provider
      value={{ branch, branches, select, hasChosen, markChosen, requestOpenFab, fabOpenSignal }}
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
