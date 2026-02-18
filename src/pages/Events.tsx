import { Button } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Events = () => {
  const [count, setCount] = useState<number>(0);
  const [posts, setPosts] = useState<IPost[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // document.title = count.toString();
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-center text-4xl">{count}</div>
      <div className="flex justify-center gap-4">
        <Button
          onPress={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </Button>
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </Button>
      </div>
      <div>
        {posts.map((e) => {
          return <h1 key={e.id}>{e.title}</h1>;
        })}
      </div>
    </div>
  );
};

export default Events;
