import { createContext, useContext } from "react";
import useClinicState from "./useClinicState.js";
const WorkspaceContext = createContext(null);
export function WorkspaceProvider({ onLogout, children }) {
  const clinic = useClinicState();
  return <WorkspaceContext.Provider value={{ ...clinic, onLogout }}>{children}</WorkspaceContext.Provider>;
}
export function useWorkspace() {
  const workspace = useContext(WorkspaceContext);
  if (!workspace) throw new Error("WorkspaceProvider is required.");
  return workspace;
}
