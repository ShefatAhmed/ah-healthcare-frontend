import AHFileUploader from "@/components/Forms/AHFileUploader";
import AHForm from "@/components/Forms/AHForm";
import AHInput from "@/components/Forms/AHInput";
import AHModal from "@/components/Shared/AHModal/AHModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {};
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

export default SpecialistModal;
