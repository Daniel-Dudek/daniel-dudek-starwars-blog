import { useEffect, useState } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [current, setCurrent] = useState(null);
  const [todos, setTodos] = useState([]);

  // Function get todos list
  const getTodoList = () => {
    fetch("https://playground.4geeks.com/todo/users/Daniel", {
      method: "GET", // POST, PUT, DELETE
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        //console.log(response)
        setTodos(response.todos);
      })
      .catch((error) => console.error("Error fetching todo list:", error));
  };

  // This useEffect function will be executed only once, when the component is finally loaded for the first time.
  useEffect(() => {
    getTodoList();
  }, []);

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    fetch("https://playground.4geeks.com/todo/todos/Daniel", {
      method: "POST",
      body: JSON.stringify({
        label: inputValue,
        is_done: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        getTodoList();
        setInputValue("");
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  const handleDeleteTask = (id) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        getTodoList();
      })
      .catch((error) => console.error("Error deleting task:", error));
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
            todos.length === 0
              ? "There are no tasks, add new task"
              : "Add a new task"
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ListGroup className="my-4">
        {todos.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center"
            onMouseEnter={() => setCurrent(item.id)}
            onMouseLeave={() => setCurrent(null)}
          >
            {item.label}
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
