import AHDatePicker from "@/components/Forms/AHDatePicker";
import AHForm from "@/components/Forms/AHForm";
import AHTimePicker from "@/components/Forms/AHTimePicker";
import AHModal from "@/components/Shared/AHModal/AHModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDateTime);
    values.endDate = dateFormatter(values.endDateTime);
    values.startTime = timeFormatter(values.startDateTime);
    values.endTime = timeFormatter(values.endDateTime);
    try {
      const res = await createSchedule(values);
      if (res?.data?.length) {
        toast.success("Schedules created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <AHModal open={open} setOpen={setOpen} title="Create Schedule">
      <AHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <AHDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <AHDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <AHTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <AHTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </AHForm>
    </AHModal>
  );
};

export default ScheduleModal;