import AHFileUploader from "@/components/Forms/AHFileUploader";
import AHForm from "@/components/Forms/AHForm";
import AHInput from "@/components/Forms/AHInput";
import AHModal from "@/components/Shared/AHModal/AHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      if(res?.id){
        toast.success("Specialty created successfully!!!");
        setOpen(false)
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <AHModal open={open} setOpen={setOpen} title="Create A New Specialty">
      <AHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <AHInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <AHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </AHForm>
    </AHModal>
  );
};

export default SpecialtyModal;
