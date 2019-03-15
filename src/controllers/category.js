import categoryModel from '../models/category'

class Category {
    /**
     * 
     * @param {*} res 
     */
    static getAllCategory(req, res) {
        categoryModel.findAll()
        .then(categories => {
            res.status(200).json({
                status: 200,
                data: categories
            })
        })
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static getCategory(req, res){
        const id = req.params.id;
        categoryModel.findByPk(id)
        .then(category => {
            res.status(200).json({
                status: 200,
                data: category
            })
        })
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    static createCategory(req, res){
        const { name, parent } = req.body
        categoryModel.create({name: name, parent: parent})
        .then(category => {
            res.status(200).json({
                status: 200,
                data: category
            })
        }).catch(err => {
            res.status(500).json({
                status: 500,
                message: err
            })
        })
    }
    /**
     * 
     * @param {*id,*name,*parent} req 
     * @param {*category} res 
     */
    static UpdateCategory(req, res){
        const { id } = req.params;
        const { name, parent } = req.body;
            categoryModel.update(
                {name: name, parent: parent},
                {where: {id: id}}
            )
                .then(result => {
                    res.status(201).json({
                        status: 201,
                        data: result
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        status: 500,
                        message: err
                    })
                })
    }
    /**
     * 
     * @param {*category ID} req 
     * @param {*deleted category} res 
     */
    static deleteCategory(req, res) {
        const { id } = req.params;
        categoryModel.destroy({
            where: {id: id}
        })
        .then( deleted => {
            res.status(202).json({
                status: 202,
                data: deleted
            });
        }).catch(err => {
            res.status(500).json({
                status: 500,
                message: err
            })
        })
    }
}

export default Category;