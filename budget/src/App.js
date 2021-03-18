import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
   <Container>

     <Header as='h1'>
       Budget
     </Header>

     <Statistic size="small">
       <Statistic.Label>Your Balance:</Statistic.Label>
       <Statistic.Value>25,899</Statistic.Value>
     </Statistic>

     <Segment textAlign='center'>
       <Grid columns={2} divided>
         <Grid.Row>
           <Grid.Column>
             <Statistic size='tiny' color='green'>
               <Statistic.Label styel={{textAlign: 'left'}}>
                 Income:
               </Statistic.Label>
               <Statistic.Value>12,345</Statistic.Value>
             </Statistic>
           </Grid.Column>
           <Grid.Column>
           <Statistic size='tiny' color='red'>
               <Statistic.Label styel={{textAlign: 'left'}}>
                 Expenses:
               </Statistic.Label>
               <Statistic.Value>1,345</Statistic.Value>
             </Statistic>
           </Grid.Column>
         </Grid.Row>
       </Grid>
     </Segment>

     <Header as='h3'>
       History
     </Header>

     <Segment color='red'>
       <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$787878</Grid.Column>
          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
       </Grid>
     </Segment>

     <Segment color='green'>
       <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$787878</Grid.Column>
          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
       </Grid>
     </Segment>

     <Segment color='red'>
       <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$787878</Grid.Column>
          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
       </Grid>
     </Segment>

     <Header as='h3'>Add new transaction</Header>
     <Form unstackable>
       <Form.Group>
         <Form.Input icon='tags' width={12} label='Description' placeholder='New tansaction'/>
         <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder='100.00'/>
       </Form.Group>
       <Button.Group styel={{ marginTop: 20}}>
         <Button>Cancel</Button>
         <Button.Or />
         <Button>Ok</Button>
       </Button.Group>
     </Form>

   </Container>
  );
}

export default App;
