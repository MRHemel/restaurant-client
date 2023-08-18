import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { app } from "../firebase/firebase.config";

const useAdmin = () => {
    const { user } = useAuth();
    const { } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await app.get()
        }
    })
};

export default useAdmin;