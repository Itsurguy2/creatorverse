# WEB103 Prework - *👉🏿 Creatorverse*

Submitted by: **👉🏿 Jesse Rosenthal**

About this web app: **👉🏿 # ✨ Creatorverse

A beautiful web application to discover and showcase amazing content creators from around the web.

## 🌟 Features

- **View All Creators** - Browse through a collection of content creators displayed as beautiful cards
- **Add New Creators** - Easily add new content creators with their details
- **View Individual Creators** - See detailed information about each creator
- **Edit Creator Info** - Update creator details when needed
- **Delete Creators** - Remove creators from the collection
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Beautiful UI** - Stunning gradient backgrounds and glass morphism effects

## 🎨 Design

The app features a custom color palette:
- **Purple Baseline**: `#161748` - Main background foundation
- **Green Treeline**: `#478559` - Secondary buttons and accents
- **Pink Highlight**: `#f95d9b` - Interactive elements and hover effects
- **Bluewater Lowlight**: `#39a0ca` - Links and contrast elements

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Supabase** - Backend database and API
- **Pico CSS** - Minimal CSS framework for styling
- **JavaScript** - Programming language

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd creatorverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase Database**
   Create a table called `creators` with the following columns:
   - `id` (Primary Key, Auto-increment)
   - `name` (Text, Required)
   - `url` (Text, Required)  
   - `description` (Text, Optional)
   - `imageURL` (Text, Optional)
   - `created_at` (Timestamp, Auto-generated)

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
creatorverse/
├── src/
│   ├── components/
│   │   └── Card.jsx          # Creator card component
│   ├── pages/
│   │   ├── ShowCreators.jsx  # Home page - view all creators
│   │   ├── AddCreator.jsx    # Add new creator form
│   │   ├── EditCreator.jsx   # Edit existing creator
│   │   └── ViewCreator.jsx   # View individual creator details
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # Custom styles and color theme
│   ├── supabaseClient.js     # Supabase configuration
│   └── main.jsx              # App entry point
├── .env.local                # Environment variables (not in repo)
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎯 Usage

1. **View Creators**: Visit the home page to see all creators in a beautiful card layout
2. **Add Creator**: Click "Add New Creator" to add someone new to the collection
3. **View Details**: Click "View" on any creator card to see their full information
4. **Edit Creator**: Use the "Edit" button to modify creator details
5. **Visit Creator**: Click "Visit Channel" to go to the creator's actual website/channel
6. **Delete Creator**: Remove creators using the delete button (with confirmation)

## 🌐 Live Demo

[Add your deployed app URL here when available]

## 📸 Screenshots

[Add screenshots of your app here]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- [Pexels](https://pexels.com) for providing beautiful stock images
- [Pico CSS](https://picocss.com) for the minimal CSS framework
- [Supabase](https://supabase.com) for the backend infrastructure
- [React](https://reactjs.org) for the amazing frontend framework

---

**Built with ❤️ using React, Supabase & Pico CSS****

Time spent: **👉🏿 X** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [X] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [X] Picocss is used to style HTML elements
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='https://github.com/Itsurguy2/creatorverse/blob/master/src/assets/Creators%20gif%203.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  👉🏿 GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

## License

Copyright [👉🏿2025] [👉🏿 Jesse Rosenthal]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
