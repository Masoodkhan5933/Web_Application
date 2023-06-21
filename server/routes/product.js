import express from 'express'
import { getProduct,addProduct,deleteProduct ,updateProduct } from '../controller/productController.js'

const router = express.Router()

router.get('/',getProduct)
router.post('/',addProduct)
router.delete('/:productId',deleteProduct);
router.put('/:productId', updateProduct)

export default router