import Select from 'react-select';
import useDashboardController from '../../view-controllers/DashBoardController';

const Sort = () => {
  const {handleSortChange,register,errors,sortOptions} = useDashboardController()
   

   
  return (
   <form>
  <div>
        <label htmlFor="sort"></label>
        <Select
          id="sort"
          {...register("Sort", { required: true })}
          options={sortOptions}
          placeholder="Sort Option"
          onChange={handleSortChange}
          className="border text-black border-black rounded w-[200px]"
        />
        {errors.Sort && <span>This field is required</span>}
      </div>
   </form>
  )
}

export default Sort