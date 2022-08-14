import {
  ProjectsSwitcherEnum,
  PROJECTS_SWITCHERS,
} from "../../../../assets/types/switchers";
import SwitcherButton from "../../../../components/UI/buttons/switcher/SwitcherButton";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { setProjectsFilter } from "../../../../redux/home/homeSlice";
import scss from "./homeProjectsSwitcher.module.scss";

const HomeProjectsSwitcher = () => {
  const { projectsFilter } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();

  const handleSwitcherClick = (type: ProjectsSwitcherEnum) => () =>
    dispatch(setProjectsFilter(type));

  return (
    <div className={scss.root}>
      {Object.entries(PROJECTS_SWITCHERS).map(([id, name]) => (
        <SwitcherButton
          active={id === projectsFilter}
          key={id}
          className={scss.item}
          onClick={handleSwitcherClick(id as ProjectsSwitcherEnum)}
        >
          {name}
        </SwitcherButton>
      ))}
    </div>
  );
};

export default HomeProjectsSwitcher;
