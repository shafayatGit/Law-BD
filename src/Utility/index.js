import {
    toast
} from "react-toastify";
import Swal from "sweetalert2";

// For Checking the storage have previous data or not
export const getBookmark = () => {
    const bookmark = localStorage.getItem("bookmark");
    if (bookmark) {
        return JSON.parse(bookmark)
    }
    return []
}




// For Saving in LocalStorage
export const addBookmark = (doctor) => {
    // console.log(doctor);
    const bookmark = getBookmark();
    const isExist = bookmark.find(book => book.license_number === doctor.license_number);
    if (isExist) return Swal.fire({
        title: `You have already booked an appointment for ${doctor.name}`,
        icon: "question",
        draggable: true
    })

    else {
        Swal.fire({
            title: `You have booked an appointment for ${doctor.name}`,
            icon: "success",
            draggable: true
        });
    }


    bookmark.push(doctor)
    localStorage.setItem("bookmark", JSON.stringify(bookmark))
}

//Removing From Localstorage
export const removeBookmark = (number) => {
    const bookmark = getBookmark();
    const remaining = bookmark.filter((doc) => doc.license_number !== number)
    localStorage.setItem("bookmark", JSON.stringify(remaining));

}