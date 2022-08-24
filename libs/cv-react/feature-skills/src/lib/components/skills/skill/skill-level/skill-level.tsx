import './skill-level.scss';
/* eslint-disable-next-line */
export interface SkillLevelProps {
  level: number;
  base: number;
  numberOfBars: number;
}

export const SkillLevel: React.FC<SkillLevelProps> = ({
  level,
  base,
  numberOfBars,
}) => {
  const getWidth = () => {
    if (base - 100 / numberOfBars < level && level <= base) {
      const diff = level - (base - 100 / numberOfBars);
      return `${diff * numberOfBars}%`;
    } else if (base > level) {
      return 0;
    } else {
      return '100%';
    }
  };
  const style = {
    width: getWidth(),
  };
  return <div className="skill-level" style={style}></div>;
};

export default SkillLevel;
