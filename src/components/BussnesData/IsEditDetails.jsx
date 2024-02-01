import React from "react"
import { observer } from "mobx-react"
import BusinessDetails from "./BusinessDetails.jsx"
import EditBusinessDetails from "./EditBusinessDetails.jsx"
import AdminEdit from "../../store/AdminEdit.js"

const IsEditDetails = (observer(() => {

    return (
        <>
           {/* {!AdminEdit.isEdit ? < BusinessDetails/> : < EditBusinessDetails/>} */}
        </>
    )
}))

export default IsEditDetails