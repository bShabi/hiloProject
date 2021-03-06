import { useState } from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Forms.module.css'


export default function ImageUpload({ imageUploaded }) {

    // evtId token


    const [image, setImage] = useState(null)

    console.log(evtId);
    const handleSubmit = async (e) => {
        console.log(image);
        e.preventDefault()
        const formData = new FormData()
        formData.append('files', image)
        formData.append('ref', 'events')
        formData.append('refId', evtId)
        formData.append('field', 'image')

        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })
        console.log(res);
        if (res.ok) {
            imageUploaded()
        }
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <div className={styles.form}>
            <h1>Upload Event Image</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.file}>
                    <input type='file' onChange={handleFileChange} />
                </div>
                <input type='submit' value='Upload' className='btn' />
            </form>
        </div>
    )
}