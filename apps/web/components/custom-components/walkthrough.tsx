"use client";

import Joyride, { Step } from "react-joyride";

export function Walkthrough({ steps, run, setRun }: { steps: Step[]; run: boolean; setRun: any }) {
  return (
    <Joyride
      beaconComponent={(props) => <div {...props} className="hidden" />}
      continuous
      showProgress
      showSkipButton
      scrollToFirstStep
      run={run}
      callback={({ status }) => {
        if (status === "finished" || status === "skipped" || status === "error") {
          setRun(false);
        }
        // if (status === "running") {
        //   : "hsl(var(--popover))";
        // }
      }}
      steps={steps}
      styles={{
        tooltip: {
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          borderRadius: 10,
          border: "1px solid hsl(var(--border))",
        },
        tooltipContainer: {
          textAlign: "center",
        },
        tooltipTitle: {
          fontSize: "1.2rem",
          fontWeight: 500,
          fontFamily: "var(--font-heading)",
        },
        tooltipContent: {
          fontSize: "1rem",
          fontWeight: 400,
          fontFamily: "var(--font-body)",
        },
        tooltipFooter: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        buttonNext: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "hsl(var(--foreground))",
          color: "hsl(var(--background))",
          outline: "none",
          width: "30%",
          height: "2.2rem",
          fontSize: "1rem",
          fontWeight: 500,
          fontFamily: "var(--font-heading)",
        },
        buttonClose: {
          color: "hsl(var(--foreground))",
        },
        buttonBack: {
          marginRight: 10,
          color: "hsl(var(--foreground))",
          fontFamily: "var(--font-heading)",
        },
        buttonSkip: {
          color: "hsl(var(--foreground))",
          fontFamily: "var(--font-heading)",
        },
        options: {
          backgroundColor: "hsl(var(--background))",
          textColor: "hsl(var(--foreground))",
          overlayColor: "hsl(var(--popover))",
          primaryColor: "hsl(var(--foreground))",
          arrowColor: "hsl(var(--foreground))",
          zIndex: 1000,
        },
      }}
    />
  );
}
