import { Schema } from 'mongoose';

import { settings } from './collection';

export const SettingSchema = new Schema({ ...settings });
