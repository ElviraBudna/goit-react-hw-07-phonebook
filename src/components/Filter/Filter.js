import { useDispatch } from 'react-redux';
import { FilterContainer, Label, Input } from './Filter.styled';
import { filterChange } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <FilterContainer>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        placeholder="Enter name of contact"
        onChange={e => {
          dispatch(filterChange(e.target.value));
        }}
      />
    </FilterContainer>
  );
}
