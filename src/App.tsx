import { useQuery } from "@tanstack/react-query";
import { getSkips } from "./requests";

import Skip from "./components/Skip";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { SkipType } from "./types";

export default function App() {
  const [selectedSkip, setSelectedSkip] = useState<SkipType | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["skips"],
    queryFn: getSkips,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (data && !selectedSkip) {
      const defaultSkip = data.find((skip) => skip.id === 17934);
      if (defaultSkip) {
        setSelectedSkip(defaultSkip);
      }
    }
  }, [data, selectedSkip]);

  if (isLoading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-center">Error: {error.message}</div>;

  return (
    <div className="bg-gray-950 w-full min-h-[100vh]">
      <main className="py-5 px-8 max-w-7xl mx-auto">
        <Header />

        {/* Skips Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {data?.map((skip) => (
            <Skip
              key={skip.id}
              skip={skip}
              selectedSkip={selectedSkip}
              onSelect={() => setSelectedSkip(skip)}
            />
          ))}
        </div>

        <Footer skip={selectedSkip} />
      </main>
    </div>
  );
}
