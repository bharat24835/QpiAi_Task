
# QPI - AI ASSIGNMENT

This task is assigned by Nithin , Arpit and Nikita.

Build a file upload interface based on the provided [Figma](https://www.figma.com/design/nr4xRZFvJewWUoPN0D7Xpq/Assignment?node-id=0-1&p=f&t=Zl5vQfUdIZoEqOMO-0) design, supporting drag-and-drop or manual file/folder selection, live preview, validation, and upload progress tracking.



## Features

- Allow users to select single or multiple files via:  Drag-and-drop area and File picker button

- Supported formats: .jpg, .jpeg, .png, .csv
- Validation checks: File type and File size (e.g., max 10MB per file)

- Show real-time file preview before uploading: Image thumbnails for image files and File names and icons for CSV/JSON.

- Allow users to: Add more files , Replace files and Delete selected files

- Display live upload progress per file (progress bar or percentage)
- Show clear and informative error messages for: Invalid file types , Oversized files and Failed uploads (with retry)
- File Sanitization & Security

- Support file upload to Supabase





## Tech Stack

####  Frontend - NextJS (App Router)
#### DataBase :- Supabase
#### Language :- Typescript 
#### UI Library :- Tailwind Css and Mantine
 




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_SUPABASE_URL`

`NEXT_PUBLIC_SUPABASE_ANON_KEY`


## Demo

#### Link :- https://qpi-task.netlify.app/projects

#### Figma :- [figmaDesign](https://www.figma.com/design/nr4xRZFvJewWUoPN0D7Xpq/Assignment?node-id=0-1&p=f&t=Zl5vQfUdIZoEqOMO-0)

#### Assignment :- [Docs](https://docs.google.com/document/d/1AY1W0eImpS3N91GVakAvm9llcjjYZYutYKZRhWlDGTc/edit?tab=t.0)

