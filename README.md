# Challenge técnico de React

Una aplicación de blog construida con **React.js**, **Vite**, **TailwindCSS**, **Firebase Auth** y **Firestore**.
Permite visualizar publicaciones, filtrar por tags, ver comentarios, y autenticarse con Google. Además, los datos de **usuarios** y **posteos** se persisten en **Firestore**.

## Tecnologías utilizadas

- **React.js** — Librería principal
- **Vite** — Bundler rápido y ligero
- **TailwindCSS** — Framework CSS para estilos rápidos
- **Firebase Auth** — Autenticación de usuarios (Google Sign-In)
- **Firestore** — Base de datos NoSQL para persistencia de datos
- **DummyJSON API** — Fuente de datos para usuarios y publicaciones (con respaldo en Firestore)

## Estructura del Proyecto

```
│ src
│ ├── components      # Componentes reutilizables (PostCard, UserRow, etc.)
│ ├── context         # Contextos globales (AuthContext)
│ ├── pages           # Vistas principales (Home, Users)
│ ├── services        # Llamadas a APIs
│ ├── config          # Configuración de Firebase
│ ├── types.ts        # Tipos globales TypeScript
│ └── App.tsx         # Archivo raíz
│
├── public            # Archivos estáticos
├── .env.sample       # Archivo de ejemplo para variables de entorno
├── vite.config.ts    # Configuración de Vite
└── tailwind.config.js # Configuración de TailwindCSS
```

## Configuración Inicial

1. **Clona el repositorio:**

```bash
git clone https://github.com/RamunnoAJ/challenge-infobae.git
cd challenge-infobae
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Configura las variables de entorno:**

- Renombra el archivo `.env.sample` a `.env`:

```bash
cp .env.sample .env
```

- Agrega tus credenciales de Firebase en el `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Configura las Reglas de Firestore:**

Para desarrollo, usa estas reglas en **Firestore → Rules**:

```plaintext
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Ejecutar la App Localmente

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

## Funcionalidades

- ✅ **Ver publicaciones** con imagen principal, tags y autor
- ✅ **Filtrar por tags**
- ✅ **Ver comentarios de un post**
- ✅ **Autenticación con Google** (Firebase Auth)
- ✅ **Listar usuarios**
- ✅ **Persistencia de datos** (usuarios y posteos) en Firestore
- ✅ **Protección de rutas** para la vista de usuarios

## Notas Importantes

La UI fue hecha siguiendo estos wireframes:

![image](https://github.com/user-attachments/assets/63da187b-169e-4f53-b4f4-a8b51e52f101)
![image](https://github.com/user-attachments/assets/9734bd23-7170-4e59-9590-288d3b0d7c74)

## Créditos

Desarrollado por **[Agustíin Ramunno](https://github.com/RamunnoAJ)**
Gracias por revisar este proyecto
