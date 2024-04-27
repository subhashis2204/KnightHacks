import person1 from "../assets/person1.jpg"
import person2 from "../assets/person2.jpg"
import person3 from "../assets/person3.jpg"
import FaceTiles from "./FaceTiles"

function TileList() {
  const list = [
    {
      id: 1,
      name: "Person 1",
      image: person1,
      description: "This is a description for person 1",
    },
    {
      id: 2,
      name: "Person 2",
      image: person2,
      description: "This is a description for person 2",
    },
    {
      id: 3,
      name: "Person 3",
      image: person3,
      description: "This is a description for person 3",
    },
    {
      id: 4,
      name: "Person 1",
      image: person1,
      description: "This is a description for person 1",
    },
  ]

  return (
    <>
      {
        <div className="flex flex-wrap gap-2">
          {list.map((person) => (
            <FaceTiles
              key={person.id}
              image={person.image}
              name={person.name}
            />
          ))}
        </div>
      }
    </>
  )
}

export default TileList
