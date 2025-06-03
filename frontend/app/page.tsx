// "use client";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import OAuthLogin from "../components/OAuthLogin";
// import { HeroSection } from "@/components/blocks/hero-section-dark";
// export default function Home() {
//   return (
//     <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
//       <HeroSection
//       title="Welcome to CRM Platform"
//       subtitle={{
//         regular: "Build stronger relationships.",
//         gradient: "Unify your sales, support, and success in one place.",
//       }}
//       // description="Turn your concepts into powerful digital solutions with ease."
//       ctaNode={<OAuthLogin/>}
//       // bottomImage={{
//       //   light: "https://www.launchuicomponents.com/app-light.png",
//       //   dark: "https://www.launchuicomponents.com/app-dark.png",
//       // }}
//       gridOptions={{
//         angle: 65,
//         opacity: 0.4,
//         cellSize: 50,
//         lightLineColor: "#4a4a4a",
//         darkLineColor: "#2a2a2a",
//       }}
//     />
 

//     </GoogleOAuthProvider>
//   );
// }
"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import OAuthLogin from "../components/OAuthLogin";

export default function Home() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
      <div className="flex h-screen">
        {/* Left Branding Panel */}
        <div className="w-1/2 bg-blue-900 text-white flex flex-col justify-center px-20">
          <h1 className="text-5xl font-bold mb-6">Welcome to CRM</h1>
          <p className="text-lg leading-relaxed">
            Manage your sales, support, and customer relationships all in one place.
          </p>
          <div className="mt-10">
            <img
              src="https://illustrations.popsy.co/white/business-deal.svg"
              alt="CRM Illustration"
              className="w-3/4"
            />
          </div>
        </div>

        {/* Right Login Panel */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mb-6">Sign in to continue</h2>
          <div className="w-64">
            <OAuthLogin />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
