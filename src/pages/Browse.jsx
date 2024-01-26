import Header from "../container/Header"

const Browse = () => {
  console.log("from browse");
  
  return (
    <div className="flex flex-col justify-between gap-10">
      <Header btnName="logout"/>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default Browse