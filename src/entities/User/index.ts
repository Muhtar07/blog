import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/userSchema';

export {
    userReducer,
    userActions,
    UserSchema,
    User,
    getUserAuthData,
};
