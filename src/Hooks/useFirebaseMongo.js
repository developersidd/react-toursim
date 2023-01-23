import { useContext } from 'react';
import { FirebaseMongodbContext } from '../Context/FirebaseMongodbProvider';

const useFirebaseMongo = () => {
    return useContext(FirebaseMongodbContext);
}

export default useFirebaseMongo;