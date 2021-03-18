import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
   <Container>

     <MainHeader title='Budget'/>
     <DisplayBalance title='Your Balance' value='25,345.00' size='small'/>

     <DisplayBalances/>
     <MainHeader title='History' type='h3'/>

     <EntryLine description='income' value='$450.00'/>
     <EntryLine description='expense' value='$120.00' isExpense/>
     {/* <EntryLine description='income' value='$1,340.00'/>
     <EntryLine description='expense' value='$80.00' isExpense/> */}

     <MainHeader title='Add new transaction' type='h3'/>
     <NewEntryForm/>
   </Container>
  );
}

export default App;
