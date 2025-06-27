'use client';
import { useState } from 'react';
import { motion } from 'motion/react';

import { cn } from '../../lib/utils';
import ComparisonTable from '../ComparisonTable';
// import { cn } from "@/lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);

    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          'no-visible-scrollbar !relative flex w-full max-w-full flex-row items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible',
          containerClassName
        )}
      >
        <div className="mx-auto mt-12 rounded-full border-2 p-1">
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              className={cn('relative rounded-full px-4 py-2', tabClassName)}
              style={{
                transformStyle: 'preserve-3d',
              }}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {active.value === tab.value && (
                <motion.div
                  className={cn(
                    'absolute inset-0 rounded-full bg-gray-200 dark:bg-zinc-800',
                    activeTabClassName
                  )}
                  layoutId="clickedbutton"
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                />
              )}

              <span className="relative block text-black dark:text-white">
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        <FadeInDiv
          key={active.value}
          active={active}
          className={cn('mt-32', contentClassName)}
          hovering={hovering}
          tabs={tabs}
        />
      </div>
    </>
  );
};

export const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative h-full w-full border">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn('absolute left-0 top-0 h-full w-full', className)}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
        >
          <ComparisonTable />
        </motion.div>
      ))}
    </div>
  );
};
