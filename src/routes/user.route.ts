import { Router } from "express";
import { deleteUser, getUser, patchUser, postUserLogin, postUserSignup } from "../controllers/user.controller";
import { authentication } from "../middlewares/auth";

const router = Router()

router.route('/signup').post(postUserSignup)
router.route('/login').post(postUserLogin)
router.route('/')
.get(getUser, authentication)
.patch(patchUser, authentication)
.delete(deleteUser, authentication)

export { router as userRouter }