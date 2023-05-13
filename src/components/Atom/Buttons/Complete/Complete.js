import style from './Complete.module.css'
const Complete = (props) => {
  const { text, styles, onClick } = props;
  return (
    <div>
      <button className={`${style.completeBtn}`} style={styles} onClick={onClick}  >
        {text}
      </button>
    </div>
  );
};
export default Complete