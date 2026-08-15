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
import { BRANCH_STORAGE_KEY, getStoredBranchSlug } from "@/lib/branch";

type BranchContextValue = {
  branch: Branch;
  branches: Branch[];
  select: (slug: string) => void;
};

const BranchContext = createContext<BranchContextValue | null>(null);

export function BranchProvider({ children }: { children: ReactNode }) {
  const [branchSlug, setBranchSlug] = useState<string>(primaryBranch.slug);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = getStoredBranchSlug();
      if (stored && stored !== primaryBranch.slug) {
        setBranchSlug(stored);
      }
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
    window.localStorage.setItem(BRANCH_STORAGE_KEY, slug);
  }, []);

  return (
    <BranchContext.Provider value={{ branch, branches, select }}>
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
