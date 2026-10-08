import PageFooter from "../components/PageFooter";
import PageNavigation from "../components/PageNavigation";

import { FaSearch, FaPenNib, FaBookOpen } from "react-icons/fa";

const missionData = [
  {
    icon: <FaSearch />,
    title: "Easy Discovery",
    description:
      "Help readers discover useful articles quickly through search and category-based browsing.",
  },
  {
    icon: <FaPenNib />,
    title: "Simple Publishing",
    description:
      "Give authorized admins simple tools to create, publish, organize, and manage blog content.",
  },
  {
    icon: <FaBookOpen />,
    title: "Better Reading",
    description:
      "Provide a clean, responsive, and comfortable reading experience without unnecessary distractions.",
  },
];

const Mission = () => {
  return (
    <div className="min-h-screen bg-[#f5f6fb] overflow-x-hidden flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
          {/* Mission Hero */}

          <section className="text-center pt-0 pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary"></span>

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Our Purpose
              </p>
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Make discovering, reading, and{" "}
              <span className="text-primary">sharing ideas simple.</span>
          
            </h1>

            <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base text-gray-600 leading-7">
              A focused purpose behind every feature we build.
            </p>
          </section>
          {/* Core Focus */}
          <section className="bg-white border border-gray-200">
            <div className="text-center py-6 border-b border-gray-200">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Our Core Focus
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
              {missionData.map((item, index) => (
                <div
                  key={item.title}
                  className={`text-center px-6 py-8 sm:py-10 ${
                    index !== missionData.length - 1
                      ? "border-b sm:border-b-0 sm:border-r border-gray-200"
                      : ""
                  }`}
                >
                  <div className="text-primary text-2xl mb-5 flex justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 text-center px-6 py-7">
              <p className="text-xs sm:text-sm text-gray-700 leading-6 max-w-2xl mx-auto">
                By keeping content accessible and the experience simple,{" "}
                <span className="text-primary font-medium">Quickblog</span>{" "}
                gives useful ideas a place to reach readers.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="pt-8 sm:pt-9">
            <PageNavigation />
          </div>
        </div>
      </main>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default Mission;
