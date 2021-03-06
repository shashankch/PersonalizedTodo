import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Display from './Display';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Todo(props) {
  //destructuring required props
  const {
    task,
    onTaskChange,
    addTask,
    removeTask,
    completeTask,
    status,
    filter,
    filterList,
    handleChange,
  } = props;

  return (
    <div className='main_div'>
      {status ? <div className='success-dialog'>{status}</div> : null}
      <div className='center_div'>
        <h1>Add Todo</h1>

        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value='Done'>Done</MenuItem>
          <MenuItem value='Not-Done'>Not-Done</MenuItem>
          <MenuItem value='filter'>Filter</MenuItem>
        </Select>
        <br />

        <input
          type='text'
          value={task ? task.text : ''}
          placeholder='What to do now ?'
          onChange={onTaskChange}
        />

        <Button className='newBtn' onClick={addTask}>
          <AddIcon />
        </Button>
        <br />
        <ul>
          {filterList.map((task) => {
            return (
              <Display
                key={task.id}
                id={task.id}
                task={task}
                completeTask={completeTask}
                removeTask={removeTask}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
