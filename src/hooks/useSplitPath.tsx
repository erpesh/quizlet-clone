import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export default function useSplitPath(): string[] {
  const location = useLocation();
  const [splitPath, setSplitPath] = useState<string[]>(location.pathname.split("/"));

  useEffect(() => {
    setSplitPath(location.pathname.split('/'));
  }, [location.pathname]);

  return splitPath;
}