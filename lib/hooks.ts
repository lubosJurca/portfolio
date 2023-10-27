import { useActiveSection } from "@/context/activeSectionProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionNameProps} from "./types";


export function useSectionInView( sectionName : SectionNameProps,threshold = 0.75) {
  // ************
  // this code changes the active section based on the scroll position
  const { ref, inView } = useInView({
    threshold
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, setActiveSection, sectionName]);

  // ****************
  return {
    ref,
  };
}
