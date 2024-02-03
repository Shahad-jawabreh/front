import Box  from "../box/Box";
import Tag from "../tag/Tag";
import styles from "./feedbake.module.css";
export function Feedback() {
let tags =["All" , "UI" , "UX" ,"Enhancement","Bug","Feature"]


  return (
    <div className={styles.main}>
      <div className={styles.column1}>
        <Box colorfull={true} extrapadding={true}>
          <h1>Fronted Mentor</h1>
          <h2>Feedback Board</h2>
        </Box>

        <Box>
          {
          tags.map((ele)=>{
            return <Tag mainclass='styles.tag' title={ele}/>
          }) 
          }
        </Box>
      </div>

      <div className={styles.column2}>secound</div>
    </div>
  );
}
