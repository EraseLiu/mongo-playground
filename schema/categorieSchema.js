import { Schema } from 'mongoose';

import { categories } from './collection';

export const CategoriesSchema = new Schema({ ...categories });
