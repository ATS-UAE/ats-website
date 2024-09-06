import { Button, Grid, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";

const ContactForm = () => {
    const form = useForm({
        initialValues: {
          email: '',
          firstName: '',
          lastName: '',
          number: '',
          massage: '',
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });

      
    return (
        <form>
            <Grid>
                <Grid.Col span={6}>
                    <TextInput
                        label="First Name"
                        placeholder="first name"
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        label="Family Name"
                        placeholder="last name"
                    />
                </Grid.Col>
            </Grid>
            <TextInput
                mt='lg'
                label="Email"
                placeholder="email"
            />
            <TextInput
                mt='lg'
                label="Number"
                placeholder="number"
            />
            <Textarea label='Message' placeholder="massage" mt='lg' />
            <Button mt='lg' radius={200}>Submit</Button>
        </form>
        
    );
}
 
export default ContactForm;