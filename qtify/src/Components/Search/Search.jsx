import React from "react";
import SearchIcon from "../../assets/Searchicon.png"
import styles from  '../Search/Search.module.css'


export default function NavSearch({placeholdertext}){
    return (
<div class="input-group" className={styles.formcontrol}>
  <input type="text" class="form-control" placeholder={placeholdertext} aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <div class="input-group-append">
    <button type="submit"><img src={SearchIcon}/></button>
  </div>
</div>

    );
}
