# Sachin Prabhakar's Portfolio

Welcome to my personal portfolio site!  
This project is built with [Next.js](https://nextjs.org/) (App Router), [Sanity.io](https://www.sanity.io/) for content management,[ShadcnUI](https://ui.shadcn.com/docs/) for components and carousel and [Tailwind CSS](https://tailwindcss.com/) for styling.

## 🚀 Features

- **Project Showcase:** Browse my projects with images, descriptions, and live links.
- **Responsive Design:** Looks great on all devices.
- **Sanity Studio:** Embedded admin panel for content management at `/admin`.
- **Optimized Images:** Uses Next.js Image component for fast, responsive images.
- **Modern Stack:** Next.js 15, React 19, Tailwind CSS 4, TypeScript.
- **Clean layout:** with light/dark mode support (if you added one)
- **About Me section:** with personal background and goals



## 🛠️ Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/your-portfolio-repo.git
   cd your-portfolio-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your Sanity project details.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Access the site:**
   - Portfolio: [http://localhost:3000](http://localhost:3000)
   - Admin Studio: [http://localhost:3000/admin](http://localhost:3000/admin)

## 🛠️ Tech Stack

- **Next.js 14 App Router**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Sanity.io** for CMS
- **ShadCN UI** for UI components

## 🖼️ Image Optimization

External images from Sanity are enabled in `next.config.js`:
```js
images: {
  domains: ['cdn.sanity.io'],
}
```

## ✍️ Customization

- **Add/Edit Projects:**  
  Use the `/admin` route to manage your projects via Sanity Studio.
- **Styling:**  
  Edit `app/globals.css` or use Tailwind utility classes in your components.

## 📦 Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint code
- `npm run tailwind:init` — Initialize Tailwind config

---

**Made with ❤️ by Sachin Prabhakar**
