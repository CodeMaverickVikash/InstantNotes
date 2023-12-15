import React from "react";
import download from './download.jpg';

export default function About() {
    // const pStyle = {width: '508px', display: 'inline-block', marginRight: '17px'}
    // const img = {width: '500px'};
    return (
        <div className="container">
            <h2>About Us</h2>
            <p className="para">Note-taking applications (also called note-taking apps) allow students to:

                Store all notes and important information digitally, usually in a cloud-based storage system.
                Type, write, and draw notes on the device of choice just as one would using pen and paper.
                Add files, multimedia, and live recordings to their notes to enrich the meaning and context.
                Collaborate and share notes with others instantaneously and in real-time.</p>
            <img src={download} className="img"/>
        </div>
    )
}