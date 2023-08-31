import { AppBar } from "../../components/AppBar"
import { Hero } from "./Hero"
import { HomeInformation } from "./HomeInformation"

export default function Home() {
  return (
    <>
      <AppBar />
      <Hero />
      <HomeInformation />
    </>
  )
}
// {/* This one here is for to test tooltip you continue this, I donno much */}
// <div className="h-screen w-screen flex items-center justify-center">
// <Tooltip text={"Hello Guys"}>Hello</Tooltip>
// </div>
