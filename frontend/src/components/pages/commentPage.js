import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import getUserInfo from '../../utilities/decodeJwt';

const CommentList = () => {
  const [user, setUser] = useState({})
  const [comments, setComments] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const [showModal, setShowModal] = useState(false);  

  useEffect(() => {
    setUser(getUserInfo())
  }, [])

  const {username} = user;

  useEffect(() => {
    fetchComments();
  }, []);


  const fetchComments = async () => {
    const response = await axios.get('http://localhost:8096/comments/getAll');
    setComments(response.data);
  };


  const handleEditComment = async (req, res) => {
    try {
      if(editedComment.trim().length !== 0) //checks to make sure that the new comment isnt empty or just white space
      {
      const response = await axios.post('http://localhost:8096/comments/editComment', {
        _id: selectedComment._id,
        comment: editedComment
      });
      } 
      else
      {
        window.alert("Comment needs contents!");
      }
      setSelectedComment(null);
      setEditedComment("");
      fetchComments();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };


  const handleCommentClick = (comment) => {
    setSelectedComment(comment)
    setEditedComment(comment.comment);
    if(username == comment.username)//if current user's username matches the comment's username 
    {
      setShowModal(true); //show modal
    }
  };

  //renders comment blocks, comments made by the user show an edit button
  const renderComments = () => {
    return comments.map((comment) => {
      if(username == comment.username){
      return (
        <div>
          <h4 className="text-primary">{comment.username}</h4>
          <p>{comment.comment}</p>
          <small className="text-muted">{comment.stationName}</small>
          <Button style={{color: "blue"}} variant = "text" onClick={() => handleCommentClick(comment)}>Edit</Button>
          <hr />
        </div>
      );
      }
      else{
        return (
          <div>
            <h4 className="text-primary">{comment.username}</h4>
            <p>{comment.comment}</p>
            <small className="text-muted">{comment.stationName}</small>
            <hr />
          </div>
        );
      }
   }
  )};


  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedComment(null);
    setEditedComment("");
  };


  const renderEditModal = () => {
    if (!selectedComment) return null;


    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="commentForm.ControlTextarea1">
              <Form.Label>Edit your comment:</Form.Label>
              <Form.Control as="textarea" rows={3} value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleEditComment}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  };


  return (
    <div className="container mt-5">
      <h2 className="mb-4">Comment List</h2>
      {renderComments()}
      {renderEditModal()}
    </div>
  );
};


export default CommentList;