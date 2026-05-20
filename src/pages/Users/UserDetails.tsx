import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";
import { Routing } from "../../routes/routing";

const UserDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(Routing.Users);
  };
  return (
    <section>
      <div className="flex justify-between items-center">
        <p className="text-2xl">User Details</p>
        <CustomButton type="button" variant="bordered" onClick={handleBack} className="shadow-sm">
          Back to Dashboard
        </CustomButton>
      </div>
    </section>
  );
};

export default UserDetails;
