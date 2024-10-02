import {
  ArrowRight,
  Leaf,
  Recycle,
  Users,
  Coins,
  CheckCircle2Icon,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function AnimatedGlobe() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bg-green-400 rounded-full inset-2 opacity-40 animate-ping"></div>
      <div className="absolute bg-green-300 rounded-full inset-4 opacity-60 animate-spin"></div>
      <div className="absolute bg-green-200 rounded-full inset-6 opacity-80 animate-bounce"></div>
      <Leaf className="absolute inset-0 w-16 h-16 m-auto text-green-600 animate-pulse" />
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-8 text-center transition-all duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-lg">
      <div className="p-4 mb-6 bg-green-100 rounded-full">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="mb-4 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function ImpactCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  icon: React.ElementType;
}) {
  return (
    <div className="p-6 transition-all duration-300 ease-in-out border border-gray-100 rounded-xl bg-gray-50 hover:shadow-md">
      <Icon className="w-10 h-10 mb-4 text-green-500" />
      <p className="mb-2 text-3xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}

const Home = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      <section className="mb-20 text-center">
        <AnimatedGlobe />
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-gray-800">
          EcoTrack{" "}
          <span className="text-green-600">Waste Management Platform</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-gray-600">
          Be a part of our community and revolutionize waste management with
          smart, efficient, and rewarding solutions. Together, let's make a
          cleaner, greener future!
        </p>
        <Button className="px-12 py-6 text-lg text-white bg-green-600 rounded-full hover:bg-green-700">
          Get Started
        </Button>
      </section>
      <section className="grid gap-10 mb-20 md:grid-cols-3">
        <FeatureCard
          icon={Leaf}
          title="Eco-Friendly"
          description="Our platform is designed to promote eco-friendly practices and reduce waste."
        />
        <FeatureCard
          icon={Coins}
          title="Earn Rewards"
          description="Earn rewards for recycling and contributing to a cleaner environment."
        />
        <FeatureCard
          icon={Users}
          title="Community Driven"
          description="Join our community and work together to make a difference."
        />
      </section>
      <section className="p-10 mb-20 bg-white shadow-lg rounded-3xl">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
          Our Impact
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          <ImpactCard
            title="Waste Collected"
            value={"20.85 Kg"}
            icon={Recycle}
          />
          <ImpactCard
            title="Reports Submitted"
            value={"20.85 Kg"}
            icon={CheckCircle2Icon}
          />
          <ImpactCard title="Tokens Earned" value={"20.85 Kg"} icon={Coins} />
          <ImpactCard title="CO₂ Offsetted" value={"20.85 Kg"} icon={Leaf} />
        </div>
      </section>
    </div>
  );
};

export default Home;
