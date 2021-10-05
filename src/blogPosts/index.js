import express from "express";

const blogPostsRouter = express.Router();

// GET
blogPostsRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// GET:ID

blogPostsRouter.get("/:blogPostID", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// POST

blogPostsRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// PUT

blogPostsRouter.put("/:blogPostID", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// DELETE

blogPostsRouter.delete("/:blogPostID", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

export default blogPostsRouter;
