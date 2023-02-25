import { Document, model, Schema } from "mongoose";

const dogSchema = new Schema<IDog>({
    name: String,
    age: Number,
    weight: Number,
    favouriteToy: String
})

interface IDog extends Document {
    name: string;
    age: number;
    weight: number;
    favouriteToy: String;
}

const Dog = model<IDog>('Dog', dogSchema);

export default Dog;