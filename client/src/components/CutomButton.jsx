function CustomButton({ onClick, text }) {
  return (
    <>
      <button onClick={onClick} className="bg-gray-100 px-3 py-2 rounded-md">
        {text}
      </button>
    </>
  )
}

export default CustomButton
