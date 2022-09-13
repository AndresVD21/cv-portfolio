# Curriculum Vitae/Portfolio - Andres Valencia

This project is all about personal learning. Here I'm improving already acquired skills like **Angular, HTML, CSS, SCSS and Javascript** and beginning to know some other interesting tools and frameworks such as **React.js, NX, Firebase and Express**.

Let's get into what we have here:

## Technologies

---

### **Frontend**

We have two projects serving the frontend of the curriculum, they look pretty much similar with some minor differences. This was to understand that with the concepts we can build an app no matter the technology.

<p><img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/angularjs/angularjs-original.svg" alt="Angular" width="100">
<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" alt="React" width="100"></p>

---

### **Backend**

Despite I'm not a fullstack or backend developer I know the importance to understand the other side of this world. With that said to test the connection between frontend and backend in local we have an Express app and to make use of Vercel I've created a little Next.js app to serve the endpoints.

<p><img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" alt="Express" width="100">
<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nextjs/nextjs-original.svg" alt="Next.js" width="100"></p>

Also I wanted to learn about the **Firebase** and how it provides the Backend as a Service solution (Still under development).

<img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/firebase/firebase-plain.svg" alt="Firebase" width="100">

---

### **Project Structure**

This project was generated using [Nx](https://nx.dev). 🔎 **Smart, Fast and Extensible Build System**

<p><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="100"></p>

---

## Serving the Project

To serve the **Angular** and **React** apps (set --port if you want to see both project at the same time):

```cmd
nx serve cv-angular --port={port}
```

```cmd
nx serve cv-react --port={port}
```

To serve the **Express** api run:

```cmd
nx serve api
```

**Still in development**

To serve firebase functions locally run:

```cmd
nx run firebase:serve
```

## See it working

The project is deployed in **Vercel** using Next.js to retrieve the data:

[CV Portfolio - Angular](cv-portfolio-angular.vercel.app)

[CV Portfolio - React](cv-portfolio-react.vercel.app)
