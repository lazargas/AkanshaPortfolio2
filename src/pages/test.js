import { useState } from 'react'
import Link from 'next/link'
import style from "@/styles/test.module.css"

function MyLink() {
  const [loading, setLoading] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      window.location.href = e.currentTarget.href
    }, 500)
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      <Link  href="/sweetScapes">
      <div  onClick={handleClick}  className={style.ProjectTile1}>
                    <img
                      src="/assets/purp1.png"
                      className={"z-[2] opacity-0 hover:transition-all hover:duration-[0.6s] hover:ease-[ease] "+style.imtip}
                      alt=""
                    />
              </div>
      </Link>
    </>
  )
}

export default MyLink
