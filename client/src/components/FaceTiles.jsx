function FaceTiles({ image, name }) {
  return (
    <>
      <div className="bg-gray-200 rounded-md p-7 flex flex-col gap-4 w-[15rem] items-center justify-center">
        <img src={image} alt="" className="rounded-full w-[8rem]" />
        <h1>{name}</h1>
      </div>
    </>
  )
}

export default FaceTiles
