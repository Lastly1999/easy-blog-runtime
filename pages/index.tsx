import type { NextPage } from 'next'
import AppContent from "../layout/Content/Content";
import AppHeader from "../layout/Header/Header"
import indexStyle from "./index.module.css";


const Home: NextPage = () => {
  return (
    <AppContent>
      <AppHeader>
        <div className="italic text-lg">RunTime</div>
      </AppHeader>
      <AppContent>
        <div>
        </div>
      </AppContent>
    </AppContent>
  )
}

export default Home
