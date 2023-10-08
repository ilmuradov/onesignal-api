import { useEffect } from "react"
import OneSignal from "react-onesignal"
import runOneSignal from "@/utils/runOneSignal"

const Home = () => {
  useEffect(() => {
    runOneSignal()
  })

  const onHandleTag = (tag: string) => {
    OneSignal.User.addTag('tech', tag)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <button onClick={() => onHandleTag('nextjs')} className="rounded-3xl bg-gray-800 px-5 py-3 text-white font-bold">
        Add tag
      </button>
    </div>
  )
}

export default Home