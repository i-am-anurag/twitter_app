class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async createOne(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
       try {
        const result = await this.model.findByIdAndDelete(id);
        return result;
       } catch (error) {
            console.log('Error in deleting data from database in CRUD repo', error);
            throw error;
       }
    }

    async update(id,data){
        try {
            const result = await this.model.findByIdAndUpdate(id,data,{new:true});
            
            return result;
        } catch (error) {
            console.log("Error updating the record", error);
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);

            return result;   
        } catch (error) {
            console.log(`No Record found with id ${id}`, error);
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.find({});

            return result;
        } catch (error) {
            console.log("Unable to fetch records.", error);
            throw error;
        }
    }
};

export default CrudRepository;