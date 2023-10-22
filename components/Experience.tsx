"use client"

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading"

// vertical timeline component
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
    const { ref } = useSectionInView("Experience");

  return (
    <section ref={ref} id="experience" className="sm:mb-[200rem] scroll-mt-28">
        <SectionHeading>Experience</SectionHeading>
        <VerticalTimeline>
            
        </VerticalTimeline>
    </section>
  )
}

export default Experience