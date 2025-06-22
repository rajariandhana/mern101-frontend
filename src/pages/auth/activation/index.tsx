import AuthLayout from "@/components/layouts/AuthLayout"
import authServices from "@/services/auth.service";
import Activation from "@/components/views/Auth/Activation";
interface PropTypes {
    status: 'success'|'failed';
}

const ActivationPage = (props: PropTypes) => {
    return (
        <AuthLayout title="Acara | Activation">
            <Activation {...props}></Activation>
        </AuthLayout>
    )
}

export async function getServerSideProps(context: {query: {code:string}}){
    try {
        const result = await authServices.activation({code: context.query.code})
        console.log(result.data.data);
        let status = "failed";
        if (result.data.data) {
            status = "success";
        } 
        return {
            props: {
                status: status,
            }
        }
    } catch (error) {
        
    }
}
export default ActivationPage;