import React from "react";
import SearchIcon from "../../assets/Searchicon.png"
import styles from  '../Search/Search.module.css'


export default function NavSearch({search}){
    return (
<div class="input-group" className={styles.formcontrol}>
  <input type="text" class="form-control" placeholder="Search a song of your choice" aria-label="Search a song of your choice" aria-describedby="basic-addon2"></input>
  <div class="input-group-append">
    <button type="submit"><img src={SearchIcon}/></button>
  </div>
</div>

    );
}
