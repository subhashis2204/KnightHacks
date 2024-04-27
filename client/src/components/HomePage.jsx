import logo from "../assets/logo.png"
import image from "../assets/image1.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()

  const [url, setUrl] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()

    setUrl("")
    console.log("hello world")

    navigate("/app")
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setUrl(e.target.value)
  }

  return (
    <>
      <div className="bg-amber-100">
        <img src={logo} className="mx-auto max-w-1/2" />
      </div>
      <div className="min-h-40 flex items-center justify-center bg-amber-50">
        <form className="grow p-2" onSubmit={handleSubmit}>
          <div className="flex items-center p-2 gap-4 grow">
            <label htmlFor="" className="text-xl italic">
              Enter your url here :
            </label>
            <input
              type="text"
              className="bg-gray-100 p-2 rounded-md border-2 grow border-gray-300 "
              value={url}
              onChange={handleChange}
            />
            <button
              className="bg-green-700 p-2 text-white rounded-md"
              type="Submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="bg-yellow-200">
        <div className="text-3xl text-center font-bold py-4">
          Steps to use the application
        </div>
        <div className="p-2 col columns-2 gap-2 w-full">
          <div className="col-start-0 col-span-1 flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl font-bold">Step 1</h1>
            <p className="text-md">
              First paste the embed link in the homepage
            </p>
            <img src={image} alt="" className="w-4/5" />
          </div>
          <div className="col-start-0 col-span-1 flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl font-bold">Step 2</h1>
            <p className="text-md">Once your speech is done. Click on stop.</p>
            <img src={image} alt="" className="w-4/5" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage