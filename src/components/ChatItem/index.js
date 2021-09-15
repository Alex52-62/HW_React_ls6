import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

export const ChatItem = ({ chat, onDelete, id }) => {
  const showName = useSelector((state) => state.showName);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <ListItem>
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
      <Button variant="contained" type="submit" onClick={handleDelete}>
        delete
      </Button>
    </ListItem>
  );
};
