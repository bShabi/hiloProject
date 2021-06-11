import Layout from "../../../components/Layout";
import style from '@/styles/AboutMentors.module.css'
import AboutMentor from "@/components/Mentors/AboutMentor";
import Image from 'next/image'

export default function MentorProfile() {
    return (
        <Layout>

          <AboutMentor
           title="Our Mentors"
           content="Find & connect with expert mentors to help
           build the skills you will need to succeed in life"
           />

       
        </Layout>
    )
}
