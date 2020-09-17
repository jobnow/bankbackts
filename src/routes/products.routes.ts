import { Router } from "express";



const ProductRouter = Router()

ProductRouter.get('/',(require,response)=>{
    response.json({menssage: 'estamos ok'})
})

export default ProductRouter