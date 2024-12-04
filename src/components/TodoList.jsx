import { useState } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";

const initialList = [
  {
    task: "Make the bed",
    id: crypto.randomUUID(),
  },
  {
    task: "Wash my hands",
    id: crypto.randomUUID(),
  },
];
const TodoList = () => {
  const [itemList, setItemList] = useState(initialList);
  const [inputValue, setInputValue] = useState("");
  const [current, setCurrent] = useState(null);

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = {
      task: inputValue,
      id: crypto.randomUUID(),
    };
    setItemList([...itemList, newTask]);
    setInputValue("");
  };

  const handleDeleteTask = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h1 className="text-center">Todo List</h1>
      <div className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder={
            itemList.length === 0
              ? "There are no tasks, add new task"
              : "Add a new task"
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ListGroup className="my-4">
        {itemList.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center"
            onMouseEnter={() => setCurrent(item.id)}
            onMouseLeave={() => setCurrent(null)}
          >
            {item.task}
            {current === item.id && (
              <Button
                variant="danger"
                size="sm"
                style={{ position: "absolute", right: "16px" }}
                onClick={() => handleDeleteTask(item.id)}
              >
                X
              </Button>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
export default TodoList;
