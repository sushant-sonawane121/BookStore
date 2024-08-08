import list from "../../public/list.json";
import Cards from "../components/Cards";
const Books = () => {
  console.log(list);
  return (
    <>
      <section className="p-4 px-4 mt-2 md:mt-18 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards
              imageurl={item.image}
              name={item.name}
              title={item.title}
              price={item.price}
              category={item.category}
              key={item.id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Books;
